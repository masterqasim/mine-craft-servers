import React from 'react'

const Header = () => {
  return (
    <div>
        <nav class="relative w-full flex flex-wrap items-center justify-between py-1 bg-gray-900 text-gray-100  focus:text-gray-700 shadow-lg">
            <div class="container-fluid w-full flex flex-wrap items-center justify-around px-6">
                <div class="container-fluid">
                    <span class="text-xl font-semibold" href="#">Top Minecraft Servers</span>
                    <span class="p-4">List by...
                    
                    </span>
                    <span class="p-4">Login</span>
                    <span class="p-4">Register</span>
                    <span class="p-4">Sponsord</span>
                    <span class="p-4">Contact</span>
                </div>
                <div class="container-fluid">
                    <input type="text" placeholder='Search...' className='p-2 m-0'/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header