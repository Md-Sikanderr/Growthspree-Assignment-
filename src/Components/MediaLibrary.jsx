import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mediaImage from "../images/img3.png"; // Replace with actual image path

const MediaLibrary = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #E76F51, #F4A261)",
        borderRadius: "20px",
        color: "white",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Text Section */}
          <div className="col-md-6">
            <h2 className="fw-bold">Get your media library up and running</h2>
            <p>
              Kickstart your media library with up to 25 high-quality videos.
              Upgrade anytime with our flexible add-on plans to upload
              additional videos.
            </p>
            <ul className="list-unstyled">
              <li>✅ 25 media upload credits & add-ons</li>
              <li>✅ 1 media site credits & add-ons for more</li>
            </ul>
            <button className="btn btn-light text-danger fw-bold p-3 mt-3">
              Get Pricing
            </button>
          </div>

          {/* Right: Image Section */}
          <div className="col-md-6 mt-4 text-center">
            <div className="rounded shadow-lg overflow-hidden">
              <img
                src={mediaImage}
                alt="Media Library"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaLibrary;
