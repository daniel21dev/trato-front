import React from 'react'
import './nav.css'

export const Nav = () => {
    return (
      <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
        
      <div className="container mx-auto flex justify-between">
        <div className="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Trato</div>
        <ul className="flex">
          
          {/*Regular Link*/}
          <li className="hover:bg-blue-800 hover:text-white">
            <a href="#" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Nuevo trato</a>
          </li>
          <li className="hover:bg-blue-800 hover:text-white">
            <a href="#" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Tratos</a>
          </li>
          {/*Toggleable Link*/}

          <li className="toggleable hover:bg-blue-800 hover:text-white">
            
            <input type="checkbox" defaultValue="selected" id="toggle-one" className="toggle-input" />
            <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Click</label>

            <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800 sm:w-full md:w-1/2 lg:w-1/3">
              <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">

                <ul className="px-4 sm:w-full  pb-6 pt-6 lg:pt-3">
                  <h3 className="font-bold text-xl text-white text-bold mb-2">Usuario</h3>
                  <li>
                    <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Configuración</a>
                  </li>
                  <li>
                    <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Cerrar sesión</a>
                  </li>
                 
                </ul>
                
              </div>
            </div>
          </li>
          {/* ## Toggleable Link Template ##
    
          <li class="toggleable"><input type="checkbox" value="selected" id="toggle-xxx" class="toggle-input"><label for="toggle-xxx" class="cursor-pointer">Click</label><div role="toggle" class="mega-menu">
          Add your mega menu content
          </div></li>
          
          */}
          
        </ul>
      </div>
    </nav>
    
    )
}
