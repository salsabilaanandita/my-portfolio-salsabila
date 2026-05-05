import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block bg-gradient-to-br from-[#1a1926] to-[#12111a] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden bg-[#0b0a10]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center">
            <span className="text-gray-500">No image</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#0b0a10]/80 backdrop-blur-sm border border-white/10 rounded-md text-xs text-gray-400">
          {project.year}
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags?.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-semibold text-white text-base mb-2 group-hover:text-purple-400 transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed">
          {project.shortDesc}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.stack?.slice(0, 4).map((tech, idx) => (
            <span key={tech} className="text-xs text-gray-500">
              {tech}{idx < project.stack.slice(0, 4).length - 1 ? " • " : ""}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-sm text-purple-400 font-medium group-hover:gap-2 transition-all duration-200">
          View Project
          <FiArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;