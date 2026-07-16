import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="row" style={{ backgroundColor: "#4289df" }}>
      <div className="col-1"></div>
      <div className="col-5 p-5 mb-3" style={{ color: "white" }}>
        <h4 className="mb-5">Support Portal</h4>
        <h4>
          Search for an answer or browse helpitopics <br />
          to create a ticket
        </h4>
        <div style={{ height: "45px", backgroundColor: "white", borderRadius:"10px"}} className="mt-3 mb-3">
          <p
            style={{ color: "black", fontSize: "14px", paddingTop:"10.5px"}}
            className="text-muted text-center "
          >
            Eg: how do i activate F&O, why is my order getting rejected
          </p>
        </div>
        <Link style={{ color: "white", fontSize: "13px" }}>
          Track Account Opening
        </Link>
        &nbsp; &nbsp;
        <Link style={{ color: "white", fontSize: "13px" }}>
          Track Segment Activation
        </Link>
        &nbsp; &nbsp;
        <br />
        <Link style={{ color: "white", fontSize: "13px" }}>
          Intraday margins
        </Link>
        &nbsp; &nbsp;
        <Link style={{ color: "white", fontSize: "13px" }}>
          Kite User Manual
        </Link>
      </div>



      <div className="col-6 p-5" style={{color:"white"}}>
        <Link style={{color:"white", fontSize:"14px"}} className="p-5 m-5">Track Tickets</Link>
        <h4 className="mt-5">Featured</h4>
        <ol>
          <Link style={{color:"white", fontSize:"14px"}}><li>Current Takeovers and Delisting - January 2024</li></Link>
          <Link style={{color:"white", fontSize:"14px"}}><li>Latest Intraday leverages - MIS & CO</li></Link>
        </ol>
      </div>
    </div>
  );
};

export default Hero;
