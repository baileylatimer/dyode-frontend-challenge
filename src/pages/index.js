import * as React from "react"
import AnnouncementBar from "../components/announcement-bar"
import Header from "../components/header"
import Hero from "../components/hero"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"



const IndexPage = () => {
  return (
    <main>
      <AnnouncementBar text="Free Shipping on All Orders Over $75"/>
      <Header/>
      <Hero />
      <Newsletter/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
