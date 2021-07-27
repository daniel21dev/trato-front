import axiosClient from "../config/axios"

export const authGet = ( ruta ) =>{
    return axiosClient.get( ruta,{
        headers:{
            'x-token': localStorage.getItem('token') || ''
        }
    })
}

export const authPost = ( ruta, data ) =>{
    return axiosClient.post( ruta, {...data},{
        headers:{
            'x-token': localStorage.getItem('token') || ''
        }
    })
}