import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "JavaScript", "Bootstrap", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      items: ["Express", "Laravel", "PHP Codeinteger", "PostgreSQL", "Lumen", "REST APIs", "MySql", "MongoDB"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Figma", "Vercel", "Laragon", "VsCode"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0b0a10]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-purple-500" />
            <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tech stack & tools
          </h2>
          <p className="text-gray-400 mb-16 max-w-xl">
            Technologies I work with on a daily basis to build modern, performant applications.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((group, gi) => (
              <div
                key={group.category}
                className="group p-6 bg-gradient-to-br from-[#1a1926] to-[#12111a] border border-white/10 rounded-2xl hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;