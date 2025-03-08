import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import male from "../images/male.png";
import female from "../images/female.png";

const testimonials = [
  {
    image: male,
    quote: "Beautifully showcases our best videos...",
    text: "Media+ has created our own 'UNI-FLIX.' It’s exactly the OTT platform I’ve been looking for. It beautifully showcases relevant videos for students, sorted by courses, locations, universities, and more - all in a matter of a minutes. Plus I can create the sections I want for our audience",
    name: "Girish C. Ballolia",
    title: "Founder & CEO, Gen Next Education, Inc.",
  },
  {
    image: female,
    quote: "A tool that can make it easy to manage our videos with AI...",
    text: "For the marketers & go-to-market teams this is a great portal. This feels more like a tool that can make it easy to manage our videos with AI and feels like a part of our own website.",
    name: "Jennifer Ho",
    title: "VP of Marketing, Bitwarden",
  },
  {
    image: female,
    quote: "Integrates our media with HubSpot CRM...",
    text: "Media+ seamlessly integrates our media with HubSpot CRM, significantly boosting our lead generation pipeline. The auto-tagging feature also deliversa personalized video exxperience for every viewer.",
    name: "Tami Strand",
    title: "Senior Director Marketing, Azuga",
  },
  {
    image: female,
    quote: "A tool that makes it easy to manage our videos...",
    text: "We do webinars twice or once a week. This works for us because we didn't have to download our recordings and upload them on our own Webinars Page again and again. This helps us save time and efforts as we can bring our webinars from Hubilo to Media+ seamlessly",
    name: "Jule Hiller",
    title: "Senior Marketing Manager, EQS Group",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      style={{ backgroundColor: "orangered" }}
      className="py-5 bg-opacity-50 text-center position-relative"
    >
      <div className="container text-white">
        <h6 className="text-white">Take it from a Customer</h6>
        <h3 className="fw-bold text-white">
          {testimonials[currentIndex].quote}
        </h3>

        <img
          src={testimonials[currentIndex].image}
          alt="Testimonial"
          className="rounded-circle shadow my-3"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />

        <p className="text-white">{testimonials[currentIndex].text}</p>
        <h6 className="fw-bold">{testimonials[currentIndex].name}</h6>
        <p className="text-white">{testimonials[currentIndex].title}</p>

        {/* Request a Demo Button */}
        <div className="mt-4">
          <button className="btn btn-light px-4 py-2 shadow-sm fw-bold">
            Request a Demo
          </button>
        </div>

        <button
          onClick={prevSlide}
          className="position-absolute top-50 start-0 translate-middle-y btn btn-light shadow rounded-circle p-2"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          onClick={nextSlide}
          className="position-absolute top-50 end-0 translate-middle-y btn btn-light shadow rounded-circle p-2"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
