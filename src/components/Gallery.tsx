import React from "react"

interface GalleryItem {
  src: string
  alt: string
}

interface GalleryProps {
  items: GalleryItem[]
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items.map((item, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery
