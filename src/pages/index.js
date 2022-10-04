import * as React from "react"
import Header from "../components/header"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"


const IndexPage = () => {
  return (
    <main>
      <Header/>
      <Newsletter/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
