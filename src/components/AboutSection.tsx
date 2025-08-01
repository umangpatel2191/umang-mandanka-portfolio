
import { Card, CardContent } from "@/components/ui/card";
import meImg from "@/assets/images/me.jpg";
import useScrollReveal from "@/hooks/useScrollReveal";
import TiltProfileImage from "@/components/TiltProfileImage";
import PersonalityCard from "@/components/PersonalityCard";
import { Code, Server, Layout, FileCode, Coffee, Music, Camera, Gamepad2 } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  // Enhanced stats with more specific achievements
  const achievementCards = [
    { value: "1+", label: "Year Experience", icon: <Code size={16} className="text-blue-400" />, detail: "Frontend & AI" },
    { value: "8+", label: "Projects Delivered", icon: <FileCode size={16} className="text-purple-400" />, detail: "From concept to production" },
    { value: "98%", label: "Client Satisfaction", icon: <Layout size={16} className="text-cyan-400" />, detail: "Based on feedback" },
    { value: "6+", label: "Frameworks", icon: <Server size={16} className="text-indigo-400" />, detail: "Modern frameworks" },
  ];

  // Personal interests and values
  const personalityTraits = [
    {
      icon: <Coffee size={20} className="text-amber-500" />,
      title: "Coffee Enthusiast",
      description: "Best code is written with good coffee. I'm always exploring new brewing methods.",
      color: "from-amber-500/20 to-orange-500/10"
    },
    {
      icon: <Music size={20} className="text-purple-500" />,
      title: "Music Producer",
      description: "Creating beats and melodies in my spare time. Music inspires my creative coding approach.",
      color: "from-purple-500/20 to-pink-500/10"
    },
    {
      icon: <Camera size={20} className="text-green-500" />,
      title: "Photography",
      description: "Capturing moments and perspectives. It helps me see design from different angles.",
      color: "from-green-500/20 to-teal-500/10"
    },
    {
      icon: <Gamepad2 size={20} className="text-blue-500" />,
      title: "Gaming",
      description: "From indie games to AAA titles. Gaming UX heavily influences my interface design.",
      color: "from-blue-500/20 to-cyan-500/10"
    }
  ];

  return (
    <section id="about" className="py-20 z-10 relative overflow-hidden section-bg-gradient">
      {/* Background code symbols - reduced and subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-10 left-[10%] font-code text-4xl opacity-20">&lt;about&gt;</div>
        <div className="absolute bottom-10 left-[10%] font-code text-4xl opacity-20">&lt;/about&gt;</div>
        <div className="absolute top-1/3 right-[5%] font-code text-lg opacity-20">const developer = {`{`}</div>
        <div className="absolute top-1/3 right-[5%] translate-y-6 font-code text-lg opacity-20">&nbsp;&nbsp;passion: true,</div>
        <div className="absolute top-1/3 right-[5%] translate-y-12 font-code text-lg opacity-20">&nbsp;&nbsp;creativity: 'unlimited'</div>
        <div className="absolute top-1/3 right-[5%] translate-y-18 font-code text-lg opacity-20">{`}`}</div>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start" ref={ref}>
          <div
            className="md:w-1/2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)'
            }}
          >
            <div className="relative mb-8">
              <div className="bg-gradient-to-tr from-blue-500/20 to-purple-500/20 absolute -inset-4 rounded-xl blur-xl"></div>
              <div className="relative z-10 overflow-hidden rounded-lg border-[3px] border-gray-800">
                <TiltProfileImage imageUrl={meImg} />
              </div>

              {/* Code elements floating around image */}
              <div className="absolute -top-6 -right-6 text-blue-400 text-lg font-mono p-2 bg-gray-900/80 rounded rotate-12 animate-floating">{'<Creative />'}</div>
              <div className="absolute -bottom-6 -right-6 text-purple-400 text-lg font-mono p-2 bg-gray-900/80 rounded -rotate-6 animate-floating" style={{ animationDelay: "0.8s" }}>{'{ passion }'}</div>
            </div>

            {/* Achievement Cards - simplified */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {achievementCards.slice(0, 4).map((card, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/10 hover:border-blue-500/30">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2 mb-1">
                      {card.icon}
                      <div className="text-lg font-bold text-accent-gradient">{card.value}</div>
                    </div>
                    <div className="text-xs text-gray-400 font-code">{card.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Personal interests grid - moved below achievement cards */}
          </div>

          <div
            className="md:w-1/2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)'
            }}
          >
            <div className="relative">
              <span className="inline-block px-3 py-1 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full mb-4 font-code"># about_me</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">
                More Than Just Code
              </h2>

              <div className="space-y-4 text-gray-300 font-body">
                <p className="relative text-base leading-relaxed">
                  <span className="absolute -left-3 top-0 text-2xl text-blue-500/30">{`{`}</span>
                  Hey, I’m Umang—a passionate Angular Frontend Developer & AI Chatbot Specialist from India. My journey began with a curiosity for how websites work, evolving into expertise with HTML, CSS, JavaScript, Angular v19+, Tailwind CSS, and AI chatbot architecture. I love crafting clean, responsive, and meaningful digital experiences, whether building scalable platforms, e-commerce systems, or real-time AI-driven chatbots using RAG and LLMs.
                </p>
                <p>
                  I believe every pixel should serve a purpose and every interaction should feel intuitive and delightful. Outside of coding, I explore creativity through music production, street photography, and indie games—passions that inspire my approach to design, user empathy, and problem-solving.
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
