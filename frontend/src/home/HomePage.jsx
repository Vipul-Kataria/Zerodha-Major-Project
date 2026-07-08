import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import OpenAccount from "../common/OpenAccount"
const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
    </div>
  )
}

export default HomePage