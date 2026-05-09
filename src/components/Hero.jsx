import React from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiInstagram, FiMapPin, FiFileText } from "react-icons/fi";
import { about, socials } from "../data/portfolio";

const iconMap = {
  Github: FiGithub,
  Linkedin: FiLinkedin,
  Instagram: FiInstagram,
};

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle View CV - buka CV di tab baru
  const handleViewCV = () => {
    // Sesuaikan dengan nama file CV kamu
    // Letakkan file CV di folder public/assets/cv/
    const cvUrl = "/assets/cv/CV-SALSABILA-ANANDITA-PUTRI.pdf";
    window.open(cvUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0b0a10] text-white overflow-hidden px-8 md:px-24 lg:px-48">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-0"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-0"></div>

      {/* Container dengan margin auto untuk membuat konten agak ke tengah */}
      <div className="z-10 flex flex-col items-start max-w-4xl mx-auto w-full">
        {/* Status Badge */}
        <div className="flex items-center gap-2 bg-[#1a1926] border border-white/5 px-4 py-2 rounded-full mb-12 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
          <span className="text-xs font-medium text-gray-400 tracking-wide">
            {about.available ? "Available for work" : "Not available"}
          </span>
        </div>

        {/* Main Heading - text left */}
        <h1 className="text-5xl md:text-7xl lg:text-[82px] font-bold tracking-tight leading-[1.1] mb-2 text-left">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">{about.name}</span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-[58px] font-bold text-[#444352] mb-6 text-left">
          {about.title}
        </h2>

        {/* Description - text left */}
        <p className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-normal text-left">
          {about.bio}
        </p>

        {/* Location - text left */}
        <div className="flex items-center gap-2 text-gray-400 mb-10">
          <FiMapPin className="text-purple-400" size={20} />
          <span className="text-sm font-medium">{about.location}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <button 
            onClick={scrollToProjects}
            className="bg-indigo-600  hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 shadow-lg shadow-purple-500/25"
          >
            View My Work
          </button>
          <button 
            onClick={handleViewCV}
            className="bg-transparent border border-white/10 hover:border-purple-500 hover:text-purple-400 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <FiFileText className="w-4 h-4" />
            View CV
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a 
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1a1926] border border-white/5 rounded-xl text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
              >
                {Icon && <Icon size={18} />}
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-purple-400 transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold opacity-60">Scroll</span>
        <FiArrowDown className="w-4 h-4 animate-bounce group-hover:text-purple-400" />
      </button>
    </section>
  );
};

export default Hero;