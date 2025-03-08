import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Platform() {
  return (
    <section className="bg-light py-5 text-center">
      <div className="container">
        <p className="text-danger fw-bold">With Media+</p>
        <h2 className="fw-bold">Create an OTT platform for your media</h2>
        <p className="text-muted">
          Let your videos do more than just sit on your website. Curate your
          video repository in a few easy steps and let it drive organic views
          and generate leads.
        </p>

        {/*Embedded video */}
        <div className="d-flex justify-content-center">
          <video
            controls
            className="img-fluid shadow rounded"
            style={{ maxWidth: "800px" }}
          >
            <source src="" type="" />
            Your browser does not support this media type
          </video>
        </div>
      </div>
    </section>
  );
}

export default Platform;
