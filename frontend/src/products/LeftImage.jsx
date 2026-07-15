import React from 'react'
import { Link } from 'react-router-dom'
Link
const LeftImage = ({mainImg,heading,subText,linkOne,linkTwo,imgLeftOne,imgLeftTwo}) => {
  return (
    <div className='continer'>
      <div className="row">
        <div className="col-6 p-5">
          <img src={mainImg} alt="main_image" className='p-5' style={{width:"100%"}}/>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className='mt-4'>{heading}</h1>
          <p className='text-muted fs-6'>{subText}</p>
          <Link to="">Try More</Link> &nbsp;&nbsp;&nbsp;
          <Link to="">Learn More</Link>
          <br /><br />
          <img src={imgLeftOne} alt="ImageLeft" /> &nbsp;&nbsp;&nbsp;
          <img src={imgLeftTwo} alt="ImageLeft" />
        </div>
      </div>
    </div>
  )
}

export default LeftImage