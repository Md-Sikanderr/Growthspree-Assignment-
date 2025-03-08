import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const faqs = [
  {
    question: "How is Media+ beneficial for Marketers?",
    answer:
      "Media+ helps marketers by increasing audience engagement and providing detailed analytics.",
  },
  {
    question:
      "How does Media+ improve user retention, engagement & help in generating more leads?",
    answer:
      "It offers personalized content recommendations and insights to boost user retention.",
  },
  {
    question: "How does Media+ result in better brand visibility?",
    answer:
      "By distributing content across multiple platforms and improving SEO.",
  },
  {
    question: "How does Media+ simplify video content management?",
    answer:
      "It provides an easy-to-use dashboard for uploading, organizing, and distributing videos.",
  },
  {
    question: "How does Media+ use AI to improve content discovery?",
    answer:
      "AI-driven recommendations help users find relevant content faster.",
  },
  {
    question: "What kind of analytics does Media+ provide?",
    answer:
      "Detailed insights on user engagement, watch time, and conversion rates.",
  },
  {
    question: "Can Media+ integrate with my existing MAP tools like HubSpot?",
    answer:
      "Yes, Media+ supports integrations with major marketing automation tools.",
  },
  {
    question: "How many videos can I host in one Media+ site?",
    answer: "You can host unlimited videos depending on your plan.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h5 className="text-center text-danger fw-bold">
        Our top-list of commonly asked questions
      </h5>
      <h2 className="text-center fw-bold">FAQs</h2>
      <div className="mt-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-bottom py-3">
            <button
              className="w-100 d-flex justify-content-between align-items-center btn btn-link text-dark text-decoration-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>
                {index + 1}. {faq.question}
              </span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
