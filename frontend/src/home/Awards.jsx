import React from "react";

const Awards = () => {
  return (
    <div className="container mt-4">
      <div className="row p-4">

        <div className="col-6">
          <img src="/media/largestBroker.svg" alt="" />
        </div>

        
        <div className="col-6 p-5">
          <h1>Largest Stock Broker In India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row pt-4">
            <div className="col">
              <ul>
                <li>
                  Futures And Options
                </li>
                <li>
                  Stocks & IPO
                </li>
                <li>
                  Commodity Derivatives
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  Direct Mutual Funds
                </li>
                <li>
                  Currency Derivatives
                </li>
                <li>
                  Bond And Growth
                </li>
              </ul>
            </div>
            <img src="/media/pressLogos.png" alt="" className="pt-3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
