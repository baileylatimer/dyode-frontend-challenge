import * as React from "react"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"


const IndexPage = () => {
  return (
    <main>
      <Newsletter/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
