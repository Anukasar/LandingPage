'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LandingSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power4.out',
    });

    const words = textRef.current.querySelectorAll('span');

    gsap.from(words, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, []);

  const paragraph =
    'This paragraph will animate each word as it scrolls into view.';

  const words = paragraph.split(' ');

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center items-center min-h-screen px-6 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Welcome to Our Luxury Page
      </h1>
      <p
        ref={textRef}
        className="max-w-xl text-gray-600 text-lg flex flex-wrap justify-center"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block mr-2 opacity-0">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}
