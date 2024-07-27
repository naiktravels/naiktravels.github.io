import React from "react"
import { Link } from "gatsby"

const NavBarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-purple-600 p-4 text-white sticky">
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          {/* Add more nav links as needed */}
        </ul>
      </nav>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}

export default NavBarLayout
