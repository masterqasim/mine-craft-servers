import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor: "#fff"}}>
        <footer className="bg-gray-900 text-center lg:text-left ">
            <div className="text-center p-4" style={{backgroundColor:'black',backgroundImage: `url("/diagmonds.jpg")`}}>
              <p className="text-white">
              © 2012 - 2022 Top Minecraft Servers<br/>
              Minecraft is copyright Mojang/Microsoft and is not affiliated with this site.

              </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer