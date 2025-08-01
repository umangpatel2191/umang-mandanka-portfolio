import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, ExternalLink, Github, X } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  longDescription: string;
}

import ctChatbotImg from "@/assets/images/ct_chatbot.jpeg";
import hrbotImg from "@/assets/images/hrbot.jpeg";
import expertImg from "@/assets/images/expert.jpeg";
import evpartsImg from "@/assets/images/evparts.jpeg";
import laundryImg from "@/assets/images/laundry.jpg";

function truncateDescription(longDescription: string, maxWords: number = 16): string {
  const words = longDescription.replace(/\n|\r|\r\n/g, ' ').split(/\s+/).filter(Boolean);
  return words.slice(0, maxWords).join(' ') + (words.length > maxWords ? ' ...' : '');
}

const projects: Project[] = [
  // CT Chatbot (CodeTheorem Chatbot)
  {
    id: 1,
    title: "Agency Chatbot - RAG Implementation",
    description: truncateDescription(`A Retrieval Augmented Generation chatbot for Code Theorem agency, leveraging Qdrant, HuggingFace, and Gemini LLM.\n\nModern Node.js stack, beautiful frontend, and modular backend for rapid innovation.\n\n**Purpose:** Node.js chatbot with RAG (Retrieval Augmented Generation), serving intelligent, context-aware answers.\n**Tech Stack:** Node.js, Express, Qdrant, HuggingFace Transformers, Gemini API, Tailwind CSS, Vanilla JS.\n**Frontend:** Modern floating chat UI with smooth animations and custom fonts.\n**Backend:** Modular scripts for embeddings, vector search, and LLM calls.`),
    image: ctChatbotImg,
    tags: ["Qdrant", "Gemini LLM", "Node.js", "HuggingFace", "Tailwind CSS", "Vanilla JS", "Express"],
    liveUrl: "https://github.com/umangpatel2191", // Update if live demo is available
    githubUrl: "https://github.com/umangpatel2191", // Update if repo is available
    longDescription: `A Retrieval Augmented Generation chatbot for Code Theorem agency, leveraging Qdrant, HuggingFace, and Gemini LLM.\n\nModern Node.js stack, beautiful frontend, and modular backend for rapid innovation.\n\n**Purpose:** Node.js chatbot with RAG (Retrieval Augmented Generation), serving intelligent, context-aware answers.\n**Tech Stack:** Node.js, Express, Qdrant, HuggingFace Transformers, Gemini API, Tailwind CSS, Vanilla JS.\n**Frontend:** Modern floating chat UI with smooth animations and custom fonts.\n**Backend:** Modular scripts for embeddings, vector search, and LLM calls.`
  },

  // HR Manual Chatbot
  {
    id: 2,
    title: "HR_BOT - Knowledge Transfer Document",
    description: truncateDescription(`HR_BOT is an intelligent chatbot that answers employee HR queries using your company's HR manual, powered by:\n- Qdrant: Vector search capabilities\n- Gemini LLM: Answer generation\n- HuggingFace: Text embeddings\n- Modern Web UI: Responsive chat interface.`),
    image: hrbotImg,
    tags: ["Qdrant", "Gemini LLM", "Node.js", "HuggingFace", "Tailwind CSS", "Vanilla JS", "Express"],
    liveUrl: "https://github.com/umangpatel2191",
    githubUrl: "https://github.com/umangpatel2191",
    longDescription: `HR_BOT is an intelligent chatbot that answers employee HR queries using your company's HR manual, powered by:\n- Qdrant: Vector search capabilities\n- Gemini LLM: Answer generation\n- HuggingFace: Text embeddings\n- Modern Web UI: Responsive chat interface.`
  },
  // Doctor Portfolio Platform
  {
    id: 3,
    title: "Professional Portfolio Platform",
    description: truncateDescription(`• Built a fully responsive SPA for healthcare professional portfolios\n• Used grid/flexbox with media queries for seamless cross-device compatibility\n• Created interactive components like sliders, FAQs, and mobile menus\n• Ensured semantic HTML, accessibility, and optimized performance`),
    image: expertImg,
    tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Google Fonts", "Font Awesome"],
    liveUrl: "https://github.com/umangpatel2191",
    githubUrl: "https://github.com/umangpatel2191",
    longDescription: `• Built a fully responsive SPA for healthcare professional portfolios\n• Used grid/flexbox with media queries for seamless cross-device compatibility\n• Created interactive components like sliders, FAQs, and mobile menus\n• Ensured semantic HTML, accessibility, and optimized performance`
  },
  // E-Commerce Platform
  {
    id: 4,
    title: "E-Commerce Platform",
    description: truncateDescription(`• Developed a modern e-commerce frontend for EV parts using SPA-like architecture\n• Designed dynamic product displays, cart systems, and interactive modals for user engagement\n• Built a fully responsive UI with Tailwind CSS for cross-device compatibility\n• Used Google Fonts and Font Awesome for polished typography and iconography`),
    image: evpartsImg,
    tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Font Awesome"],
    liveUrl: "https://github.com/umangpatel2191",
    githubUrl: "https://github.com/umangpatel2191",
    longDescription: `• Developed a modern e-commerce frontend for EV parts using SPA-like architecture\n• Designed dynamic product displays, cart systems, and interactive modals for user engagement\n• Built a fully responsive UI with Tailwind CSS for cross-device compatibility\n• Used Google Fonts and Font Awesome for polished typography and iconography`
  },
  // Cleanhouse Service Booking Platform
  {
    id: 5,
    title: "Cleanhouse Service Booking Platform",
    description: truncateDescription(`• Collaborated in a cross-functional team of three to build a comprehensive household service booking platform\n• Designed and developed a full-stack solution, achieving a 90% improvement in user workflow efficiency\n• Enhanced service discovery by 30% through intuitive category-based navigation and smart search functionality`),
    image: laundryImg,
    tags: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP"],
    liveUrl: "https://github.com/umangpatel2191",
    githubUrl: "https://github.com/umangpatel2191",
    longDescription: `• Collaborated in a cross-functional team of three to build a comprehensive household service booking platform\n• Designed and developed a full-stack solution, achieving a 90% improvement in user workflow efficiency\n• Enhanced service discovery by 30% through intuitive category-based navigation and smart search functionality`
  },

];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-gray-800/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">Featured Projects</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-3"></div>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Recent works showcasing modern development
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 hover:scale-[1.02]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.08}s`
              }}
            >
              {/* Compact Project Image */}
              <div className="h-32 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>

              {/* Compact Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white mb-2 leading-tight line-clamp-2">
                  {project.title}
                </h3>

                {/* Only show 2 main tech tags */}
                <div className="flex gap-1 mb-3">
                  {project.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs px-1.5 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 2 && (
                    <Badge
                      variant="outline"
                      className="bg-gray-500/10 text-gray-400 border-gray-500/20 text-xs px-1.5 py-0.5"
                    >
                      +{project.tags.length - 2}
                    </Badge>
                  )}
                </div>

                {/* Compact Action Buttons */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleOpenProject(project)}
                    className="text-xs px-2 py-1 h-auto text-gray-400 hover:text-blue-400"
                  >
                    Details
                  </Button>
                  <div className="flex gap-1">
                    <a href="https://github.com/umangpatel2191" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-gray-400 hover:text-white"
                      >
                        <Github className="h-3 w-3" />
                      </Button>
                    </a>
                    <a href="https://github.com/umangpatel2191" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-gray-400 hover:text-white"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-8">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-blue-400 text-sm px-4 py-2"
          >
            <Code className="mr-1 h-3 w-3" />
            View All Projects
          </Button>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl backdrop-blur-md bg-gray-900/95 border border-white/20">
            {selectedProject && (
              <>
                <DialogHeader className="pb-4">
                  <DialogTitle className="text-xl font-bold text-white">{selectedProject.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  {/* Project Description */}
                  <div className="text-gray-300 text-base leading-relaxed">
                    {selectedProject.longDescription}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-blue-500/10 text-blue-400 border-blue-500/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <DialogFooter className="pt-6">
                  <div className="flex gap-3 w-full">
                    <Button
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                      asChild
                    >
                      <a href="https://github.com/umangpatel2191" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                      asChild
                    >
                      <a href="https://github.com/umangpatel2191" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectSection;
