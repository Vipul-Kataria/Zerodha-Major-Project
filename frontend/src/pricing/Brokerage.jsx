import React from 'react'

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h4 className='text-center pt-5 pb-3' style={{color:"#387ed1"}}>Brokerage Calculator</h4>
          <ul className='text-muted'>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of $50 + GST per order</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged $20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ≤100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or 2200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged 740 per executed order instead of 720 per executed orde</li>
          </ul>
        </div>
        <div className="col">
          <h4 className='text-center pt-5 pb-3' style={{color:"#387ed1"}}>List of charges</h4>
        </div>
      </div>
    </div>
  )
}

export default Brokerage