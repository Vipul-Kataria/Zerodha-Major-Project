import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <img src="/media/homeHero.png" alt="HomeHeroImage" />
        </div>
        <div className="row text-center m-4 ">
          <h3 className="fw-light">Invest in everything</h3>
          <h5 className="fw-lighter">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </h5>
        </div>
        <div className="text-center m-4 mt-3">
          <button
            type="button"
            className="btn mb-4"
            style={{ width: "30%",backgroundColor:"#387ED1",color:"white" }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
