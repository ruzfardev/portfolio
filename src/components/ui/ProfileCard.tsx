import { useRef, useState } from "react";
import { motion } from "framer-motion";
import LetterGlitch from "@/components/react-bits/LetterGlitch";

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  role: string;
  className?: string;
}

export function ProfileCard({ imageSrc, name, role, className = "" }: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXValue = (mouseY / (rect.height / 2)) * -12;
    const rotateYValue = (mouseX / (rect.width / 2)) * 12;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-full max-w-sm mx-auto ${className}`}
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Card content */}
        <div
          className="relative bg-card rounded-2xl overflow-hidden"
          style={{
            transform: "translateZ(0)",
          }}
        >
          {/* LetterGlitch Background */}
          <div className="absolute inset-0 opacity-30">
            <LetterGlitch
              glitchColors={["#6366f1", "#8b5cf6", "#a855f7"]}
              glitchSpeed={80}
              centerVignette={false}
              outerVignette={true}
              smooth={true}
              characters="01"
            />
          </div>

          {/* Hero Image */}
          <div
            className="relative z-10 p-6"
            style={{
              transform: "translateZ(40px)",
            }}
          >
            <motion.div
              className="relative aspect-square rounded-xl overflow-hidden border-2 border-border/50"
              animate={{
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover"
              />

              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Info section */}
          <div
            className="relative z-10 px-6 pb-6 text-center"
            style={{
              transform: "translateZ(60px)",
            }}
          >
            <motion.h3
              className="text-2xl font-bold text-foreground mb-1"
              animate={{
                y: isHovered ? -3 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {name}
            </motion.h3>
            <motion.p
              className="text-muted-foreground font-medium"
              animate={{
                y: isHovered ? -3 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {role}
            </motion.p>

            {/* Status indicator */}
            <motion.div
              className="flex items-center justify-center gap-2 mt-4"
              animate={{
                opacity: isHovered ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground">Available for work</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CSS for spinning animation */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
}
