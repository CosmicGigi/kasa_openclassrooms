import React, { useState } from "react";
import data from "../data/logements.json";

const Slideshow = ({ id }) => {
  const accommodation = data.find((item) => item.id === id);
  const images = accommodation.pictures;
  const [currentImage, setImage] = useState(0);

  const clickRight = () => {
    setImage((i) => (i + 1) % images.length);
  };

  const clickLeft = () => {
    setImage((i) => (i - 1 + images.length) % images.length);
  };

  const carouselSelect = images.length > 1;

  return (
    <div className="carousel">
      <div className="carousel__image-container">
        <img
          className="carousel__image"
          src={images[currentImage]}
          alt={`Accommodation view ${currentImage + 1}`}
        />
        {carouselSelect && (
          <>
            <button
              className="carousel__nav-button carousel__nav-button--prev"
              onClick={clickLeft}
            >
              <img
                src="/arrowslide.png"
                alt="Previous"
                className="carousel__arrow"
              />
            </button>
            <button
              className="carousel__nav-button carousel__nav-button--next"
              onClick={clickRight}
            >
              <img
                src="/arrowslide.png"
                alt="Next"
                className="carousel__arrow"
              />
            </button>
            <div className="carousel__slide">
              {currentImage + 1}/{images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slideshow;
