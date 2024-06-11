import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react'
import TechnologyIcon from './TechnologyIcon';
import { availableTechnologies } from '../utils/constants';

interface CardSpotlightProps {
  variant: 'list' | 'card';
  slug: string;
  title: string;
  description: string;
  technologies: string[];
}

const CardSpotlight: React.FC<CardSpotlightProps> = ({ variant, slug, title, description, technologies }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  if (!variant) variant = 'card';

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

  if (variant === 'list') {
    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative flex h-fit w-[720px] max-w-[90vw] overflow-hidden rounded border border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 p-6 shadow-2xl`}
      >
        <div
          className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
          }}
        />
        <a href={`/projects/${slug}`} className='hover:text-gray-200 hover:font-bolder transition-all duration-300 absolute right-3 top-3 flex items-center'>
          <span className='text-xs underline'>read more</span> <ArrowRight className='h-4 w-4' />
        </a>

        <div className='flex flex-col w-full justify-center gap-2'>
          <div>
            <h3 className='text-xl text-gray-300'>{title}</h3>
          </div>

          <div>
            {/* <p className='text-sm text-gray-400 line-clamp-1'>{description}</p> */}
          </div>

          {/* <img src="" alt="" /> */}

          {/* Technologies */}

          <div>
            <ul className='text-sm flex space-x-2'>
              {filteredTechnologies.map(({ src, alt }) => (
                <TechnologyIcon key={alt} src={src} alt={alt} size={4} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative flex h-42 md:h-48 aspect-video overflow-hidden rounded border border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 p-6 shadow-2xl`}
      >
        <div
          className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
          }}
        />
        <a href={`/projects/${slug}`} className='hover:text-gray-200 hover:font-bolder transition-all duration-300 absolute right-3 top-3 flex items-center'>
          <span className='text-xs underline'>read more</span> <ArrowRight className='h-4 w-4' />
        </a>
        <div className='flex flex-col w-full relative mt-1'>
          <h3 className='text-xl text-gray-300 mb-2'>{title}</h3>

          <p className='text-sm text-gray-400 line-clamp-3'>{description}</p>

          <img src="" alt="" />

          {/* Technologies */}
          <ul className='text-sm flex space-x-2 absolute -bottom-2 lg:bottom-0'>
            {filteredTechnologies.map(({ src, alt }) => (
              <TechnologyIcon key={alt} src={src} alt={alt} size={4} />
            ))}
          </ul>
        </div>
      </div>
    );
  }

};

export default CardSpotlight;
