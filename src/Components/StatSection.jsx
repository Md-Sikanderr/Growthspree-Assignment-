import React from "react";

const StatSection = () => {
  return (
    <>
      <section className="text-center my-5">
        <div className="container">
          <p className="text-warning fw-bold">Elevate your video strategy</p>
          <h3 className="fw-bold">Seamless Video Management</h3>
          <p className="text-muted">
            Transform how you engage with your audience using Media+
          </p>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="p-4 border rounded bg-light">
                <h1 className="fw-bold text-warning">2.5X</h1>
                <p className="lead text-warning fw-bold">Lead Generation</p>
                <p className="text-muted">
                  Boost watch time and drive more leads
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded bg-light">
                <h1 className="fw-bold text-warning">3X</h1>
                <p className="lead text-warning fw-bold">
                  Publish Content Faster with AI
                </p>
                <p className="text-muted">Tailor made to get more views</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded bg-light">
                <h1 className="fw-bold text-warning">30min</h1>
                <p className="lead text-warning fw-bold">Setup</p>
                <p className="text-muted">
                  Set up your video CMS in less than 30 minutes
                </p>
              </div>
            </div>
          </div>
          <button className="btn btn-warning mt-4">Request a Demo</button>
        </div>
      </section>
    </>
  );
};

export default StatSection;
