import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiSearch, FiX } from "react-icons/fi";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { projects } from "../data/portfolio";

const Projects = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Tag yang penting saja (core categories)
  const importantTags = ["API", "Backend", "Management", "Mobile", "E-Commerce", "Weather"];
  
  // Generate unique tags dari projects, filter hanya yang penting
  const allTags = useMemo(() => {
    const tags = projects.flatMap((p) => p.tags);
    // Filter tag yang ada di importantTags, plus "All" di awal
    const filteredImportantTags = [...new Set(tags)].filter(tag => importantTags.includes(tag));
    return ["All", ...filteredImportantTags];
  }, [projects, importantTags]);

  // Filter projects berdasarkan tag dan search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by tag
      const matchTag = activeTag === "All" || project.tags.includes(activeTag);
      
      // Filter by search query
      const matchSearch = searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchTag && matchSearch;
    });
  }, [projects, activeTag, searchQuery]);

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveTag("All");
  };

  // Clear search input
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#0b0a10]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors mb-8 sm:mb-10 group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-purple-500" />
            <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">
              Portfolio
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            All Projects
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg">
            Every project I've built — from side projects to client work.
          </p>
        </div>

        {/* Search + filter - Responsive layout */}
        <div className="space-y-4 mb-8 sm:mb-10">
          {/* Search Input - Full width on mobile */}
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 bg-[#1a1926] border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Tag Filter - Horizontal scroll on mobile, wrap on desktop */}
          <div className="overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            <div className="flex flex-nowrap md:flex-wrap gap-2 min-w-max md:min-w-0">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 whitespace-nowrap ${
                    activeTag === tag
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-500 shadow-lg shadow-purple-500/25"
                      : "bg-[#1a1926] border-white/10 text-gray-400 hover:border-purple-500/50 hover:text-purple-400"
                  }`}
                >
                  {tag}
                  {tag !== "All" && (
                    <span className="ml-1 text-xs opacity-70">
                      ({projects.filter(p => p.tags.includes(tag)).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active filters display */}
        {(activeTag !== "All" || searchQuery) && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-xs text-gray-500">Active filters:</span>
            {activeTag !== "All" && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                {activeTag}
                <button
                  onClick={() => setActiveTag("All")}
                  className="hover:text-white transition-colors"
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                Search: "{searchQuery}"
                <button
                  onClick={handleClearSearch}
                  className="hover:text-white transition-colors"
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={handleResetFilters}
              className="text-xs text-gray-500 hover:text-purple-400 transition-colors ml-auto sm:ml-2"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-xs text-gray-500">
            Showing <span className="text-white font-medium">{filteredProjects.length}</span> of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid - Responsive columns */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20 bg-[#1a1926]/30 rounded-2xl border border-white/5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-[#1a1926] flex items-center justify-center border border-white/10">
              <FiSearch className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
            </div>
            <p className="text-gray-400 text-sm mb-2">No projects match your search.</p>
            <p className="text-xs text-gray-600 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={handleResetFilters}
              className="text-sm text-purple-400 hover:text-purple-300 underline-offset-2 hover:underline transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Projects;