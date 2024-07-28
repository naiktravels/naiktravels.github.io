import React from "react"
import Header from "./Header"
import AboutUs from "./AboutUs"
import Gallery from "./Gallery"

const NavBarLayout = ({ children }) => {
    const galleryItems = [
  {
    id: "1",
    src: "../images/bangalore-palace.jpg",
    alt: "Bangalore Palace facade",
    location: "Bangalore Palace"
  },
  {
    id: "2",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Lalbagh_Glass_House_night_view.jpg",
    alt: "Lalbagh Botanical Garden Glass House at night",
    location: "Lalbagh Botanical Garden"
  },
  {
    id: "3",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Vidhana_Soudha_2012.jpg",
    alt: "Vidhana Soudha, seat of state legislature",
    location: "Vidhana Soudha"
  },
  {
    id: "4",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cubbon_park_bangalore.jpg",
    alt: "Lush greenery in Cubbon Park",
    location: "Cubbon Park"
  },
  {
    id: "5",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Iskcon_temple_bangalore.jpg",
    alt: "ISKCON Temple Bangalore",
    location: "ISKCON Temple"
  },
  {
    id: "6",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Bangalore_Aquarium.JPG",
    alt: "Bangalore Aquarium exterior",
    location: "Bangalore Aquarium"
  },
  {
    id: "7",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Innovative_Film_City%2C_Bangalore.jpg",
    alt: "Innovative Film City entrance",
    location: "Innovative Film City"
  },
  {
    id: "8",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Tippu_Sultan%27s_Summer_Palace%2C_Bangalore.jpg",
    alt: "Tipu Sultan's Summer Palace",
    location: "Tipu Sultan's Summer Palace"
  }
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