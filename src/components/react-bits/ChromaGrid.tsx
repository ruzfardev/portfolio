import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  columns?: number;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  columns = 3
}) => {
  const demo: ChromaItem[] = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Project One',
      subtitle: 'React • TypeScript',
      borderColor: '#4F46E5',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Project Two',
      subtitle: 'Next.js • Tailwind',
      borderColor: '#10B981',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=3',
      title: 'Project Three',
      subtitle: 'Vue • Firebase',
      borderColor: '#F59E0B',
      url: 'https://github.com/'
    }
  ];

  const data = items?.length ? items : demo;

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Responsive grid classes based on columns prop
  const getGridCols = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 3:
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div
      className={`grid ${getGridCols()} gap-4 sm:gap-6 ${className}`}
    >
      {data.map((item, i) => (
        <article
          key={i}
          ref={(el) => {
            if (el) {
              el.style.setProperty('--mouse-x', '50%');
              el.style.setProperty('--mouse-y', '50%');
            }
          }}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(item.url)}
          className="group relative flex flex-col bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 cursor-pointer transition-all duration-300 hover:border-border hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
          style={{
            '--accent-color': item.borderColor || '#6366F1'
          } as React.CSSProperties}
        >
          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${item.borderColor}15, transparent 40%)`
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: item.borderColor }}
          />

          {/* Image container */}
          <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-60" />

            {/* External link icon */}
            <div className="absolute top-3 right-3 p-2 rounded-full bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <ExternalLink size={16} className="text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="relative p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {item.subtitle}
            </p>
          </div>

          {/* Bottom border accent on hover */}
          <div
            className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500 ease-out"
            style={{ background: item.borderColor }}
          />
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
