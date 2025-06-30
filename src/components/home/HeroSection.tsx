"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import im from "../../assets/Vector (4).png";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const sectionRef = useRef(null);
  const awwwardsRef = useRef(null);
  const cssWinnerRef = useRef(null);
  const facebookRef = useRef(null);
  const thoughtworksRef = useRef(null);
  const autodeskRef = useRef(null);
  const cssDesignAwardsRef = useRef(null);

  useLayoutEffect(() => {
    const bubbles = [
      awwwardsRef.current,
      cssWinnerRef.current,
      facebookRef.current,
      thoughtworksRef.current,
      autodeskRef.current,
      cssDesignAwardsRef.current,
    ];

    if (sectionRef.current && bubbles.every((bubble) => bubble)) {
      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play reverse play reverse",
          // markers: true,
        },
      });

      tl.from(bubbles, {
        opacity: 0,
        scale: 0.5,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[900px] flex flex-col items-center justify-start py-20 px-4 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={im} alt="About Background" fill className="object-cover" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center justify-start h-full">
        {/* About Button */}
        <div className="md:absolute md:-top-2 md:right-4 pb-8 md:pb-0 pt-4 md:pt-0">
          <a
            href="#"
            className="flex items-center space-x-2 border border-black rounded-full py-2 px-4 text-black text-sm font-medium hover:bg-black hover:text-white transition-colors mx-auto md:mx-0"
          >
            <svg
              className="w-4 h-4 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <span>About</span>
          </a>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-black leading-tight mt-10 md:mt-10">
          I&apos;ve been{" "}
          <span className="bg-black text-white px-2 py-1 rounded-lg inline-block">
            Developing
          </span>
          <br />
          Websites since{" "}
          <span className="bg-black text-white px-2 py-1 rounded-lg inline-block">
            2013
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-2">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of
          action.
        </p>

        {/* Previously Worked On Section - Updated Layout for Mobile */}
        <div className="mt-8 md:mt-8 w-full flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-16 lg:space-x-24 flex-grow">
          {/* Left Div: PREVIOUSLY WORKED ON */}
          <div className="w-full md:w-auto text-center md:text-left">
            <div className="text-black font-semibold text-xl md:text-2xl whitespace-nowrap">
              PREVIOUSLY
              <br />
              WORKED ON
            </div>
          </div>

          {/* Right Div: Scattered Bubbles - Optimized for Mobile */}
          <div className="relative w-full md:w-[600px] lg:w-[700px] h-48 md:h-56 xl:h-64">
            {/* awwwards. (Top center) */}
            <div
              ref={awwwardsRef}
              className="absolute top-[5%] left-1/2 -translate-x-1/2 w-36 md:w-48 bg-black text-white py-2 px-4 rounded-full text-base md:text-xl font-medium shadow-lg whitespace-nowrap"
            >
              awwwards.
            </div>
            {/* CSSWINNER (Top-leftish) */}
            <div
              ref={cssWinnerRef}
              className="absolute top-[25%] left-[5%] w-28 md:w-36 border border-black text-black py-1 px-3 rounded-full text-sm md:text-lg font-medium shadow-md whitespace-nowrap"
              style={{ transform: "rotate(-8deg)" }}
            >
              CSSWINNER
            </div>
            {/* facebook (Top-rightish) */}
            <div
              ref={facebookRef}
              className="absolute top-[20%] right-[5%] w-28 md:w-36 border border-black text-black py-1 px-3 rounded-full text-sm md:text-lg font-medium shadow-md whitespace-nowrap"
              style={{ transform: "rotate(12deg)" }}
            >
              facebook
            </div>
            {/* /thoughtworks (Bottom-leftish) */}
            <div
              ref={thoughtworksRef}
              className="absolute bottom-[10%] left-[10%] w-36 md:w-48 border border-black text-black py-2 px-4 rounded-full text-base md:text-lg font-medium shadow-md whitespace-nowrap"
              style={{ transform: "rotate(3deg)" }}
            >
              /thoughtworks
            </div>
            {/* AUTODESK (Bottom-rightish) */}
            <div
              ref={autodeskRef}
              className="absolute bottom-[5%] right-[10%] w-32 md:w-40 border border-black text-black py-1 px-3 rounded-full text-sm md:text-lg font-medium shadow-md whitespace-nowrap"
              style={{ transform: "rotate(-18deg)" }}
            >
              AUTODESK
            </div>
            {/* CSSDesignAwards (Middle-right) */}
            <div
              ref={cssDesignAwardsRef}
              className="absolute top-1/2 right-[-10px] md:right-[-40px] -translate-y-1/2 w-32 md:w-40 border border-black text-black py-1 px-3 rounded-full text-sm md:text-lg font-medium shadow-md whitespace-nowrap"
              style={{ transform: "rotate(25deg)" }}
            >
              CSSDesignAwards
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
