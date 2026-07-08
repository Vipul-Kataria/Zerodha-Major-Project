import React from 'react'
import LeftImage from "./LeftImage"
import RightImage from "./RightImage"
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
const ProductPage = () => {
  return (
    <div>
      <Navbar/>
      <LeftImage/>
      <RightImage/>
      <Footer/>
    </div>
  )
}

export default ProductPage