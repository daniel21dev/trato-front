import types from "../types";

const initialState = {
    posts: [],
    error: null,
    loading: false
}

const postsReducer = ( state = initialState, action ) =>{
    switch ( action.type ) {
        case types.GET_POSTS:
            return {
                ...state,
                loading: true,
                error: false
            }
        case types.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: false
            }
        case types.GET_POSTS_ERROR:
            return {
                ...state,
                error: true,
                loading: false
            }
        default:
            return state
    }
}

export default postsReducer