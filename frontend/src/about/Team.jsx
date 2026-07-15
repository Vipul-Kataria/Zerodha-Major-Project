import React from "react";

const Team = () => {
  return (
    <div className="container mb-5 p-4">
      <div className="row">
        <div className="col-6 text-muted p-5 ">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 text-muted p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see wit the media is saying about
            us.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="row">
          <h1 className="text-center border-top  mt-4 pt-5 mb-5 pb-3">
            People
          </h1>
        </div>
        <div className="row border-bottom pb-5">
          <div className="col-2"></div>
          <div className="col-4">
            <div className="row text-center">
              <img src="/media/nithinKamath.jpg" alt="Founder" className="mx-5 mb-4" style={{width:"70%",borderRadius:"50%"}} />
              <h4 className="text-muted">Nithin Kamath</h4>
              <h6 className="text-muted"> Founder, CEO</h6>
            </div>
          </div>
          <div className="col-6 text-center text-muted p-4 mt-3">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. *
              <br />Today, Zerodha has changed the landscape of the Indian broking
              industry. <br />He is a member of the SEBI Secondary Market Advisory
              Committee (SMAC) and the Market Data Advisory Committee (MDAC).
              Playing basketball is his zen. <br /> <br /> Connect on Homepage / TradingQnA /
              Twitter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
