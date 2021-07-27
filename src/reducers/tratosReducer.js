import types from "../types";

const initialState = {
    tratos: [],
    error: null,
    loading: false
}

const tratosReducer = ( state = initialState, action ) =>{
    switch ( action.type ) {
        case types.GET_TRATOS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.GET_TRATOS_SUCCESS:
            return{
                ...state,
                tratos: action.payload,
                loading: false,
                error: null
            }
        case types.GET_TRATOS_ERROR:
            return{
                ...state,
                loading: false,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}

export default tratosReducer