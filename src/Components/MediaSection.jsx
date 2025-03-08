import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const features = [
  { title: "Media Library", description: "Upload and manage videos easily." },
  {
    title: "Automated Process",
    description: "AI-based metadata and transcripts.",
  },
  {
    title: "Branding & Personalization",
    description: "Customize with your brand.",
  },
  { title: "Video Player", description: "HD video playback with chapters." },
  { title: "Deep Analytics", description: "Track user engagement & insights." },
  { title: "Boost Your Pipeline", description: "CRM integration for leads." },
];

const MediaSection = () => {
  return (
    <section className="py-5 text-center bg-light">
      <h2 className="fw-bold">Media+ Features</h2>

      {/* Features Grid */}
      <div className="container mt-4">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="p-3 border rounded bg-white shadow-sm">
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
