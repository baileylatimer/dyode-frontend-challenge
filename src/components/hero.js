import React from "react"
import { graphql } from "gatsby"
import Image from './image';

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
}

const Hero = ({ data }) => {
  return (
    <Slider {...settings} className="overflow-hidden">
          <div>
            <Image src="hero.jpg" alt="Sunset"/>
            <img src="./logo.png"/>
            <h1>1</h1>
          </div>

    </Slider>
  )
}

export default Hero
