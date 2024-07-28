import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBarLayout from "../components/Layout"
import Gallery from "../components/Gallery"
import AboutUs from "../components/AboutUs"


const IndexPage: React.FC<PageProps> = () => {
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
      <NavBarLayout > 
        <div>
          <Gallery items={galleryItems} />
        <AboutUs />
        </div>
         </NavBarLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
