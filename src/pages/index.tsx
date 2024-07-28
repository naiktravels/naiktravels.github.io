import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBarLayout from "../components/Layout"


const IndexPage: React.FC<PageProps> = () => {
  return (
      <NavBarLayout />
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
