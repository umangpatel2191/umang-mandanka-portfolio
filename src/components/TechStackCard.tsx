
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { ReactNode } from "react";

interface TechStackCardProps {
  name: string;
  icon: string | ReactNode;
  yearsExperience: number;
  projectCount: number;
  description: string;
  category: string;
  primaryColor: string;
  index: number;
}

const TechStackCard = ({
  name,
  icon,
  yearsExperience,
  projectCount,
  description,
  category,
  primaryColor,
  index
}: TechStackCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer
                 bg-gradient-to-br from-card/40 to-card/10 border border-white/10 backdrop-blur-sm
                 hover:shadow-lg hover:shadow-primary/10 hover:border-white/20`}
      style={{ 
        animationDelay: `${index * 80}ms`,
        borderColor: isHovered ? `${primaryColor}30` : undefined
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 h-full flex flex-col items-center text-center justify-center">
        {/* Tech Icon with Subtle Glow */}
        <div className="relative mb-3">
          <div 
            className={`absolute inset-0 rounded-full blur-lg transition-all duration-300 ${
              isHovered ? 'opacity-30 scale-125' : 'opacity-0'
            }`}
            style={{ backgroundColor: primaryColor }}
          />
          <div className="relative w-12 h-12 flex items-center justify-center">
            {typeof icon === "string" ? (
              <img 
                src={icon} 
                alt={name} 
                className="w-8 h-8 object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110" 
              />
            ) : (
              <span className="w-8 h-8 flex items-center justify-center">{icon}</span>
            )}
          </div>
        </div>

        {/* Tech Name */}
        <h3 className="text-sm font-display font-medium text-foreground leading-tight">
          {name}
        </h3>
      </CardContent>
    </Card>
  );
};

export default TechStackCard;
