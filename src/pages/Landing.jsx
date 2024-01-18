import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Blog from "../components/Sections/Blog";
import Footer from "../components/Sections/Footer";
import Header from "../components/Sections/Header";
import Projects from "../components/Sections/Projects";
import Services from "../components/Sections/Services";
import Pricing from "../components/Sections/Pricing";

export default function Landing() {
  return (
    <div style={{overflow:"hidden"}}>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
    
      <Footer />
    </div>
  );
}


