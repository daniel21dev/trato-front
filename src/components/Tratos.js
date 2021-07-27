import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTratosAction } from '../actions/tratosActions'
import { Layout } from './layout/Layout'
import { Trato } from './tratos/Trato'

export const Tratos = () => {

    const dispatch = useDispatch()
    const { tratos } = useSelector( state => state.tratos )
    
    useEffect(()=>{
        dispatch( getTratosAction() )
    },[ dispatch ])

    return (
        <Layout>
            <main className="sm:w-full md:w-9/10 lg:w-3/4 mx-auto p-4">
                <div>
                    {
                        tratos.map( trato =>(
                            <Trato 
                                key={ trato._id }
                                trato={ trato }
                            />
                        ))
                    }
                </div>
            </main>
        </Layout>
    )
}
