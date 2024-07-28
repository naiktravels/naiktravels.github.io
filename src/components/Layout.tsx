import React from "react"
import Header from "./Header"
import AboutUs from "./AboutUs"
import Gallery from "./Gallery"

const NavBarLayout = ({ children }) => {
    const galleryItems = [
  {
    id: "1",
    src: "/bangalore-palace.jpg",
    alt: "Bangalore Palace facade",
    location: "Bangalore Palace"
  },
  {
    id: "2",
    src: "/lalbagh-botanical-garden.jpg",
    alt: "Lalbagh Botanical Garden Glass House at night",
    location: "Lalbagh Botanical Garden"
  },
  {
    id: "3",
    src: "/vidhana-soudha.jpg",
    alt: "Vidhana Soudha, seat of state legislature",
    location: "Vidhana Soudha"
  },
  {
    id: "4",
    src: "/cubbon-park.jpg",
    alt: "Lush greenery in Cubbon Park",
    location: "Cubbon Park"
  },
];
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-1 p-8 max-w-7xl mx-auto">
        <Gallery items={galleryItems} />
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