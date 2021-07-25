import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const SideBar = () => {
    return (
        
        <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
          <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
              <li className="mr-3 flex-1">
                <NavLink to='/clientes' 
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                    activeClassName='text-white border-pink-500'
                >
                  <i className="fas fa-tasks pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Clientes</span>
                </NavLink>
              </li>
              <li className="mr-3 flex-1">
                <NavLink to='/productos'
                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                activeClassName='text-white border-b-2 border-purple-500'
                >
                  <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Productos</span>
                </NavLink>
              </li>
              <li className="mr-3 flex-1">
                <NavLink to='/categorias' 
                    className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-white border-b-2 hover:border-blue-600"
                    activeClassName='text-white border-blue-600'
                    >
                  <i className="fa fa-wallet pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Categorias</span>
                </NavLink>
              </li>
              <li className="mr-3 flex-1">
                <a to='/ventas' 
                className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                activeClassName='text-white border-red-500'
                >
                  <i className="fa fa-wallet pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Ventas</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
    )
}
