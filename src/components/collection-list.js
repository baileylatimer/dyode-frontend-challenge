
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const CollectionList = props => (
<div className="flex justify-center items-center py-8">
  <div className="collection--list container flex justify-center items-center">
    <div className="collection--item flex flex-col justify-center items-center">
      <StaticImage className="" src="../images/collection--women.jpg" alt="Shop Women's" />
      <div className="collection--link flex justify-center items-center">
        <h3 className="text--light">Women's</h3>
      </div>
    </div>
    <div className="collection--item flex flex-col justify-center items-center">
      <StaticImage className="" src="../images/collection--men.jpg" alt="Shop Men's" />
      <div className="collection--link flex justify-center items-center">
        <h3 className="text--light">Men's</h3>
      </div>
    </div>
    <div className="collection--item flex flex-col justify-center items-center">
      <StaticImage className="" src="../images/collection--accessories.jpg" alt="Shop Accessories" />
      <div className="collection--link flex justify-center items-center">
        <h3 className="text--light">Accessories</h3>
      </div>
    </div>
  </div>
</div>
);



export default CollectionList