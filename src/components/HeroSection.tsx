
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Code, Braces, FileCode, Sparkles, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";
  const [index, setIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState<Array<{ x: number, y: number, id: number }>>([]);
  const [currentShowcase, setCurrentShowcase] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Text typing animation
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Interactive cursor trail effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;

      setMousePosition({ x, y });

      // Add cursor trail
      setCursorTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 points
      });

      // Update grid perspective based on mouse position
      if (gridRef.current) {
        const gridX = (e.clientX - left) / width - 0.5;
        const gridY = (e.clientY - top) / height - 0.5;
        gridRef.current.style.transform = `perspective(1000px) rotateX(${gridY * 3}deg) rotateY(${-gridX * 3}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Rotating showcase content
  const showcases = [
    { type: "experience", title: "5+ Years Building", subtitle: "Modern Web Applications" },
    { type: "tech", title: "React • TypeScript", subtitle: "Next.js • Tailwind CSS" },
    { type: "focus", title: "User-Centric Design", subtitle: "Performance Optimization" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShowcase((prev) => (prev + 1) % showcases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Matrix-like code rain effect generator with improved visibility
  useEffect(() => {
    const createMatrixEffect = () => {
      const container = document.getElementById('matrix-container');
      if (!container) return;

      // Clear any existing elements
      container.innerHTML = '';

      const width = container.clientWidth;
      const height = container.clientHeight;
      const columns = Math.floor(width / 25);

      const codeChars = '01{}[]<>/|\\;:+"\'%$#@ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'absolute matrix-code';
        column.style.left = `${(i * 25) + Math.random() * 10}px`;
        column.style.top = `${Math.random() * height}px`;
        column.style.setProperty('--col-index', i.toString());

        const length = 5 + Math.floor(Math.random() * 15);
        let content = '';
        // Each char is a <span>, tail chars get fade class
        for (let j = 0; j < length; j++) {
          const char = codeChars[Math.floor(Math.random() * codeChars.length)];
          if (j > length - 5) {
            content += `<span class='fade'>${char}</span>`;
          } else {
            content += `<span>${char}</span>`;
          }
        }
        column.innerHTML = content;
        if (i % 2 === 0) {
          column.classList.add('move-down');
        } else {
          column.classList.add('move-right');
        }
        container.appendChild(column);
      }
    };

    createMatrixEffect();
    const interval = setInterval(createMatrixEffect, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-black font-display">

      {/* Main content area */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="max-w-2xl">
            <div className="inline-block mb-6 px-6 py-2 text-sm font-code bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full text-blue-300 border border-blue-500/20 hover:border-blue-400/40 transition-all cursor-pointer">
              <span className="flex items-center gap-2">
                <Code className="w-4 h-4 animate-spin" />
                Crafting Digital Experiences
              </span>
            </div>

            {/* Name with enhanced presentation - smaller text */}
            <div className="relative mb-3">
              <h1 className="text-3xl md:text-4xl font-bold mb-0 text-white leading-tight">
                <span className="relative hero-code-text">
                  <span className="animate-text-shimmer bg-clip-text text-transparent bg-[length:200%] bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                    Umang Mandnaka
                  </span>
                </span>
              </h1>
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-blue-500/60 text-sm font-code">{'{ }'}</div>
            </div>

            {/* Enhanced developer title - smaller text */}
            <div className="relative mb-6">
              <h2 className="text-xl md:text-2xl flex text-gray-300 items-center font-code mb-3">
                <span className="mr-2 text-blue-400/60 text-lg">&lt;</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 border-r-2 border-blue-400 pr-2 animate-pulse">{text}</span>
                <span className="ml-2 text-blue-400/60 text-lg">/&gt;</span>
              </h2>

              {/* Value proposition */}
              <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
                Transforming ideas into{" "}
                <span className="text-cyan-400 font-semibold">pixel-perfect</span>,{" "}
                <span className="text-purple-400 font-semibold">lightning-fast</span> web experiences
                that users actually love to use.
              </p>
            </div>

            {/* Interactive demo element - more compact */}
            <div className="mb-8 p-3 bg-black/40 backdrop-blur-lg border border-blue-500/20 rounded-lg font-code text-xs overflow-hidden max-w-sm hover:border-blue-400/40 transition-all group">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <FileCode className="w-3 h-3" />
                <span className="text-xs">Live Demo</span>
                <div className="ml-auto w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <div className="text-gray-300 space-y-1 text-xs">
                <div className="flex items-center gap-1">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-300">user</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-green-400">"impressed"</span>
                </div>
                <div className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                  <span className="text-purple-400">return</span>
                  <span className="text-yellow-400">&lt;Amazing</span>
                  <span className="text-blue-300">Experience</span>
                  <span className="text-yellow-400">/&gt;</span>
                </div>
              </div>
            </div>

            {/* Call-to-action buttons - more compact */}
            <div className="flex flex-wrap gap-3">
              <Button size="default" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group relative overflow-hidden font-code text-sm px-6 py-3">
                <a href="#projects">
                  <span className="relative z-10">View My Work</span>
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button size="default" variant="outline" asChild className="text-gray-300 border-gray-600 hover:bg-gray-800/50 group relative overflow-hidden font-code text-sm px-6 py-3">
                <a href="#contact">
                  <span className="relative z-10 flex items-center gap-2">
                    <Braces className="w-3 h-3" />
                    Let's Connect
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
              </Button>
            </div>

            {/* Enhanced social links - more compact */}
            <div className="mt-12 flex gap-4">
              <a href="https://github.com/umangmandnaka" target="_blank" rel="noopener noreferrer"
                className="group bg-gray-800/60 backdrop-blur-sm p-3 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 text-blue-400 border border-blue-500/20 hover:border-blue-400/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a href="https://linkedin.com/in/umangmandnaka" target="_blank" rel="noopener noreferrer"
                className="group bg-gray-800/60 backdrop-blur-sm p-3 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 text-blue-400 border border-blue-500/20 hover:border-blue-400/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="mailto:umang@example.com" target="_blank" rel="noopener noreferrer"
                className="group bg-gray-800/60 backdrop-blur-sm p-3 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 text-blue-400 border border-blue-500/20 hover:border-blue-400/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </a>

              <a href="https://twitter.com/umangmandnaka" target="_blank" rel="noopener noreferrer"
                className="group bg-gray-800/60 backdrop-blur-sm p-3 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 text-blue-400 border border-blue-500/20 hover:border-blue-400/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - 3D Animation */}
          <div className="lg:block relative h-[600px] w-full overflow-hidden">
            {/* 3D Scene Container */}
            <div className="absolute inset-0 perspective-1000">

              {/* Floating Code Blocks */}
              <div className="absolute top-20 right-10 animate-float-slow">
                <div className="floating-code-block bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-lg border border-blue-500/40 rounded-xl p-5 font-code text-sm shadow-2xl animate-pulse-glow">
                  <div className="text-purple-400 font-semibold">const</div>
                  <div className="text-blue-300">skills = [</div>
                  <div className="text-green-400 ml-4">'React',</div>
                  <div className="text-green-400 ml-4">'TypeScript',</div>
                  <div className="text-green-400 ml-4">'Next.js'</div>
                  <div className="text-blue-300">]</div>
                </div>
              </div>

              <div className="absolute top-40 right-32 animate-float-medium">
                <div className="floating-code-block bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-purple-500/40 rounded-xl p-5 font-code text-sm shadow-2xl animate-pulse-glow">
                  <div className="text-yellow-400 font-semibold">function</div>
                  <div className="text-cyan-400">createMagic() {`{`}</div>
                  <div className="text-gray-300 ml-4">return <span className="text-pink-400">✨</span></div>
                  <div className="text-cyan-400">{`}`}</div>
                </div>
              </div>

              <div className="absolute bottom-32 right-16 animate-float-fast">
                <div className="floating-code-block bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-lg border border-cyan-500/40 rounded-xl p-5 font-code text-sm shadow-2xl animate-pulse-glow">
                  <div className="text-pink-400 font-semibold">&lt;Component</div>
                  <div className="text-blue-300 ml-4">innovative={`{true}`}</div>
                  <div className="text-blue-300 ml-4">responsive={`{true}`}</div>
                  <div className="text-pink-400">/&gt;</div>
                </div>
              </div>

              {/* Enhanced Geometric Shapes */}
              <div className="absolute top-16 right-20">
                <div className="w-24 h-24 border-2 border-blue-400/50 rounded-xl animate-spin-slow bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm shadow-lg shadow-blue-400/30"></div>
              </div>

              <div className="absolute bottom-20 right-40">
                <div className="w-20 h-20 border-2 border-purple-400/50 rounded-full animate-pulse bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm shadow-lg shadow-purple-400/30"></div>
              </div>

              <div className="absolute top-1/2 right-8">
                <div className="w-16 h-16 border-2 border-cyan-400/50 transform rotate-45 animate-bounce-slow bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg shadow-cyan-400/30"></div>
              </div>

              {/* Enhanced Particle System */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float-particle shadow-lg"
                    style={{
                      left: `${15 + (i * 4) % 70}%`,
                      top: `${5 + (i * 6) % 90}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${4 + (i % 4)}s`,
                      filter: `hue-rotate(${i * 30}deg)`
                    }}
                  />
                ))}
              </div>

              {/* Central Enhanced 3D Cube */}
              <div className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="cube-container animate-pulse-glow">
                  <div className="cube animate-rotate-3d">
                    <div className="cube-face front bg-gradient-to-br from-blue-600/30 to-purple-600/30 border-2 border-blue-400/50">
                      <Code className="w-10 h-10 text-blue-400 drop-shadow-lg" />
                    </div>
                    <div className="cube-face back bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-400/50">
                      <Braces className="w-10 h-10 text-purple-400 drop-shadow-lg" />
                    </div>
                    <div className="cube-face right bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border-2 border-cyan-400/50">
                      <FileCode className="w-10 h-10 text-cyan-400 drop-shadow-lg" />
                    </div>
                    <div className="cube-face left bg-gradient-to-br from-pink-600/30 to-purple-600/30 border-2 border-pink-400/50">
                      <Sparkles className="w-10 h-10 text-pink-400 drop-shadow-lg" />
                    </div>
                    <div className="cube-face top bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border-2 border-yellow-400/50">
                      <MousePointer2 className="w-10 h-10 text-yellow-400 drop-shadow-lg" />
                    </div>
                    <div className="cube-face bottom bg-gradient-to-br from-green-600/30 to-cyan-600/30 border-2 border-green-400/50">
                      <div className="w-10 h-10 text-green-400 font-bold text-2xl drop-shadow-lg flex items-center justify-center">{`{}`}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="orbit-container animate-orbit">
                  <div className="orbit-element w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-xl"></div>
                </div>
                <div className="orbit-container animate-orbit-reverse">
                  <div className="orbit-element w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-xl"></div>
                </div>
                <div className="orbit-container-large animate-orbit-slow">
                  <div className="orbit-element w-3 h-3 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full shadow-xl"></div>
                </div>
              </div>

              {/* Enhanced Matrix Grid Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="grid-3d"></div>
              </div>

              {/* Additional Floating Elements */}
              <div className="absolute top-10 left-10 animate-float-slow" style={{ animationDelay: '2s' }}>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
              </div>

              <div className="absolute bottom-10 left-20 animate-float-medium" style={{ animationDelay: '1s' }}>
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-60 animate-pulse"></div>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="group flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors font-code">
          <span className="text-sm mb-3 group-hover:text-blue-300 transition-colors">Explore More</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
