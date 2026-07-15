import React from 'react'
import { Link } from 'react-router-dom'

const RightImage = ({heading,mainImg,subline,linkBtn}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5">
          <h1 className='mt-5'>{heading}</h1>
          <p className='text-muted'>{subline}</p>
          <Link to="">Learn More</Link>
        </div>
        <div className="col-6">
          <img src={mainImg} alt="MainImg" style={{width:"100%"}}/>
        </div>
      </div>
    </div>
  )
}

export default RightImage