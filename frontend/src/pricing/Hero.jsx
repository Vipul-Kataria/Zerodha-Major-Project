import React from "react";
import OpenAccount from "../common/OpenAccount";
const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center pt-5">
        <h1>Pricing</h1>
        <p>Free equity investments and flat 720 traday and F&O trades</p>
      </div>
      <div className="row">
        <div className="col-4 p-5 text-center">
          <img src="/media/pricing0.svg" alt="zero" />
          <h4 className="text-muted">Free equity delivery</h4>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — 7 0 brokerage.</p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="/media/intradayTrades.svg" alt="twenty" />
          <h4 className="text-muted">Intraday and F&O trades</h4>
          <p>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="/media/pricing0.svg" alt="zero" />
          <h4 className="text-muted">Free direct MF</h4>
          <p>All direct mutual fund investments are absolutely free - F 0 commissions & DP charges.</p>
        </div>
      </div>
      <OpenAccount />
    </div>
  );
};

export default Hero;
