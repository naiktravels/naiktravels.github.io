import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBarLayout from "../components/Layout"
import Gallery from "../components/Gallery"
import AboutUs from "../components/AboutUs"


const IndexPage: React.FC<PageProps> = () => {
  const galleryItems = [
    { src: "https://via.placeholder.com/400", alt: "Placeholder Image 1" },
    { src: "https://via.placeholder.com/400", alt: "Placeholder Image 2" },
    { src: "https://via.placeholder.com/400", alt: "Placeholder Image 3" },
    { src: "https://via.placeholder.com/400", alt: "Placeholder Image 4" },
  ]
  return (
    <NavBarLayout>
      <div className="underline font-bold">Discover the World with Us</div>
      <Gallery items={galleryItems} />
      <AboutUs />
    </NavBarLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
