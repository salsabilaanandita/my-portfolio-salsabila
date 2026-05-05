import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "../data/portfolio";

const ProjectsPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 bg-[#0b0a10]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-purple-500" />
                <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">Projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Featured work</h2>
              <p className="text-gray-400 mt-3 max-w-md">
                A selection of projects I'm proud of. Each one built with care and attention to detail.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 rounded-xl text-sm font-medium text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
            >
              See All Projects
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;