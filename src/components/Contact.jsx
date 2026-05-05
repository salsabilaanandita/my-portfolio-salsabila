import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiMail, FiGithub, FiLinkedin, FiInstagram, FiCheckCircle } from "react-icons/fi";
import { about, socials } from "../data/portfolio";

const iconMap = {
  Github: FiGithub,
  Linkedin: FiLinkedin,
  Instagram: FiInstagram,
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: simulate submission
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0a10]">
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
            <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's work together
          </h2>
          <p className="text-gray-400 mb-16 max-w-md">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email me at</p>
                  <a
                    href={`mailto:${about.email}`}
                    className="text-white font-medium hover:text-purple-400 transition-colors"
                  >
                    {about.email}
                  </a>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socials.map((social) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1926] border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                        aria-label={social.label}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#1a1926] to-[#12111a] border border-white/10 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-white">Available for projects</span>
                </div>
                <p className="text-sm text-gray-400">
                  Currently open to freelance work and full-time opportunities. Response time is usually within 24 hours.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <FiCheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Message sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-purple-400 hover:underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-[#1a1926] border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-150"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-[#1a1926] border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-150"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-[#1a1926] border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-150 resize-none"
                    />
                  </div>
               <button
                  type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-purple-600 text-white rounded-xl font-medium text-sm hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:-translate-y-0.5">
                  <FiSend className="w-4 h-4" />
                  Send Message
                </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;