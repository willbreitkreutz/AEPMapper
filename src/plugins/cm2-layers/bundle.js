import orderBy from "lodash/orderBy";
import layerConfig from "./config.json";
import scaleToZoomLevel from "../cm2/scale-to-zoom-level";

function mapCm2ToCm3(layers) {
  return layers.map((lyr) => {
    return {
      id: lyr.NAME,
      parentId: lyr.PARENT === "root" ? null : lyr.PARENT,
      layerOrder: lyr.LAYERORDER,
      serviceType: lyr.LAYERTYPE === "F" ? "Folder" : lyr.LAYERTYPE,
      tiled: 0,
      displayName: lyr.FULLNAME,
      description: lyr.DESCRIPTION,
      url: lyr.URL,
      layerList: lyr.PARAMS
        ? lyr.PARAMS.layers
          ? lyr.PARAMS.layers
          : null
        : null,
      attribution: null,
      geometryType: null,
      minzoom: scaleToZoomLevel(lyr.MINZOOM, 0),
      maxzoom: scaleToZoomLevel(lyr.MAXZOOM, 20),
      localTable: "NOAA.NATIONAL_FCST_VW_MIN",
      metadataUrl: lyr.METADATA_URL,
      minX: -180,
      maxX: 180,
      minY: -89,
      maxY: 89,
      opacity: lyr.OPTIONS
        ? lyr.OPTIONS.opacity
          ? lyr.OPTIONS.opacity
          : 1
        : 1,
      queryTemplate: null,
      hoverTemplate: null,
      queryable: 1,
      visible: 0,
      collapsed: 1,
      idCol: "objectid",
      shapeCol: "SHAPE",
      allowEdit: 0,
      allowExport: 1,
      cacheTiles: 0,
      labelDefault: 0,
      labelEnabled: 0,
    };
  });
}

export default {
  name: "cm2",

  getReducer: () => {
    const initialData = {
      _shouldInitialize: false,
    };

    return (state = initialData, { type, payload }) => {
      switch (type) {
        case "CM2_INITIALIZE_START":
        case "CM2_INITIALIZE_FINISHED":
          return Object.assign({}, state, payload);
        case "MAP_INITIALIZED":
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
    // maybe turn this on at some point
    // const params = store.selectWindowLocationParams();
    // const turnOn = !params.layers ? [] : params.layers.split(",").map(Number);

    const cm3Layers = mapCm2ToCm3(layerConfig);

    const sortedLayers = orderBy(
      cm3Layers,
      ["parentId", "layerOrder"],
      ["desc", "asc"]
    );
    sortedLayers.forEach((lyr) => {
      if (lyr.parentId) {
        const idMap = store.selectIdMap();
        lyr.parentUid = idMap[lyr.parentId];
      } else {
        lyr.parentUid = store.selectTreeViewRootId;
      }
      // if (lyr.teamDatasetId && turnOn.indexOf(lyr.teamDatasetId) !== -1) {
      //   lyr.visible = true;
      // }
      store.doAddLayer(lyr);
    });
    dispatch({
      type: "CM2_INITIALIZE_FINISHED",
    });
  },

  reactCm2ShouldInitialize: (state) => {
    if (state.cm2._shouldInitialize)
      return { actionCreator: "doCm2Initialize" };
  },
};
