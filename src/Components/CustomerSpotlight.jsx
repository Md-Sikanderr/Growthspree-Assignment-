import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import image1 from "../images/slide1.png";
import image2 from "../images/slide2.png";
import image3 from "../images/slide3.png";
import image4 from "../images/slide4.png";

const images = [image1, image2, image3, image4];

const CustomerSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="text-center py-5 bg-light">
      <div className="container">
        <p className="text-danger fw-bold">Media+ in action:</p>
        <h2 className="fw-bold">Customer Spotlight</h2>
        <p className="text-muted">
          See how customers use Media+ to create branded media sites that
          captivate and convert.
        </p>

        {/* Slider */}
        <div className="position-relative d-flex justify-content-center align-items-center">
          <button
            onClick={prevSlide}
            className="btn btn-light shadow rounded-circle position-absolute start-0"
            style={{ zIndex: 2 }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <img
            src={images[currentIndex]}
            alt="Customer Spotlight"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "80%", transition: "0.5s ease-in-out" }}
          />

          <button
            onClick={nextSlide}
            className="btn btn-light shadow rounded-circle position-absolute end-0"
            style={{ zIndex: 2 }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSpotlight;
