import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BusinessForm = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side - Text */}
        <div className="col-md-6 text-center text-md-start mb-4">
          <h2 className="fw-bold">
            See how your videos can make your business{" "}
            <span className="text-danger">more $$$</span>
          </h2>
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6 d-flex justify-content-center">
          <div
            className="card shadow-lg p-4 w-100"
            style={{ maxWidth: "400px" }}
          >
            <h3 className="h5 fw-bold mb-3">Take the Full Media+ Tour</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Business email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="johnsmith@hubilo.com"
                />
              </div>

              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John"
                  />
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Company name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Business Company Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="(201) 555-0123"
                />
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheck"
                />
                <label
                  className="form-check-label text-muted small"
                  htmlFor="termsCheck"
                >
                  I agree to Hubilo’s{" "}
                  <a href="#" className="text-decoration-none text-primary">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-decoration-none text-primary">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button className="btn btn-warning w-100">Get a free demo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessForm;
