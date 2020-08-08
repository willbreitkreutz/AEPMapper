
import 'ol/ol.css';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import {getSource} from '@corpsmap/corpsmap-bundles/utils/layer-utils'
import {getLayer} from '@corpsmap/corpsmap-bundles/utils/layer-utils'

export default {
    name: 'draw',
    getReducer:() =>{
        const initialData = {
            shouldInitalize: false,
        }
        return (state = initialData, {type, payload}) => {
            switch(type){
                case 'DRAW_INITIALIZE_STARTED':
                case 'DRAW_INITIALIZE_FINISHED':
                    return Object.assign({}, state, payload);
                case "MAP_INITIALIZED":
                    return Object.assign({}, state, {
                        shouldInitalize: true
                    });
                default:
                    return state;
            }
        }
    },
    doDrawInitializeLayer: () => ({dispatch, store}) => {
        dispatch({type: 'DRAW_INITIALIZE_STARTED', payload: {shouldInitalize: false}})
        const map = store.selectMap();
        const lyr = getLayer({
            serviceType: 'ArcGIS',
            url: "https://basemap.nationalmap.gov/ArcGIS/rest/services/USGSTopo/MapServer"
        })
        map.addLayer(lyr)
        //map.removeLayer(map.getLayers()[0])
        //map.getLayers().insertAt(0, wms);;
        dispatch({
            type: 'DRAW_INITIALIZE_FINISHED'
        })
    },
    reactDrawShouldInitialize: (state) => {
        if(state.draw.shouldInitalize) return { actionCreator: 'doDrawInitializeLayer'}
    },
    init: (store) =>{

    }
}