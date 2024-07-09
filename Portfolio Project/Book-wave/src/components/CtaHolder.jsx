import React from "react";
import { Link } from "react-router-dom";
import FeaturesSection from "../Home/Features";

const CtaHolder = () => {
  return (
    <div className="cta-holder flex flex-row md:flex-col gap-2 md:gap-0">
    <div className="w-full md:w-auto">
      <Link
        className="btn bg-red-500 hover:bg-red-400 text-white text-center py-3 px-6 rounded-lg transition-all ease-in duration-200 border-2 border-red-500"
        to="/shop"
      >
        Explore
      </Link>
    </div>
    <div className="w-full md:w-auto mt-2 md:mt-0">
      <Link
        className="btn bg-gray-00 text-black  hover:bg-red-400 text-center py-3 px-6 rounded-lg transition-all ease-in duration-200 border-2 border-red-500"
        to='#content-section'
      >
        Learn More
      </Link>
    </div>
  </div>
  );
};

export default CtaHolder;
