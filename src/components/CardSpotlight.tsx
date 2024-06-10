import React, { useRef, useState } from 'react';
import TechnologyIcon from './TechnologyIcon';

const availableTechnologies = [
  { src: 'https://svgl.app/library/astro.svg', alt: 'Astro' },
  { src: 'https://svgl.app/library/react.svg', alt: 'React' },
  { src: 'https://svgl.app/library/supabase.svg', alt: 'Supabase' },
  { src: 'https://svgl.app/library/vitejs.svg', alt: 'Vite' },
  { src: 'https://svgl.app/library/mysql.svg', alt: 'MySQL' },
  { src: 'https://svgl.app/library/mongodb.svg', alt: 'MongoDB' },
  { src: 'https://svgl.app/library/postgresql.svg', alt: 'PostgreSQL' },
  { src: 'https://svgl.app/library/nextjs_icon_dark.svg', alt: 'Next.js' },
];

interface CardSpotlightProps {
  title: string;
  description: string;
  technologies: string[];
}

const CardSpotlight: React.FC<CardSpotlightProps> = ({ title, description, technologies }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const filteredTechnologies = availableTechnologies.filter((tech) =>
    technologies.includes(tech.alt.toLowerCase())
  );

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative flex h-48 aspect-video overflow-hidden rounded border border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 p-6 shadow-2xl'
    >
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      <div className='flex flex-col w-full relative bg-white/20'>
        <h3 className='text-xl text-gray-300'>{title}</h3>

        <p className='text-sm text-gray-400'>{description}</p>

        {/* Technologies */}
        <ul className='text-sm flex space-x-2 absolute bottom-0'>
          {filteredTechnologies.map(({ src, alt }) => (
            <TechnologyIcon key={alt} src={src} alt={alt} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardSpotlight;
