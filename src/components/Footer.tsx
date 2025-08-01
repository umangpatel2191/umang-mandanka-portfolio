
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  // Interactive hover state for each link
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Scroll position for parallax effect
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="py-12 relative overflow-hidden bg-black">
      {/* Background elements with parallax effect */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`
        }}
      ></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-6 w-full h-full absolute top-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-b border-white w-full"></div>
          ))}
        </div>
      </div>

      {/* Code elements */}
      <div className="absolute top-10 left-[10%] text-purple-500/20 text-5xl font-mono rotate-6">{'<>'}</div>
      <div className="absolute bottom-10 right-[10%] text-blue-500/20 text-5xl font-mono rotate-12">{'</>'}</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center">
                <span className="font-bold text-white text-xl">U</span>
              </div>
              <h3 className="font-semibold text-xl text-white">Umang Mandnaka</h3>
            </div>
            <p className="text-gray-400">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Crafted with passion and precision
            </p>

            <div className="mt-6">
              <div className="text-gray-400 font-mono text-sm">
                <span className="text-purple-500">const</span> <span className="text-blue-400">contact</span> = <span className="text-purple-500">{`{`}</span><br />
                &nbsp;&nbsp;<span className="text-green-400">"email"</span>: <span className="text-amber-400">"umang@example.com"</span>,<br />
                &nbsp;&nbsp;<span className="text-green-400">"phone"</span>: <span className="text-amber-400">"+1 (234) 567-890"</span><br />
                <span className="text-purple-500">{`}`}</span>;
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-white">Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-blue-400 transition-colors relative overflow-hidden block"
                    onMouseEnter={() => setHoveredLink('home')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative z-10">Home</span>
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-300 origin-left"
                      style={{
                        transform: hoveredLink === 'home' ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-blue-400 transition-colors relative overflow-hidden block"
                    onMouseEnter={() => setHoveredLink('about')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative z-10">About</span>
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-300 origin-left"
                      style={{
                        transform: hoveredLink === 'about' ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-blue-400 transition-colors relative overflow-hidden block"
                    onMouseEnter={() => setHoveredLink('projects')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative z-10">Projects</span>
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-300 origin-left"
                      style={{
                        transform: hoveredLink === 'projects' ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">More</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-blue-400 transition-colors relative overflow-hidden block"
                    onMouseEnter={() => setHoveredLink('skills')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative z-10">Skills</span>
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-300 origin-left"
                      style={{
                        transform: hoveredLink === 'skills' ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-blue-400 transition-colors relative overflow-hidden block"
                    onMouseEnter={() => setHoveredLink('testimonials')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative z-10">Testimonials</span>
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-300 origin-left"
                      style={{
                        transform: hoveredLink === 'testimonials' ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-blue-400 transition-colors relative overflow-hidden block"
                    onMouseEnter={() => setHoveredLink('contact')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative z-10">Contact</span>
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-300 origin-left"
                      style={{
                        transform: hoveredLink === 'contact' ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="group mb-8"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/80 hover:to-blue-600/80 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 p-4 rounded-full transition-all duration-500 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 hover:shadow-xl">
                <ArrowUp className="text-white h-5 w-5 group-hover:animate-bounce transition-transform" />
              </div>
            </button>

            {/* Social media section */}
            <div className="text-center md:text-right mb-6">
              <h4 className="font-semibold mb-4 text-white text-lg">Connect</h4>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                Let's build something amazing together
              </p>

              <div className="flex gap-4 justify-center md:justify-end">
                {/* GitHub */}
                <a
                  href="https://github.com/umangmandnaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="GitHub Profile"
                >
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-gray-700 hover:to-gray-600 p-3 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-gray-500/50 shadow-lg hover:shadow-xl hover:shadow-gray-500/20">
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/umangmandnaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="LinkedIn Profile"
                >
                  <div className="bg-gradient-to-r from-blue-800/50 to-blue-700/50 hover:from-blue-700 hover:to-blue-600 p-3 rounded-xl transition-all duration-300 border border-blue-700/50 hover:border-blue-500/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/20">
                    <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                </a>

                {/* Twitter/X */}
                <a
                  href="https://twitter.com/umangmandnaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="Twitter Profile"
                >
                  <div className="bg-gradient-to-r from-sky-800/50 to-sky-700/50 hover:from-sky-700 hover:to-sky-600 p-3 rounded-xl transition-all duration-300 border border-sky-700/50 hover:border-sky-500/50 shadow-lg hover:shadow-xl hover:shadow-sky-500/20">
                    <svg className="w-5 h-5 text-sky-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/umangmandnaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="Instagram Profile"
                >
                  <div className="bg-gradient-to-r from-pink-800/50 to-purple-700/50 hover:from-pink-700 hover:to-purple-600 p-3 rounded-xl transition-all duration-300 border border-pink-700/50 hover:border-pink-500/50 shadow-lg hover:shadow-xl hover:shadow-pink-500/20">
                    <svg className="w-5 h-5 text-pink-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-400">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
