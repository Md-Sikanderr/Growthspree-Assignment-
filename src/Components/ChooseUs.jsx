import React from "react";
import img2 from "../images/img2.png";

const ChooseUs = () => {
  return (
    <>
      <section className="py-5">
        <div className="container text-center">
          <p className="text-warning fw-bold">Why choose Media+?</p>
          <h3 className="fw-bold">
            Media+ turns video engagement <br />
            into customer conversions
          </h3>
          <div className="row mt-4 align-items-center">
            <div className="col-md-6">
              <div className="chooseus-box">
                <h6 className="text-start">
                  Curate your video media collection with an AI powered library
                </h6>
              </div>
              <div className="chooseus-box ch-bg">
                <h6 className="text-start">
                  Build, Brand & Publish your Media+
                </h6>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti exercitationem accusantium assumenda repudiandae
                  excepturi provident.
                </p>
              </div>
              <div className="chooseus-box">
                <h6 className="text-start">
                  Gate your media, capture lead & connect your CRM - it's easy
                </h6>
              </div>
              <div className="chooseus-box">
                <h6 className="text-start">
                  Track your view - with detailed analytics
                </h6>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img2} className="img-fluid" alt="Feature" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
