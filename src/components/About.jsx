import React, { useEffect, useRef, useState } from 'react';
import { FiUser, FiCalendar, FiMapPin, FiMail } from "react-icons/fi";
import { about } from "../data/portfolio";

const About = () => {
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

  const stats = [
    { label: "Years Learning", value: "2+" },
    { label: "Projects Completed", value: "8+" },
    { label: "Fullstack Projects", value: "3+" },
    { label: "Repositories", value: "12+" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0b0a10]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-purple-500" />
            <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">About</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            A bit about me
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="relative w-fit">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#1a1926] to-[#12111a] border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center">
                    <FiUser className="w-20 h-20 text-purple-500/40" />
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-purple-600 rounded-lg shadow-lg">
                  <span className="text-xs font-semibold text-white">Open to Work</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-4 bg-[#1a1926] border border-white/10 rounded-xl hover:border-purple-500/40 transition-all duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed text-base">{about.bio}</p>
              <p className="text-gray-400 leading-relaxed text-base">
                I am a Web Developer with a focus on Front-End development, experienced in building responsive and user-friendly websites using React.js and Tailwind CSS. I also have Back-End skills in Laravel and experience managing MySQL databases. I am committed to continuous learning and improving my web development skills.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-md bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-gray-500">Location: </span>
                    <span className="text-white font-medium">{about.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-md bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-gray-500">Email: </span>
                    <span className="text-white font-medium">{about.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-md bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <FiCalendar className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-gray-500">Experience: </span>
                    <span className="text-white font-medium">2+ years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;