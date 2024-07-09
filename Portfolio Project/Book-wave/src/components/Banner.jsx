import React from "react";
import BannerCard from "../Home/BannerCard";
import devbook from "../assets/devbook-cover.png";
import CtaHolder from "../components/CtaHolder.jsx"; 

const Banner = () => {
  return (
    <>
      <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
          {/* Left side */}
          <div className="md:w-1/2 space-y-8 h-full">
            <h2 className="text-5xl font-bold leading-snug text-black">
              Discover, Purchase, & <br /> Enjoy Books Easily
            </h2>
            <p className="md:w-4/5">Discover Your Next Great Read!</p>
           
            {}
            <CtaHolder />
          </div>
          {}
          <div>
            <BannerCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
