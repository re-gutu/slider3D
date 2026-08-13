'use client';

import React, { useEffect, useRef } from 'react';

const totalSlides = 10;
const images = Array.from(
  { length: totalSlides },
  (_, i) => `https://picsum.photos/seed/${i + 10}/600/800`
);
const titles = [
  "NEON STREETS", "DESERT MIRAGE", "OCEAN DEEP", "URBAN JUNGLE", 
  "COSMIC DRIFT", "FROZEN TUNDRA", "CYBER PUNK", "ANCIENT RUINS", 
  "NEBULA DUST", "SOLAR FLARE"
];

const lerp = (start: number, end: number, amt: number) => 
  (1 - amt) * start + amt * end;

export default function Slider3D() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const previewImgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const targetRotation = useRef(0);
  const currentRotation = useRef(0);
  const targetTiltX = useRef(0);
  const targetTiltY = useRef(0);
  const currentTiltX = useRef(0);
  const currentTiltY = useRef(0);
  const activeIndexRef = useRef(0);
  const requestRef = useRef<number>(0);

  const orbitRadius = 400;
  const anglePerSlide = 360 / totalSlides;
  const lerpSpeed = 0.05;
  const autoRotateSpeed = 0.05;

  useEffect(() => {
    const animate = () => {
      targetRotation.current += autoRotateSpeed;
      currentRotation.current = lerp(currentRotation.current, targetRotation.current, lerpSpeed);
      currentTiltX.current = lerp(currentTiltX.current, targetTiltX.current, lerpSpeed);
      currentTiltY.current = lerp(currentTiltY.current, targetTiltY.current, lerpSpeed);

      if (orbitRef.current) {
        // Combine the tilt and the rotation onto the wheel itself.
        // The Y-axis takes both the mouse tilt and the scroll rotation.
        orbitRef.current.style.transform = `rotateX(${currentTiltX.current}deg) rotateY(${currentTiltY.current + currentRotation.current}deg)`;
      }

      const rawIndex = Math.round(-currentRotation.current / anglePerSlide);
      const normalizedIndex = ((rawIndex % totalSlides) + totalSlides) % totalSlides;

      if (normalizedIndex !== activeIndexRef.current) {
        activeIndexRef.current = normalizedIndex;
        
        if (previewImgRef.current) {
          previewImgRef.current.src = images[normalizedIndex];
        }
        if (titleRef.current) {
          titleRef.current.textContent = titles[normalizedIndex];
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [anglePerSlide]);

//   useEffect(() => {
//   const handleGlobalMouseMove = (e: MouseEvent) => {
//     // Measure relative to the entire browser viewport
//     const x = e.clientX;
//     const y = e.clientY;
    
//     const percentX = (x - window.innerWidth / 2) / window.innerWidth;
//     const percentY = (y - window.innerHeight / 2) / window.innerHeight;
    
//     const maxTilt = 15; // Degrees
    
//     targetTiltY.current = percentX * maxTilt;
//     targetTiltX.current = -(percentY * maxTilt);
//   };

//   // Attach to window globally
//   window.addEventListener('mousemove', handleGlobalMouseMove);

//   return () => {
//     window.removeEventListener('mousemove', handleGlobalMouseMove);
//   };
// }, []);

// remove onMouseMove and onMouseLeave from the JSX <section> tag.


  const handleWheel = (e: React.WheelEvent) => {
    // Prefer horizontal scroll (deltaX) for horizontal side-to-side scrolling.
    // const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY;
    const delta = e.deltaX;
    targetRotation.current += delta * 0.1;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const percentX = (x - (rect.width / 2)) / rect.width;
    const percentY = (y - (rect.height / 2)) / rect.height;
    
    const maxTilt = 30; 
    
    targetTiltY.current = percentX * maxTilt;
    targetTiltX.current = -(percentY * maxTilt);
  };

  const handleMouseLeave = () => {
    targetTiltX.current = 0;
    targetTiltY.current = 0;
  };

  return (
    <section 
      ref={sliderRef}
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen bg-mauve-900/50 overflow-hidden flex flex-col items-center justify-center perspective-distant"
    >
      {/* Main 3D Context - No transforms applied here anymore */}
      <div className="relative w-full h-full flex items-center justify-center transform-3d">
        
        {/* Orbit Ring - Tilts and rotates in 3D space */}
        <div ref={orbitRef} className="absolute flex items-center justify-center transform-3d">
          {images.map((src, i) => (
            <div 
              key={i}
              className="absolute w-20 h-20 overflow-hidden border border-white/10"
              style={{
                transform: `rotateY(${i * anglePerSlide}deg) translateZ(${orbitRadius}px)`
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Slide ${i}`} className="w-full h-full object-cover opacity-80" />
            </div>
          ))}
        </div>

        {/* Center Preview - completely static, just sits at Z=0 */}
        <div 
          className="absolute w-80 h-96 overflow-hidden ring-1 ring-white/20"
          style={{ transform: 'translateZ(0px)' }} // Ensures it remains part of the 3D sorting context
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            ref={previewImgRef} 
            src={images[0]} 
            alt="Preview" 
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

      </div>

      <h2 
        ref={titleRef} 
        className="absolute bottom-16 text-2xl font-bold tracking-[0.2em] text-black pointer-events-none"
      >
        {titles[0]}
      </h2>
    </section>
  );
}