import React from "react";
import MainGallery from "../../components/Gallery/MainGallery/MainGallery";
import TrendGallery from "../../components/Gallery/TrendGallery/TrendGallery";
import CategoryGallery from "../../components/Gallery/CategoryGallery/CategoryGallery";
import FeaturedGallery from "../../components/Gallery/FeaturedGallery/FeaturedGallery";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <div className="homeBody">
        <MainGallery />
        <TrendGallery />
        <CategoryGallery />
        <FeaturedGallery />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
