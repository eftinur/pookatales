import React from "react";
import Marquee from "react-fast-marquee";
import airbnb from "../assets/partners/airbnb-logo@logotyp.us.svg";
import brioni from "../assets/partners/brioni-logo@logotyp.us.svg";
import canon from "../assets/partners/canon-logo@logotyp.us.svg";
import dhl from "../assets/partners/dhl-logo@logotyp.us.svg";
import mastercard from "../assets/partners/mastercard-logo@logotyp.us.svg";
import shopify from "../assets/partners/shopify-logo@logotyp.us.svg";
import twitch from "../assets/partners/twitch-logo@logotyp.us.svg";
import walmart from "../assets/partners/walmart-logo@logotyp.us.svg";

const Partners = () => {
  return (
    <section className="py-20">
      <div className="w-3/4 mx-auto py-10">
        <h5 className="text-4xl lg:text-8xl font-medium text-center  capitalize">
          Our Partners
        </h5>
      </div>
      <Marquee pauseOnHover={true} speed={80} className="py-12">
        <div className="w-60">
          <img className="w-44 h-44 mx-auto" src={walmart} alt="" />
        </div>
        <div className="w-60">
          <img className="w-44 h-44 mx-auto" src={airbnb} alt="" />
        </div>
        <div className="w-60">
          <img className="w-44 h-44 mx-auto" src={shopify} alt="" />
        </div>
        <div className="w-60">
          <img className="w-44 h-44 mx-auto" src={dhl} alt="" />
        </div>
        <div className="w-60">
          <img className="w-44 h-44 mx-auto" src={brioni} alt="" />
        </div>
        <div className="w-60">
          <img className="w-44 h-44 mx-auto" src={canon} alt="" />
        </div>
        <div className="w-60">
          <img className="w-44 h-44 mx-auto" src={mastercard} alt="" />
        </div>
        <div className="w-60">
          <img className="w-44 h-44 mx-auto" src={twitch} alt="" />
        </div>
      </Marquee>
    </section>
  );
};

export default Partners;
