import axiosClient from "../config/axios";
import types from "../types";

export const LoginAction = ( email, password ) =>{
    return async dispatch =>{
        dispatch( postLogin() )
        try {
            const {data} = await axiosClient.post('/login',{
                email,
                password
            })

            localStorage.setItem('token', data.token )
            dispatch( loginSuccess( data ) )
        } catch (error) {
            localStorage.removeItem('token')
            dispatch( loginError( error ) )
        }
    }
}

export const getMeAction = ( token ) =>{

    return async dispatch =>{
        dispatch( postLogin() )
        try {
            const {data} = await axiosClient.get('/users/me',{
                headers:{ 'x-token': token }
            })
            dispatch( loginSuccess( data ) )
        } catch (error) {
            localStorage.removeItem('token')
            dispatch( loginError( error ) )
        }
    }
}

const postLogin = () =>({
    type: types.POST_LOGIN
})

const loginSuccess = ({user,token = null}) =>({
    type: types.POST_LOGIN_SUCCESS,
    payload: {user,token}
})

const loginError = () =>({
    type: types.POST_LOGIN_ERROR
})

/** LOGOUT */

export const logoutAction = () =>{
    return dispatch =>{
        localStorage.removeItem('token')
        dispatch({
            type: types.LOGOUT
        })
    }
}
