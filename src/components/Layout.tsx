import React from "react"
import Header from "./Header"
import AboutUs from "./AboutUs"

const NavBarLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-1 p-8 max-w-7xl mx-auto">
        <AboutUs />
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        {/* Footer content remains the same */}
      </footer>
    </div>
  )
}

export default NavBarLayout