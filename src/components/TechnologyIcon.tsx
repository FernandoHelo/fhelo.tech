// { src: 'https://svgl.app/library/astro.svg', alt: 'Astro' }

export default function TechnologyIcon({ src, alt }: { src: string, alt: string }) {
  return (
    <li>
      <div>
        <img src={src} alt={alt} className='object-contain w-4 h-4' />
      </div>
    </li>
  );
}