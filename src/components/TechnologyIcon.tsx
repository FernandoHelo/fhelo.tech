// { src: 'https://svgl.app/library/astro.svg', alt: 'Astro' }

export default function TechnologyIcon({ src, alt, size }: { src: string, alt: string, size: number | undefined }) {
  if (!size) {
    size = 4;
  }
  return (
    <li>
      <div>
        <img src={src} alt={alt} className={`object-contain w-${size} h-${size}`} />
      </div>
    </li>
  );
}