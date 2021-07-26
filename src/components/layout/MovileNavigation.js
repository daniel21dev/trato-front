import React from 'react'
import { Link } from 'react-router-dom'

export const MovileNavigation = () => {
    return (
        <footer className="md:hidden w-full bg-white shadow-xl h-20 fixed bottom-0 p-4">
            <div className="flex justify-around w-full">

                <Link 
                    to='/nuevotrato' 
                    className="text-blue-600 rounded-full cursor-pointer p-2 flex-col items-center hover:bg-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <spam>Nuevo Trato</spam>
                </Link>

                <Link 
                    to='/tratos' 
                    className="text-blue-600 rounded-full cursor-pointer p-2 flex-col items-center hover:bg-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <spam>Tratos</spam>
                </Link>

                <div className="text-blue-600 rounded-full cursor-pointer p-2 flex-col items-center hover:bg-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        <spam>Dinero</spam>
                    </div>
                </div>
        </footer>
    )
}
