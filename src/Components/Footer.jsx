import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Left Section - Links */}
          <div className="col-lg-8">
            <div className="row">
              {/* Column 1 - Product */}
              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold">Product</h6>
                <ul className="list-unstyled">
                  <li>Webinar+</li>
                  <li>Media+</li>
                  <li>Generate Interest ✨</li>
                  <li>Capture Interest 😍</li>
                  <li>Prove Impact 📊</li>
                  <li>Repurpose Content 🔥</li>
                </ul>
              </div>

              {/* Column 2 - Who You Are */}
              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold">Who you are</h6>
                <ul className="list-unstyled">
                  <li>Demand Gen Marketer</li>
                  <li>Content Marketer</li>
                  <li>Event Marketer</li>
                  <li>Field Marketer</li>
                  <li>Marketing Op</li>
                  <li>CMO</li>
                </ul>
              </div>

              {/* Column 3 - Resources */}
              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold">Resources</h6>
                <ul className="list-unstyled">
                  <li>People who love us</li>
                  <li>People who hate us</li>
                  <li>Our Webinars</li>
                  <li>Our Thoughts</li>
                  <li>Help!</li>
                </ul>
              </div>

              {/* Column 4 - About Us */}
              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold">About Us</h6>
                <ul className="list-unstyled">
                  <li>Mission + Values</li>
                  <li>The Head Honchos</li>
                  <li>The Gossip</li>
                  <li>Our Contact Deets</li>
                  <li>Join the team!</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="col-lg-4">
            <div className="mb-4 p-3 border rounded bg-white">
              <h6 className="fw-bold">Contact us</h6>
              <p className="text-muted small">
                to see what Webinar+ can do for your business
              </p>
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="btn btn-dark ms-2">→</button>
              </div>
            </div>

            <div className="text-center mb-3">
              <small>Read our reviews on G2.com</small>
            </div>

            {/* Social Icons */}
            <div className="d-flex justify-content-center gap-3">
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <hr />
        <div className="text-center text-muted small">
          © 2022 Hubilo. All rights reserved
          <span className="mx-2">|</span>
          <a href="#" className="text-decoration-none">
            Terms of Use
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-decoration-none">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-decoration-none">
            Security and Compliance
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-decoration-none">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
