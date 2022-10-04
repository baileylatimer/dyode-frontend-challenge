import * as React from "react"
import Header from "../components/header"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"
import AnnouncementBar from "../components/announcement-bar"


const IndexPage = () => {
  return (
    <main>
      <AnnouncementBar text="Free Shipping on All Orders Over $75"/>
      <Header/>
      <Newsletter/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
