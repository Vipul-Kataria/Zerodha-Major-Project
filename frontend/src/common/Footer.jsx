import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid mt-3 p-4" style={{backgroundColor:"#FBFBFB"}}>
      <div className="row m-5">
        <div className="col-3">
          <img src="/media/logo.svg" alt="logo" style={{ width: "50%" }} />
          <br></br><br />
          <p>© 2010 - 2024, Not Zerodha Broking Ltd.<br></br> All rights reserved.</p>
          <div>
            {" "}
            <i class="fa-brands fa-twitter"></i>{" "}
            <i class="fa-brands fa-square-facebook"></i>{" "}
            <i class="fa-brands fa-instagram"></i>{" "}
            <i class="fa-brands fa-linkedin-in"></i>{" "}
            <i class="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="col-3">
          <p><a href="/" className="text-decoration-none text-reset">Company</a></p>
          <p><a href="/" className="text-decoration-none text-reset">About</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Products</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Pricing</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Referral programme</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Zerodha tech</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Press & media</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Zerodha cares (CSR)</a></p>
        </div>
        <div className="col-3">
          <p><a href="/" className="text-decoration-none text-reset">Support</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Contact</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Support Total</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Z-Connect blog</a></p>
          <p><a href="/" className="text-decoration-none text-reset">List Of Charges</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Downloads and resources</a></p>
        </div>
        <div className="col-3">
          <p><a href="/" className="text-decoration-none text-reset">Account</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Open An Account</a></p>
          <p><a href="/" className="text-decoration-none text-reset">Fund Trabsfer</a></p>
          <p><a href="/" className="text-decoration-none text-reset">60 day Challenge</a></p>
        </div>
      </div>
      <div className="row m-5">
        <div className="col">
          <p>
          Zerodha Broking Ltd.: Member of NSE & BSE - SEBI Registration no.:
          INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
          Ltd. - SEBI Registratic Trading through Zerodha Commodities Pvt. Ltd.
          MCX: 46025 - SEBI Registration no.: INZ000038238 Registered Address:
          Zerodha Broking Ltd., #153/154, 4th Cross School, J.P Nagar 4th Phase,
          Bengaluru - 560078, Karnataka, India. For any complaints pertaining to
          securities broking please write to complaints@zerodha.com, for ensure
          you carefully read the Risk Disclosure Document as prescribed by SEBI
          | ICF 
        </p>
        <p>  
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Numbe Communication, Speedy redressal of the
          grievances 
        </p>
          
        <p>Investments in securities market are subject to market
          risks; read all the related documents carefully before investing.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
