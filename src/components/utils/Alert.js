import React from 'react'

const alertType ={
    ['info']:{
        color: 'blue',
        logo: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-blue-500 h-4 w-4">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
            </svg>
        )
    },
    ['success']:{
        color: 'green',
        logo: () =>(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-green-500 h-4 w-4">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" /></svg>
        )
    },
    ['error']:{
        color: 'red',
        logo: () =>(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-red-500 h-4 w-4">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
            </svg>
        )
    }
}
export const Alert = ({ type='info', msg = 'message' }) => {

    if( !Object.keys( alertType ).includes( type ) ){
        return null
    }

    return (
        <div className={`bg-${ alertType[type].color}-100 p-5 w-full sm:w-1/2 border-l-4 border-${ alertType[type].color}-500 shadow`}>
              <div className="flex space-x-3">
                { alertType[type].logo() }
                <div className={`flex-1 leading-tight text-sm text-${ alertType[type].color}-700`}>{ msg }</div>
              </div>
        </div>
    )
}