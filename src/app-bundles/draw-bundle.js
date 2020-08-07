
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