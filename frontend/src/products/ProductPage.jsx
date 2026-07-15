import React from "react";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Hero from "./Hero";
const ProductPage = () => {
  return (
    <div>
      <Hero />
      <LeftImage
        mainImg={"/media/signup.png"}
        heading="Kite"
        subText="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ul, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        imgLeftOne="/media/googlePlayBadge.svg"
        imgLeftTwo="/media/appstoreBadge.svg"
      />
      <RightImage
        mainImg="/media/console.png"
        heading="Console"
        subline="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        linkBtn=""
      />
      <LeftImage
        mainImg="/media/varsity.png"
        heading="Varsity mobile"
        subText="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        imgLeftOne="/media/googlePlayBadge.svg"
        imgLeftTwo="/media/appstoreBadge.svg"
      />
      <RightImage
        mainImg="/media/kiteconnect.png"
        heading="Kite Connect API"
        subline="Build powerful trading platforms and experiences with our super simple
                HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
    </div>
  );
};

export default ProductPage;
