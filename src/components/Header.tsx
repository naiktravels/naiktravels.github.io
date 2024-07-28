import React, { useState } from "react"
import { Link } from "gatsby"
import { FaHome, FaPlane, FaHotel, FaCamera, FaInfoCircle, FaPhoneAlt, FaBars } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Destinations", path: "/destinations", icon: FaPlane },
    { name: "Packages", path: "/packages", icon: FaHotel },
    { name: "Gallery", path: "/gallery", icon: FaCamera },
    { name: "About Us", path: "/about", icon: FaInfoCircle },
    { name: "Contact", path: "/contact", icon: FaPhoneAlt },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img className="h-8 w-auto" src="/logo.png" alt="Company Logo" />
          </Link>
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out flex items-center"
                >
                  <item.icon className="mr-2" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out flex items-center"
              >
                <item.icon className="mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header