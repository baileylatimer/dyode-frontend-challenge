import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  autoplay: false,
}

const Hero = ({ data }) => {
  return (
    <Slider {...settings} className="overflow-hidden">
      <div className="slide--wrapper">
        <div className="slide flex flex-col justify-center items-center">
          <StaticImage className="slider--img" src="../images/hero--01.jpg" alt="Shop New Arrivals" />
          <div className="container">
            <div className="slider--content flex flex-col py-8">
              <h1 className="m0">Shop New Arrivals</h1>
              <p className="subheader py-2">Our coolest new items are waiting for you!</p>
              <a href="/test" className="btn btn--primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="slide--wrapper">
        <div className="slide flex flex-col justify-center items-center">
          <StaticImage className="slider--img" src="../images/hero--02.jpg" alt="Our Fave Tees" />
          <div className="container">
            <div className="slider--content flex flex-col py-8">
              <h1 className="m0 text--light">Our Fave Tees</h1>
              <p className="subheader py-2 text--light">Shop all of our favorites.</p>
              <a href="/test" className="btn btn--primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="slide--wrapper">
        <div className ="slide flex flex-col justify-center items-center">
          <StaticImage className="slider--img" src="../images/hero--03.jpg" alt="Men’s Tees" />
          <div className="container">
            <div className="slider--content flex flex-col py-8">
              <h1 className="m0 text--light">Men’s Tees</h1>
              <p className="subheader py-2 text--light">Find the perfect shirt.</p>
              <a href="/test" className="btn btn--primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

    </Slider>
  )
}

export default Hero
