import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="relative w-full flex flex-wrap items-center justify-between py-1 bg-gray-900 text-gray-100  focus:text-gray-700 shadow-lg">
            <div className="container-fluid w-full flex flex-wrap items-center justify-around px-6">
                <div className="container-fluid">
                    <span className="text-xl font-semibold" href="#">Top Minecraft Servers</span>
                    <span className="p-4">List by...
                    
                    </span>
                    <span className="p-4">Login</span>
                    <span className="p-4">Register</span>
                    <span className="p-4">Sponsord</span>
                    <span className="p-4">Contact</span>
                </div>
                <div className="container-fluid">
                    <input type="text" placeholder='Search...' classNameName='p-2 m-0'/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header