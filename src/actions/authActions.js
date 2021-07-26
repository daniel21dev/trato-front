import axiosClient from "../config/axios";
import types from "../types";

/** LOGIN */
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
            dispatch( loginError( error.response.data.msg ) )

            setTimeout(()=>{
                dispatch( removeError() )
            }, 3000)
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

const loginError = ( error ) =>({
    type: types.POST_LOGIN_ERROR,
    payload: error
})

/** SINGUP */
export const signupAction = ( name, email, password ) =>{
    return async dispatch =>{
        dispatch( signup() )
        try {
            const { data } = await axiosClient.post('/users',{
                name,
                email,
                password
            })

            localStorage.setItem('token', data.token )
            dispatch( signupSuccess( data ) )
        } catch (error) {
            localStorage.removeItem('token')
            dispatch( signupError( error.response.data.errors[0].msg ) )

            setTimeout(()=>{
                dispatch( removeError() )
            }, 3000)
        }
    }
}

const signup = () =>({
    type: types.SIGNUP
})

const signupSuccess = ({user,token}) =>({
    type: types.SIGNUP_SUCCESS,
    payload: {user,token}
})

const signupError = ( error ) =>({
    type: types.SIGNUP_ERROR,
    payload: error
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

const removeError = () =>({
    type: types.REMOVE_ERROR
})
