import React from 'react'

const Education = () => {
  return (
    <div className="container p-5">
      <div className="row">


        <div className="col-6">
          <img src="/media/education.svg" alt="eduaction.svg" />
        </div>


        <div className="col-6 p-5 mt-5">
          <h2>Free and open market education</h2>
          <p>Varsity, the largest online stock market education book in the world 
            covering everything from the basics to advanced trading.</p>
          <a href="">Versity</a>
          <p className='mt-4'>TradingQ&A, the most active trading and investment community
              in India for all your market related queries.</p>
          <a href="">Trading QnA</a>
        </div>


      </div>
    </div>
  )
}

export default Education