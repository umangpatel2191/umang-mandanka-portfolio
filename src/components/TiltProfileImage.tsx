
import { useState, useRef, useEffect } from "react";

interface TiltProfileImageProps {
  imageUrl?: string;
}

const TiltProfileImage = ({ imageUrl = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5" }: TiltProfileImageProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    // On mobile/touch, don't tilt
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    // Clamp tilt to ±10deg
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
    setTilt({ x: clamp(x * 20, -10, 10), y: clamp(-y * 20, -10, 10) });
  };

  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl shadow-xl border border-primary/20 bg-gradient-to-br from-gray-900/70 to-gray-800/60"
      style={{
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tilt container */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ 
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={imageUrl}
            alt="Profile of Umang Mandnaka"
            className="w-full h-full object-cover aspect-square"
            loading="lazy"
            style={{
              transform: isHovering ? 'scale(1.05)' : 'scale(1)', 
              transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)'
            }}
          />
        </div>
        
        {/* Glare effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/20"
          style={{ 
            opacity: isHovering ? 0.6 : 0,
            transition: 'opacity 0.3s ease-out',
            transform: 'translateZ(1px)'
          }}
        ></div>
        
        {/* Info overlay */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{ transform: 'translateZ(2px)' }}
        >
          <h3 className="text-2xl font-bold">Umang Mandnaka</h3>
          <p className="text-white/80">Frontend Developer</p>
        </div>
        
        {/* 3D layered elements */}
        <div 
          className="absolute right-6 top-6 w-16 h-16 rounded-lg bg-primary/30 backdrop-blur-md"
          style={{ 
            transform: 'translateZ(40px) rotate(45deg)',
            opacity: isHovering ? 0.8 : 0,
            transition: 'opacity 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute left-6 bottom-24 w-12 h-12 rounded-full bg-secondary/30 backdrop-blur-md"
          style={{ 
            transform: 'translateZ(30px)',
            opacity: isHovering ? 0.8 : 0,
            transition: 'opacity 0.3s ease-out'
          }}
        ></div>
      </div>
    </div>
  );
};

export default TiltProfileImage;
