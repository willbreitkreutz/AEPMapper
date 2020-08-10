import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import Projection from 'ol/proj/Projection';
import GeoJSON from 'ol/format/GeoJSON';
import geojsonvt from 'geojson-vt';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';

const geoJSON = new GeoJSON();

// Converts geojson-vt data to GeoJSON
var replacer = function(key, value) {
  if (value.geometry) {
    var type;
    var rawType = value.type;
    var geometry = value.geometry;

    if (rawType === 1) {
      type = 'MultiPoint';
      if (geometry.length == 1) {
        type = 'Point';
        geometry = geometry[0];
      }
    } else if (rawType === 2) {
      type = 'MultiLineString';
      if (geometry.length == 1) {
        type = 'LineString';
        geometry = geometry[0];
      }
    } else if (rawType === 3) {
      type = 'Polygon';
      if (geometry.length > 1) {
        type = 'MultiPolygon';
        geometry = [geometry];
      }
    }

    return {
      'type': 'Feature',
      'geometry': {
        'type': type,
        'coordinates': geometry
      },
      'properties': value.tags
    };
  } else {
    return value;
  }
};

export default {
  name:'test',

  getReducer: () => {
    const initialData = {
      _shouldInitialize: false
    };
    return (state = initialData, { type, payload }) => {
      switch(type){
        case 'TEST_INITIALIZE_START':
        case 'TEST_INITIALIZE_FINISHED':
          return Object.assign({}, state, payload);
        case 'MAP_INITIALIZED':
          return Object.assign({}, state, {
            _shouldInitialize: true
          })
        default:
          return state;
      }
    }
  },

  doTestInitialize: () => ({ dispatch, store, anonGet }) => {
    dispatch({
      type: 'TEST_INITIALIZE_START',
      payload: {
        _shouldInitialize: false
      }
    })

    const highlightSource = new VectorSource();
    const highlight = new VectorLayer({
      source: highlightSource,
      style: new Style({
        stroke: new Stroke({
          color: '#cceecc',
          width: 3
        }),
        fill: new Fill({
          color: 'rgba(23, 56, 78, 0.4)',
        })
      })
    })

    const map = store.selectMap();
    

    var url = 'crb-subbasin.geojson';
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(json) {
      var tileIndex = geojsonvt(json, {
        extent: 4096,
        debug: 1
      });
      var vectorSource = new VectorTileSource({
        format: new GeoJSON({
          // Data returned from geojson-vt is in tile pixel units
          dataProjection: new Projection({
            code: 'TILE_PIXELS',
            units: 'tile-pixels',
            extent: [0, 0, 4096, 4096]
          })
        }),
        tileUrlFunction: function(tileCoord) {
          var data = tileIndex.getTile(tileCoord[0], tileCoord[1], tileCoord[2]);
          var geojson = JSON.stringify({
            type: 'FeatureCollection',
            features: data ? data.features : []
          }, replacer);
          return 'data:application/json;charset=UTF-8,' + geojson;
        }
      });
      var vectorLayer = new VectorTileLayer({
        source: vectorSource
      });
      map.addLayer(vectorLayer);
      map.addLayer(highlight);

      map.on('pointermove', (e) => {
        highlightSource.clear();
        const features = map.getFeaturesAtPixel(e.pixel);
        if(features && features.length){
          highlightSource.addFeature(features[0]);
        }
      })

    });
    
  },

  reactTestShouldInitialize: (state) => {
    if(state.test._shouldInitialize) return { actionCreator: "doTestInitialize" };
  }
}