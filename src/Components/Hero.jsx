import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../images/img.png";

const Hero = () => {
  return (
    <section className="text-center my-5">
      <div className="container">
        <h2 className="fw-bold">
          Unlock video’s full potential;
          <br />
          <span className="text-warning">half of marketers</span> haven’t yet!
        </h2>
        <h3 className="my-3">
          <span className="text-warning border py-2 px-2">Media+</span> = Engage
        </h3>
        <p className="text-muted">
          Netflix-style video discovery for your prospects that turns viewers
          into customers
        </p>
        <button className="btn btn-warning mt-3">Request a Demo</button>
      </div>
      {/* Image Section */}
      <div className="container mt-4 text-center">
        <img
          src={img}
          alt="Marketing Video"
          className="img-fluid shadow rounded w-100"
          style={{ maxWidth: "800px" }}
        />
      </div>
    </section>
  );
};

export default Hero;
