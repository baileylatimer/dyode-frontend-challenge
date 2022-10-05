
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const FeaturedBanner = props => (
<div className="featured--banner slide flex flex-col justify-start items-center">
  <StaticImage className="slider--img" src="../images/featured--banner.jpg" alt="Our Favorite Tees" />
  <div className="container">
    <div className="slider--content flex flex-col py-8 items-end">
      <div className="flex flex-col">
        <h1 className="m0">Shop New Arrivals</h1>
        <p className="subheader py-2">Everyday tees you need.</p>
        <a href="/test" className="btn btn--tertiary">Shop Now</a>
      </div>
    </div>
  </div>
</div>
);



export default FeaturedBanner