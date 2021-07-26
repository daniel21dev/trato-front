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
            dispatch( loginError( error ) )
        }
    }
}

const postLogin = () =>({
    type: types.POST_LOGIN
})

const loginSuccess = ({user,token}) =>({
    type: types.POST_LOGIN_SUCCESS,
    payload: {user,token}
})

const loginError = () =>({
    type: types.POST_LOGIN_ERROR
})