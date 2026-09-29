import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

/**
 * @param {{ images?: string[] }} props
 */

export default function Carousel({ images = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  if (!images.length) return null;

  return (
    <div className="carousel-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', margin: '1.5rem 0' }}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container" style={{ display: 'flex' }}>
          {images.map((src, idx) => (
            <div className="embla__slide" key={idx} style={{ flex: '0 0 100%', minWidth: 0 }}>
              <img
                src={src}
                alt={`Project slide ${idx + 1}`}
                style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '50%', cursor: 'pointer' }}
      >
        &#10094;
      </button>

      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '50%', cursor: 'pointer' }}
      >
        &#10095;
      </button>
    </div>
  );
}