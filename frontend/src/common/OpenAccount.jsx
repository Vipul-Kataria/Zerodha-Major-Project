import React from 'react'

const OpenAccount = () => {
  return (
    <div>
      <div className="row text-center m-4 p-4">
          <h1 className="fw-semibold">Open a Zerodha Account</h1>
          <h4 className="fs-5">
            Modern platforms and apps, 70 investments, and flat 20% intraday and F&O trades.
          </h4>
        </div>
        <div className="text-center m-4 ">
          <button
            type="button"
            className="btn mb-4"
            style={{ width: "20%",height:"40px", backgroundColor:"#387ED1",color:"white" }}
          >
            Sign Up Now
          </button>
        </div>
    </div>
  )
}

export default OpenAccount