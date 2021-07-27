import { authGet } from "../helpers/axiosHelpers";
import types from "../types";

/** In API pagos, here Tratos **/
export const getTratosAction = () =>{
    return async dispatch =>{
        dispatch( getTratos() )
        try {
            const { data } = await authGet('/pagos')
            dispatch( getTratosSuccess( data.pagos ) )   
        } catch (error) {
            console.log( error );
            dispatch( getTratosError() )
        }
    }
}

const getTratos = () =>({
    type: types.GET_TRATOS
})

const getTratosSuccess = tratos =>({
    type: types.GET_TRATOS_SUCCESS,
    payload: tratos
})

const getTratosError = () =>({
    type: types.GET_TRATOS_ERROR
})