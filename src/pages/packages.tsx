// src/pages/packages.tsx
import React from "react"
import NavBarLayout from "../components/Layout"
import { HeadFC } from "gatsby"

const packages = [
  {
    id: 1,
    title: "Basic Package",
    imgSrc: "https://via.placeholder.com/300",
    price: "$100",
    description: "This is the basic package offering essential features."
  },
  {
    id: 2,
    title: "Standard Package",
    imgSrc: "https://via.placeholder.com/300",
    price: "$200",
    description: "This is the standard package offering more features."
  },
  {
    id: 3,
    title: "Premium Package",
    imgSrc: "https://via.placeholder.com/300",
    price: "$300",
    description: "This is the premium package offering all features."
  },
  // Add more packages as needed
]

const Packages: React.FC = () => {
  return (
    <NavBarLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Packages</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <div key={pkg.id} className="border bg-gradient-to-tl  from-blue-50 to-purple-100 border-gray-300 rounded-lg shadow-lg p-4">
              <img src={pkg.imgSrc} alt={pkg.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-bold mb-2">{pkg.title}</h2>
              <p className="text-gray-700 mb-4">{pkg.description}</p>
              <div className="text-lg font-semibold">{pkg.price}</div>
            </div>
          ))}
        </div>
      </div>
    </NavBarLayout>
  )
}

export default Packages

export const Head: HeadFC = () => <title>Packages Page</title>
