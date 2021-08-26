import React, { useState, useRef } from "react";
import "./FeaturedGallery.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./FeaturedItem";
import FeaturedItem from "./FeaturedItem";

const FeaturedGallery = () => {
  const [slide, setSlide] = useState(1);
  const catSlide1 = useRef();
  const catSlide2 = useRef();
  const catSlide3 = useRef();
  const catSlide4 = useRef();

  const nextSlideHandler = () => {
    if (slide <= 3) {
      setSlide(slide + 1);
      document.getElementById("catradio" + slide).checked = true;
    } else {
      setSlide(1);
      document.getElementById("catradio" + slide).checked = true;
    }
  };

  const previousSlideHandler = () => {
    if (slide > 1) {
      setSlide(slide - 1);
      document.getElementById("catradio" + slide).checked = true;
    } else {
      setSlide(1);
      document.getElementById("catradio" + slide).checked = true;
    }
  };

  return (
    <div className="test">
      <div className="catslider">
        <div className="prevSlideButton">
          <ArrowBackIosIcon onClick={previousSlideHandler} />
        </div>
        <div className="catHeader">Explore</div>
        <div className="catslides">
          <input
            type="radio"
            name="cat-radio-btn"
            id="catradio1"
            ref={catSlide1}
          />
          <input
            type="radio"
            name="cat-radio-btn"
            id="catradio2"
            ref={catSlide2}
          />
          <input
            type="radio"
            name="cat-radio-btn"
            id="catradio3"
            ref={catSlide3}
          />
          <input
            type="radio"
            name="cat-radio-btn"
            id="catradio4"
            ref={catSlide4}
          />

          <div className="catslide first">
            <div className="catslideInfo">
              <FeaturedItem />
              <FeaturedItem />

              <FeaturedItem />
              <FeaturedItem />
              <FeaturedItem />
            </div>
          </div>

          <div className="catslide">
            <div className="catslideInfo">
              <FeaturedItem />

              <FeaturedItem />
              <FeaturedItem />
              <FeaturedItem />
              <FeaturedItem />
            </div>
          </div>

          <div className="catslide">
            <div className="catslideInfo">
              <FeaturedItem />

              <FeaturedItem />
              <FeaturedItem />
              <FeaturedItem />
              <FeaturedItem />
            </div>
          </div>

          <div className="catslide">
            <div className="catslideInfo">
              <FeaturedItem />
              <FeaturedItem />
              <FeaturedItem />
              <FeaturedItem />
              <FeaturedItem />
            </div>
          </div>
        </div>
        <div className="nextSlideButton">
          <ArrowForwardIosIcon onClick={nextSlideHandler} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedGallery;
