import React from "react";
import Banner from "../components/Banner";
import FavoriteBooks from "./FavoriteBooks";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";
import Team from "../components/Team";
import FeaturesSection from "./Features";

const Home = () => {
  return (
    <div>
      <Banner />
      <FavoriteBooks />
      <FavBook />
      <FeaturesSection/>
      <PromoBanner />
      <OtherBooks />
      <Review />
      
      <Team />
    </div>
  );
};

export default Home;
