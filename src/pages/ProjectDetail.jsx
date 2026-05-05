import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheckCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/portfolio";

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Cari project berdasarkan id
  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Jika project tidak ditemukan
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0b0a10] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Project not found.</p>
          <p className="text-gray-500 text-sm mb-4">ID: {id}</p>
          <Link to="/projects" className="text-purple-400 hover:underline text-sm">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0a10]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        {/* Back button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors mb-10 group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          All Projects
        </Link>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-[#1a1926]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10]/80 via-transparent to-transparent" />
          
          {/* Year badge on image */}
          <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-[#0b0a10]/80 backdrop-blur-sm border border-white/10 rounded-lg">
            <span className="text-sm text-gray-300">{project.year}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed">
              {project.description}
            </p>

            {/* Key Highlights */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
                <span className="w-6 h-px bg-purple-500"></span>
                Key Highlights
              </h2>
              <div className="space-y-3">
                {project.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-purple-500/25"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1926] border border-white/10 text-white rounded-xl text-sm font-medium hover:border-purple-500/50 hover:text-purple-400 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <FiGithub className="w-4 h-4" />
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <div className="p-6 bg-gradient-to-br from-[#1a1926] to-[#12111a] border border-white/10 rounded-2xl">
              <h3 className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-5">
                Project Info
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Role</p>
                  <p className="text-sm font-medium text-white">{project.role}</p>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 mb-1">Year</p>
                  <p className="text-sm font-medium text-white">{project.year}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Counter Card */}
            <div className="p-4 bg-gradient-to-br from-[#1a1926] to-[#12111a] border border-white/10 rounded-xl flex items-center justify-between">
              <span className="text-xs text-gray-500">Project</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {String(currentIndex + 1).padStart(2, "0")}
                <span className="text-lg text-gray-500 font-normal">/{String(projects.length).padStart(2, "0")}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Navigation - Previous/Next Project */}
        <div className="mt-16 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-4">
          {/* Previous Project */}
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="group p-5 bg-gradient-to-br from-[#1a1926] to-[#12111a] border border-white/10 rounded-2xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 flex items-center gap-4"
            >
              <FiChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-purple-400 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 mb-1">Previous Project</p>
                <p className="text-sm font-semibold text-white truncate group-hover:text-purple-400 transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="invisible" />
          )}

          {/* Next Project */}
          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="group p-5 bg-gradient-to-br from-[#1a1926] to-[#12111a] border border-white/10 rounded-2xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 flex items-center justify-end gap-4 text-right"
            >
              <div className="min-w-0">
                <p className="text-xs text-gray-500 mb-1">Next Project</p>
                <p className="text-sm font-semibold text-white truncate group-hover:text-purple-400 transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <FiChevronRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div className="invisible" />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;