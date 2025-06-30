"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import herobg from "@/assets/hero-bg.png";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Phone } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const desc1Ref = useRef(null);
  const desc2Ref = useRef(null);
  const buttonRef = useRef(null);
  const sidebarRef = useRef(null);
  const socialTextRef = useRef(null);
  const socialLineRef = useRef(null);
  const socialIconsRef = useRef(null);

  useLayoutEffect(() => {
    if (
      !headingRef.current ||
      !desc1Ref.current ||
      !desc2Ref.current ||
      !buttonRef.current ||
      !sidebarRef.current ||
      !socialTextRef.current ||
      !socialLineRef.current ||
      !socialIconsRef.current
    ) {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(
      [socialTextRef.current, socialLineRef.current, socialIconsRef.current],
      {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
      },
      "<"
    );

    const headingSpans = gsap.utils.toArray(headingRef.current.children);

    tl.from(
      headingSpans,
      {
        opacity: 0,
        y: 30,
        rotationX: -90,
        transformOrigin: "bottom center",
        stagger: 0.15,
        duration: 0.8,
      },
      "<0.2"
    );

    tl.from(
      [desc1Ref.current, desc2Ref.current],
      {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.2,
      },
      "<0.3"
    );

    tl.from(
      buttonRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
      },
      "<0.2"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={herobg}
          alt="Gradient Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        ref={sidebarRef}
        className="absolute left-4 bottom-0 transform -translate-y-1/2 z-20 flex flex-row md:flex-col items-center space-y-4"
      >
        <div
          ref={socialTextRef}
          className="transform -rotate-90 font-medium text-black dark:text-white mb-8"
        >
          @williamroy
        </div>
        <div
          ref={socialLineRef}
          className="w-px h-16 bg-black/20 dark:bg-white/20"
        ></div>
        <div ref={socialIconsRef} className="flex flex-col gap-2">
          <a
            href="#"
            className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <Instagram className="w-7 h-5" />
          </a>
          <a
            href="#"
            className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <Github className="w-7 h-7" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="">
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8"
          >
            <span className="text-black dark:text-white">Trusted </span>
            <span className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-2xl inline-block">
              Partner
            </span>
            <span className="text-black dark:text-white"> for</span>
            <br />
            <span className="text-black dark:text-white">Your Website </span>
            <span className="bg-black text-white dark:bg-white dark:text-black rounded-2xl mt-4 px-4 py-2 inline-block">
              Develop.
            </span>
          </h1>

          <div className="mb-8 md:ml-[30%] max-w-2xl">
            <p
              ref={desc1Ref}
              className="text-lg md:text-xl text-black/80 dark:text-white/80 mb-2"
            >
              Building the worlds best marketing websites for over a decade.
            </p>
            <p
              ref={desc2Ref}
              className="text-lg md:text-xl text-black/80 dark:text-white/80"
            >
              Your trusted partner for strategy, design, and dev.
            </p>
          </div>

          <Button
            ref={buttonRef}
            variant="outline"
            size="lg"
            className="md:ml-[30%] border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors rounded-full px-8 py-6 text-lg font-medium bg-transparent"
          >
            <Phone className="w-5 h-5 mr-2" />
            Schedule a Call
          </Button>
        </div>
      </div>

      <div className="absolute top-1/3 right-8 z-20 hidden lg:block"></div>
    </section>
  );
}
