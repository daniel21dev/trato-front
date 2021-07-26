import types from '../types'

const initialState = {
    user: null,
    token: null,
    error: null,
    loading: false
}

const authReducer = ( state = initialState, action ) =>{
    switch ( action.type ) {
        case types.POST_LOGIN:
            return {
                ...state,
                loading: true,
                error: false
            }
        case types.POST_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                loading: false,
                error: false
            }
        case types.POST_LOGIN_ERROR:
            return {
                ...state,
                error: true,
                loading: false
            }
        default:
            return state
    }
}

export default authReducer