import React from 'react'

export const Trato = ({ trato }) => {
    return (
        <div 
            className={`w-full bg-white rounded shadow-lg border-l-4 border-${estadoColor[ trato.estado ]}-600 p-4 my-2 bg-gradient-to-l from-${estadoColor[ trato.estado ]}-200 via-transparent to-transparent`}
            
            >
            <div className="font-semibold flex justify-between">
                { trato.estado }
                { estadoLogo[ trato.estado ]() }
            </div>
            { trato.fecha }
        </div>
    )
}

const estadoColor ={
    'PENDIENTE': 'yellow',
    'CANCELADO': 'red',
    'COMPLETADO': 'green'
}

const estadoLogo ={
    'PENDIENTE': ()=> (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>),
    'CANCELADO': ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>),
    'COMPLETADO': ()=>(
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>)
}