import React from "react"
import Header from "./Header"
import AboutUs from "./AboutUs"
import Gallery from "./Gallery"
import Footer from "./Footer"

const NavBarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-1 p-8 max-w-7xl mx-auto">
       
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default NavBarLayout