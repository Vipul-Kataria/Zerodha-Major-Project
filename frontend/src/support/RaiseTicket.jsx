import React from 'react'
import {Link} from "react-router-dom"
const RaiseTicket = () => {
  return (
    <div className="row">
      <h4 className='p-5'>To create a ticket, select a relevant topic</h4>
      <div className="col-4">
        <h5 className='p-5'><i class="fa-solid fa-gear"></i>&nbsp;&nbsp;Account Opening</h5>
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Online Account Opening</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Offline Account Opening</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Company,Partnership and HUF Account Opening</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>NRI Account Opening</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Zerodha IDFC First Bank 3-in-1 Account</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Charges At Zerodha</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Getting Started</Link><br />
      </div>
      <div className="col-4 ">
        <h5 className='p-5'><i class="fa-solid fa-circle-user"></i>&nbsp;&nbsp;Your Zerodha Account</h5>
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Login Credentials</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Account Modification and Segment Addition</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>DP ID and bank details</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Your Profile</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Transfer and conversion of shares</Link><br />
      </div>
      <div className="col-4">
        <h5 className='p-5'><i class="fa-solid fa-chart-column"></i>&nbsp;&nbsp;Your Zerodha Account</h5>
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Margin/leverage, Product and Order types</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Kite Web and Mobile</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Trading FAQs</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Corporate Actions</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Sentinel</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Kite API</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Pi and other platforms</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>Stockreports+</Link><br />
        <Link className='text-muted p-5' style={{color:"black", fontSize:"13px"}}>GTT</Link><br />
      </div>
    </div>
  )
}

export default RaiseTicket