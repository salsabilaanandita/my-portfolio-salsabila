import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiCode } from "react-icons/fi";
import { about } from "../data/portfolio";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0a10]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-shadow duration-300">
            <FiCode className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-white text-sm tracking-wide">
            {about.name.split(" ")[0]}
            <span className="text-purple-400">.dev</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-150 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/projects"
            className="text-sm font-medium px-4 py-1.5 rounded-md border border-purple-500/50 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
          >
            All Projects
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1a1926] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0b0a10]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors text-left py-1"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/projects"
            className="text-sm font-medium px-4 py-2 rounded-md border border-purple-500/50 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-200 text-center"
          >
            All Projects
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;