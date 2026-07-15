import React from 'react'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className='container'>
        <div className="row text-center p-5">
            <h1>Technology</h1>
            <p className='text-muted'>Sleek Modern and intutive designed platform <br /><Link to="/pricing">Check out our investment pricing</Link></p >
        </div>
    </div>
  )
}

export default Hero