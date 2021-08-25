import React from "react";
import Topbar from "../../components/NavBar/Topbar/Topbar";
import SecondaryBar from "../../components/NavBar/SecondaryBar/SecondaryBar";
import MainGallery from "../../components/Gallery/MainGallery/MainGallery";
import TrendGallery from "../../components/Gallery/TrendGallery/TrendGallery";
import CategoryGallery from "../../components/Gallery/CategoryGallery/CategoryGallery";
import FeaturedGallery from "../../components/Gallery/FeaturedGallery/FeaturedGallery";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      <SecondaryBar />
      <MainGallery />
      <TrendGallery />
      <CategoryGallery />
      <FeaturedGallery />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
