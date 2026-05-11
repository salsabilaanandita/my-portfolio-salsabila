import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiMail, FiGithub, FiLinkedin, FiInstagram, FiCheckCircle, FiMapPin, FiPhone } from "react-icons/fi";
import { about, socials } from "../data/portfolio";

const iconMap = {
  Github: FiGithub,
  Linkedin: FiLinkedin,
  Instagram: FiInstagram,
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const ref = useRef(null);

  // Web3Forms configuration
  const WEB3FORMS_ACCESS_KEY = "89f41349-cbe8-4003-9ac5-f46624a896e1";

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("subject", form.subject);
      formData.append("message", form.message);
      formData.append("replyto", "salsabilaananditaputri@gmail.com");
      formData.append("redirect", "false");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        showNotification("Email berhasil dikirim!", "success");
      } else {
        throw new Error("Gagal mengirim email");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Gagal mengirim pesan. Silakan coba lagi.");
      showNotification("Gagal mengirim pesan. Silakan coba lagi.", "error");
      
      // Fallback to mailto
      const mailtoLink = `mailto:salsabilaananditaputri@gmail.com?subject=${encodeURIComponent(form.subject + ' - dari ' + form.name)}&body=${encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}\n\n---\nDikirim dari Portfolio Website`)}`;
      window.open(mailtoLink, '_blank');
    } finally {
      setIsLoading(false);
    }
  };

  const showNotification = (message, type = "success") => {
    const notification = document.createElement("div");
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === "success" ? "#10b981" : "#ef4444"};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 10000;
      max-width: 300px;
      font-size: 0.9rem;
      line-height: 1.4;
      animation: slideIn 0.3s ease-out;
    `;
    notification.innerHTML = `
      <i class="fas fa-${type === "success" ? "check" : "times"}-circle" style="margin-right: 0.5rem;"></i>
      ${message}
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = "slideOut 0.3s ease-in forwards";
      setTimeout(() => notification.remove(), 300);
    }, 5000);
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
                    href="mailto:salsabilaananditaputri@gmail.com"
                    className="text-white font-medium hover:text-purple-400 transition-colors"
                  >
                    salsabilaananditaputri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiPhone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <span className="text-white font-medium">
                    +62 897 9099 974
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <span className="text-white font-medium">
                    Bogor, Indonesia
                  </span>
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
                <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-4 bg-[#1a1926] rounded-2xl border border-white/10">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <FiCheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Message sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-purple-400 hover:underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-[#1a1926] p-6 rounded-2xl border border-white/10">
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-[#0b0a10] border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-150"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-[#0b0a10] border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-150"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="w-full px-4 py-3 bg-[#0b0a10] border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-150"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-[#0b0a10] border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-150 resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-purple-600 text-white rounded-xl font-medium text-sm hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Contact;