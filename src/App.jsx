import React from "react";
import NavigationBar from "./Components/NavigationBar";
import "./App.css";
import Hero from "./Components/Hero";
import PartnerSection from "./Components/PartnerSection";
import StatSection from "./Components/StatSection";
import ChooseUs from "./Components/ChooseUs";
import Testimonial from "./Components/Testimonial";
import Platform from "./Components/Platform";
import BrandingSection from "./Components/BrandingSection";
import CustomerSpotlight from "./Components/CustomerSpotlight";
import MediaSection from "./Components/MediaSection";
import MediaLibrary from "./Components/MediaLibrary";
import FAQ from "./Components/FAQ";
import BusinessForm from "./Components/BusinessForm";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <PartnerSection />
      <StatSection />
      <ChooseUs />
      <Testimonial />
      <Platform />
      <BrandingSection />
      <CustomerSpotlight />
      <MediaSection />
      <MediaLibrary />
      <FAQ />
      <BusinessForm />
      <Footer />
    </div>
  );
};

export default App;
