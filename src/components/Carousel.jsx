import React from 'react';
import Highlights from '../data/Highlights.json';

export default function Carousel() {
  return (
    <div
      id="memories"
      className="w-full min-h-screen px-6 bg-primary flex flex-col items-center justify-center"
    >
      <div className="carousel w-full">
        {Highlights.map((slide) => (
          <div
            key={slide.id}
            id={slide.id}
            className="carousel-item relative w-full gap-3 flex flex-col items-center justify-center"
          >
            <h2 className="text-center text-2xl font-semibold text-base-100">
              {slide.title}
            </h2>
            {/* Set max height to ensure no large images distort layout */}
            <img
              src={slide.imageUrl}
              className="max-h-96 w-auto object-contain" // Change object-fill to object-contain
              alt={slide.title} // Ensure you provide alt text for accessibility
            />
            <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#${slide.prevId}`}
                className="btn btn-circle btn-xs  text-secondary"
              >
                ❮
              </a>
              <a
                href={`#${slide.nextId}`}
                className="btn btn-circle btn-xs  text-secondary"
              >
                ❯
              </a>
            </div>
            <p className="text-justify text-base-100">{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
