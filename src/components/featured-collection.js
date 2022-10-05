
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
  prevArrow: <button type="button" class="slick-prev"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.795637 22.1525L20.2219 41.525C20.8584 42.1594 21.8888 42.1583 22.5242 41.5218C23.1592 40.8853 23.1575 39.8542 22.521 39.2194L4.25102 20.9999L22.5216 2.78053C23.1581 2.14561 23.1597 1.11522 22.5249 0.478661C22.2064 0.159561 21.7891 7.73526e-06 21.3718 7.77174e-06C20.9556 7.80813e-06 20.5399 0.158493 20.222 0.47538L0.795637 19.8474C0.489088 20.1524 0.317066 20.5675 0.317066 20.9999C0.317066 21.4324 0.48958 21.847 0.795637 22.1525Z" fill="black"/>
  </svg>
  </button>,
  nextArrow:  <button type="button" class="slick-next"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.2044 19.8475L2.77812 0.47495C2.14164 -0.159395 1.11117 -0.158329 0.475761 0.478231C-0.159158 1.11471 -0.157518 2.14576 0.479042 2.78059L18.749 21.0001L0.478386 39.2195C-0.158092 39.8544 -0.159733 40.8848 0.475104 41.5213C0.793631 41.8404 1.21092 42 1.62821 42C2.04444 42 2.46009 41.8415 2.77804 41.5246L22.2044 22.1526C22.5109 21.8476 22.6829 21.4325 22.6829 21.0001C22.6829 20.5676 22.5104 20.153 22.2044 19.8475Z" fill="black"/>
  </svg>
  </button>,
}

const FeaturedCollection = ({ data }) => {
  return (
  <Slider {...settings} className="overflow-hidden py-8 container m-auto">
      <div className="product--card flex flex-col justify-center items-center">
        <StaticImage className="" src="../images/product--img.jpg" alt="Shop Women's T-Shirt" />
        <div className="product-info flex flex-col justify-center items-center">
          <p className="product--title">Product Title</p>
          <p className="product--subtitle">Women's T-Shirt</p>
          <p className="product--price">$19.99</p>
        </div>
      </div>
      <div className="product--card flex flex-col justify-center items-center">
        <StaticImage className="" src="../images/product--img.jpg" alt="Shop Women's T-Shirt" />
        <div className="product-info flex flex-col justify-center items-center">
          <p className="product--title">Product Title</p>
          <p className="product--subtitle">Women's T-Shirt</p>
          <p className="product--price">$19.99</p>
        </div>
      </div>
      <div className="product--card flex flex-col justify-center items-center">
        <StaticImage className="" src="../images/product--img.jpg" alt="Shop Women's T-Shirt" />
        <div className="product-info flex flex-col justify-center items-center">
          <p className="product--title">Product Title</p>
          <p className="product--subtitle">Women's T-Shirt</p>
          <p className="product--price">$19.99</p>
        </div>
      </div>
      <div className="product--card flex flex-col justify-center items-center">
        <StaticImage className="" src="../images/product--img.jpg" alt="Shop Women's T-Shirt" />
        <div className="product-info flex flex-col justify-center items-center">
          <p className="product--title">Product Title</p>
          <p className="product--subtitle">Women's T-Shirt</p>
          <p className="product--price">$19.99</p>
        </div>
      </div>
      <div className="product--card flex flex-col justify-center items-center">
        <StaticImage className="" src="../images/product--img.jpg" alt="Shop Women's T-Shirt" />
        <div className="product-info flex flex-col justify-center items-center">
          <p className="product--title">Product Title</p>
          <p className="product--subtitle">Women's T-Shirt</p>
          <p className="product--price">$19.99</p>
        </div>
      </div>
      <div className="product--card flex flex-col justify-center items-center">
        <StaticImage className="" src="../images/product--img.jpg" alt="Shop Women's T-Shirt" />
        <div className="product-info flex flex-col justify-center items-center">
          <p className="product--title">Product Title</p>
          <p className="product--subtitle">Women's T-Shirt</p>
          <p className="product--price">$19.99</p>
        </div>
      </div>
      <div className="product--card flex flex-col justify-center items-center">
        <StaticImage className="" src="../images/product--img.jpg" alt="Shop Women's T-Shirt" />
        <div className="product-info flex flex-col justify-center items-center">
          <p className="product--title">Product Title</p>
          <p className="product--subtitle">Women's T-Shirt</p>
          <p className="product--price">$19.99</p>
        </div>
      </div>
      <div className="product--card flex flex-col justify-center items-center">
        <StaticImage className="" src="../images/product--img.jpg" alt="Shop Women's T-Shirt" />
        <div className="product-info flex flex-col justify-center items-center">
          <p className="product--title">Product Title</p>
          <p className="product--subtitle">Women's T-Shirt</p>
          <p className="product--price">$19.99</p>
        </div>
      </div>
      <div className="product--card flex flex-col justify-center items-center">
        <StaticImage className="" src="../images/product--img.jpg" alt="Shop Women's T-Shirt" />
        <div className="product-info flex flex-col justify-center items-center">
          <p className="product--title">Product Title</p>
          <p className="product--subtitle">Women's T-Shirt</p>
          <p className="product--price">$19.99</p>
        </div>
      </div>
  </Slider>
  )
}



export default FeaturedCollection