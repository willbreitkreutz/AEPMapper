import regulatoryConfig from "./layer-configurations/regulatory-config.js";
import usaceConfig from "./layer-configurations/usace-config.js";
import usaceDivisionDistrictDataConfig from "./layer-configurations/usace-division-district-data-config.js";
import dodConfig from "./layer-configurations/dod-config.js";
import federalConfig from "./layer-configurations/federal-config.js";
import worldBaseMapConfig from "./layer-configurations/world-base-map-config.js";
import filterToolConfig from "./layer-configurations/filter-tool-config.js";
import { transformExtent } from "ol/proj/";
import scaleToZoomLevel from "./scale-to-zoom-level";

export default {
  name: "cm2",

  getReducer: () => {
    const initialData = {
      config: {},
      _shouldZoom: false,
      _shouldInitialize: false,
      _shouldSetBasemap: false,
    };

    return (state = initialData, { type, payload }) => {
      switch (type) {
        case "CM2_INITIALIZE_START":
        case "CM2_INITIALIZE_FINISHED":
        case "CM2_ZOOM_STARTED":
        case "CM2_SET_BASEMAP_STARTED":
          return Object.assign({}, state, payload);
        case "TREEVIEW_ROOT_CREATED":
          return Object.assign({}, state, {
            _shouldInitialize: true,
          });
        default:
          return state;
      }
    };
  },

  doCm2Initialize: () => ({ dispatch, store }) => {
    dispatch({
      type: "CM2_INITIALIZE_START",
      payload: { _shouldInitialize: false },
    });

    // import and use the layer config from the js here as a back-up for the global config
    const layerConfig = [
      ...regulatoryConfig,
      ...usaceConfig,
      ...usaceDivisionDistrictDataConfig,
      ...dodConfig,
      ...federalConfig,
      ...worldBaseMapConfig,
      ...filterToolConfig,
    ];

    // load the global config if it exists, we loop through the folder order key to get the config
    // in the order that we want.
    let cm3Layers = layerConfig;
    if (window.CM_LAYERS) {
      cm3Layers = [];
      for (var i = 0; i < window.CM_LAYERS.folderOrder.length; i++) {
        if (window.CM_LAYERS.hasOwnProperty(window.CM_LAYERS.folderOrder[i])) {
          cm3Layers.push(...window.CM_LAYERS[window.CM_LAYERS.folderOrder[i]]);
        }
      }
    }

    const config = window.CM_GET_CONFIG ? window.CM_GET_CONFIG() : {};

    if (config.maplayer) {
      const turnOnLayers = config.maplayer
        .replace(" ", "")
        .toUpperCase()
        .split(",");
      cm3Layers.forEach((lyr) => {
        const id = lyr.id ? lyr.id : "";
        if (turnOnLayers.indexOf(id.toUpperCase()) !== -1) lyr.visible = true;
      });
    }

    store.doAddLayersBulk(cm3Layers);

    dispatch({
      type: "CM2_INITIALIZE_FINISHED",
      payload: {
        config: config,
        _shouldZoom: true,
        _shouldSetBasemap: true,
      },
    });
  },

  doCm2Zoom: () => ({ dispatch, store }) => {
    dispatch({
      type: "CM2_ZOOM_STARTED",
      payload: {
        _shouldZoom: false,
      },
    });
    const config = store.selectCm2Config();
    if (config.mapext0 && config.mapext1 && config.mapext2 && config.mapext3) {
      const ext = [
        config.mapext0,
        config.mapext1,
        config.mapext2,
        config.mapext3,
      ];
      const map = store.selectMap();
      const zoom = scaleToZoomLevel(Number(config.scale));
      store.doZoomToExtent(
        transformExtent(
          ext,
          store.selectGeoProjection(),
          store.selectMapProjection()
        ),
        () => {
          // if the user has a zoom scale, set that before resetting the home loc
          if (zoom) {
            const view = map.getView();
            const center = view.getCenter();
            store.doZoomToLocation(center, zoom);
          }
          window.setTimeout(() => {
            store.doZoomHomeResetLoc();
          }, 1000);
        }
      );
    }
  },

  doCm2SetBasemap: () => ({ dispatch, store }) => {
    dispatch({
      type: "CM2_SET_BASEMAP_STARTED",
      payload: {
        _shouldSetBasemap: false,
      },
    });

    const basemapList = store.selectBasemapList();
    const config = store.selectCm2Config();

    if (config.basemap) {
      let idx = null;
      for (var i = 0; i < basemapList.length; i++) {
        if (basemapList[i].id.toUpperCase() === config.basemap.toUpperCase()) {
          idx = i;
          break;
        }
      }
      if (idx) store.doChangeBasemap(idx);
    }
  },

  selectCm2Config: (state) => state.cm2.config,

  reactCm2ShouldInitialize: (state) => {
    if (state.cm2._shouldInitialize)
      return { actionCreator: "doCm2Initialize" };
  },

  reactCm2ShouldZoom: (state) => {
    if (state.cm2._shouldZoom) return { actionCreator: "doCm2Zoom" };
  },

  reactCm2ShouldSetBasemap: (state) => {
    if (state.cm2._shouldSetBasemap)
      return { actionCreator: "doCm2SetBasemap" };
  },
};
