import {FETCH_DATA, RENDER_DATA, POST_DATA} from '../actions/mainActions';

const initialState = {
    smurfs:[],
    isFetchingData:false
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData:true
            };

            case RENDER_DATA:
                return {
                    ...state,
                    smurfs:action.payload,
                    isFetchingData:false
                };
                case POST_DATA:
                    return {
                        ...state,
                        smurfs:action.payload
                    }
    }
}