// pages/Index.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsPreview from "../components/ProjectsPreview";
import Contact from "../components/Contact";  // <-- Import Contact
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0b0a10]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <Contact />  {/* <-- Tambahkan Contact di sini */}
      <Footer />
    </div>
  );
};

export default Index;