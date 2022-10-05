import * as React from "react"
import AnnouncementBar from "../components/announcement-bar"
import Header from "../components/header"
import Hero from "../components/hero"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"
import CollectionList from "../components/collection-list"
import FeaturedCollection from "../components/featured-collection"
import SectionTitle from "../components/section-title"



const IndexPage = () => {
  return (
    <main>
      <AnnouncementBar text="Free Shipping on All Orders Over $75"/>
      <Header/>
      <Hero/>
      <CollectionList/>
      <SectionTitle text="New Arrivals"/>
      <FeaturedCollection/>
      <Newsletter/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>DYODE | Home Page</title>
