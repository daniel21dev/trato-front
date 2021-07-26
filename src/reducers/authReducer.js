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
        case types.SIGNUP:
            return {
                ...state,
                loading: true,
                error: false
            }
        case types.POST_LOGIN_SUCCESS:
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                token: action.payload.token ? action.payload.token : localStorage.getItem('token'),
                user: action.payload.user,
                loading: false,
                error: false
            }
        case types.POST_LOGIN_ERROR:
        case types.SIGNUP_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case types.REMOVE_ERROR:
            return{
                ...state,
                error: false
            }
        case types.LOGOUT:
            return{
                ...initialState
            }
        default:
            return state
    }
}

export default authReducer