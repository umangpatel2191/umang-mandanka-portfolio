
import { useState, useEffect } from "react";
import TechStackCard from "@/components/TechStackCard";
import { Bot, Brain, Puzzle, Users, ClipboardList, BarChart2, Orbit } from "lucide-react";
import React from "react";

import { ReactNode } from "react";

interface Skill {
  name: string;
  icon: string | ReactNode;
  yearsExperience: number;
  projectCount: number;
  category: string;
  description: string;
  primaryColor: string;
}

const skills: Skill[] = [
  // Frontend Technologies
  {
    name: "Angular (v19+)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    yearsExperience: 3,
    projectCount: 15,
    category: "Frontend",
    description: "Building enterprise-level SPAs with Angular v19+, RxJS, and comprehensive testing strategies.",
    primaryColor: "#DD0031"
  },

  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    yearsExperience: 6,
    projectCount: 50,
    category: "Frontend",
    description: "Building semantic, accessible web structures with modern HTML5 features, form validation, and SEO optimization.",
    primaryColor: "#E34F26"
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    yearsExperience: 6,
    projectCount: 45,
    category: "Frontend",
    description: "Creating responsive layouts, animations, and modern designs using CSS Grid, Flexbox, and custom properties.",
    primaryColor: "#1572B6"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    yearsExperience: 5,
    projectCount: 40,
    category: "Frontend",
    description: "Developing interactive web applications with ES6+, async programming, and modern JavaScript frameworks.",
    primaryColor: "#F7DF1E"
  },
  {
    name: "jQuery",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    yearsExperience: 4,
    projectCount: 20,
    category: "Frontend",
    description: "DOM manipulation and AJAX interactions with jQuery for legacy support and rapid prototyping.",
    primaryColor: "#0769AD"
  },
  {
    name: "Webflow",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M27.1 4.5c-1.2 0-2.2 0.7-2.8 1.9l-6.9 14.6-5.2-13c-0.5-1.2-1.5-1.9-2.7-1.9-1.2 0-2.2 0.7-2.7 1.9L2.1 25.9c-0.3 0.7 0.1 1.6 0.9 1.9 0.7 0.3 1.6-0.1 1.9-0.9l5.2-13 5.2 13c0.4 1.1 1.3 1.8 2.5 1.8 1.2 0 2.1-0.7 2.5-1.8l7.7-16.3c0.3-0.7-0.1-1.6-0.9-1.9-0.1-0.1-0.3-0.1-0.4-0.1z" fill="#4353FF"/>
        </g>
      </svg>
    ),
    yearsExperience: 2,
    projectCount: 10,
    category: "Frontend",
    description: "Visual web development and CMS creation with Webflow for rapid website deployment.",
    primaryColor: "#4353FF"
  },
  {
    name: "Lovable",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    yearsExperience: 1,
    projectCount: 5,
    category: "Frontend",
    description: "AI-powered web development with Lovable for rapid prototyping and modern React applications.",
    primaryColor: "#FF6B6B"
  },
  // UI/UX & Styling
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    yearsExperience: 3,
    projectCount: 25,
    category: "Frontend",
    description: "Rapid UI development with utility-first approach, custom design systems, and responsive components.",
    primaryColor: "#06B6D4"
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    yearsExperience: 4,
    projectCount: 20,
    category: "Frontend",
    description: "Fast prototyping and responsive web development using Bootstrap's component library and grid system.",
    primaryColor: "#7952B3"
  },
  {
    name: "SCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    yearsExperience: 4,
    projectCount: 30,
    category: "Frontend",
    description: "Enhanced CSS with variables, nesting, and mixins for maintainable stylesheet architecture.",
    primaryColor: "#CF649A"
  },
  // Backend & Database
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    yearsExperience: 3,
    projectCount: 18,
    category: "Backend",
    description: "Server-side development with Node.js, REST APIs, and integration with various databases and services.",
    primaryColor: "#339933"
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    yearsExperience: 2,
    projectCount: 12,
    category: "Backend",
    description: "Full-stack development with Supabase for authentication, real-time databases, and serverless functions.",
    primaryColor: "#3ECF8E"
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    yearsExperience: 3,
    projectCount: 15,
    category: "Backend",
    description: "Relational database design, optimization, and complex query development with MySQL.",
    primaryColor: "#4479A1"
  },

  // AI & Machine Learning
  {
    name: "RAG Chatbots",
    icon: <Bot className="w-12 h-12 text-[#FF6B35]" />, // Lucide Bot icon
    yearsExperience: 1,
    projectCount: 5,
    category: "AI/ML",
    description: "Building Retrieval-Augmented Generation chatbots for intelligent customer support and information retrieval.",
    primaryColor: "#FF6B35"
  },
  {
    name: "LLM Integration",
    icon: <Brain className="w-12 h-12 text-[#412991]" />, // Lucide Brain icon
    yearsExperience: 1,
    projectCount: 8,
    category: "AI/ML",
    description: "Integrating OpenAI APIs for natural language processing and AI-powered application features.",
    primaryColor: "#412991"
  },
  // Development Tools
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    yearsExperience: 5,
    projectCount: 35,
    category: "Tools",
    description: "Version control mastery with Git workflows, branching strategies, and collaborative development practices.",
    primaryColor: "#F05032"
  },

];

const categories = ["All", "Frontend", "Backend", "AI/ML", "Tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="skills" className="block-section relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-accent-gradient">
            Tech Stack & Skills
          </h2>
          <div className="w-16 h-1 accent-gradient mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Technologies I use to build modern web applications
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card/40 text-foreground hover:bg-card/60 border border-white/10"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Tech Stack Grid - More spacious */}
        <div 
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <TechStackCard
              key={skill.name}
              {...skill}
              index={index}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default SkillsSection;
