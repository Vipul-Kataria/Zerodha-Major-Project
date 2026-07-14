import React from 'react'

const PricingStats = () => {
  return (
    <div className="container mt-2 p-2">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1 className='fw-semibold'>Trust With Confidence</h1>
          
          <h3 className='mt-4'>Customer-First Always</h3>
          <p>That's why 1.3+ crore customers 
              trust Zerodha with R 3.5+ lakh crores worth of equity investments.</p>
          <h3 className='mt-4'>No spam or gimmicks</h3>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. 
              High quality apps that you use at your pace, the way you like.</p>
          <h3 className='mt-4'>The Zerodha universe</h3>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ 
              fintech startups offer you tailored services specific to your needs.</p>
          <h3 className='mt-4'>Do better with money</h3>
          <p>With initiatives like Nudge and Kill Switch, we don't just facilitate 
              transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-6 p-5 mt-5">
          <img src="/media/ecosystem.png" alt="ecosystem.png" style={{width:"85%"}} />
          <div className='mx-4 mt-1'>
            <a href="" className='mx-5'>Explore All Products</a>
            <a href=""className='mx-5'>Try Kite Demo</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingStats