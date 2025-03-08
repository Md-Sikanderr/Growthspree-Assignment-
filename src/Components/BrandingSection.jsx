import React from "react";

const BrandingSection = () => {
  return (
    <section
      className="text-center py-5"
      style={{ backgroundColor: "#d37454", color: "white" }}
    >
      <div className="container">
        <h2
          className="fw-bolder text-start"
          style={{
            fontSize: "2.5rem",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          Your Videos
        </h2>
        <h2
          className="fw-bolder"
          style={{
            fontSize: "2.5rem",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          Your Brand
        </h2>
        <h2
          className="fw-bolder text-end"
          style={{
            fontSize: "2.5rem",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          Your Website
        </h2>
      </div>
    </section>
  );
};

export default BrandingSection;
