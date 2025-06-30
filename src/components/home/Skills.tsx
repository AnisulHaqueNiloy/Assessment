"use client";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gsap from "gsap";

import img from "../../assets/cardIcon.png";
import left from "../../assets/Vector 1.png";
import right from "../../assets/Vector 2.png";
import i from '../../assets/div.png'; // Assuming this is for the "Why Choose me" icon

export default function Skills() {
  const skills = [
    {
      title: "HTML & CSS",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      title: "Javascript",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      title: "Webflow",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      title: "React",
      description:
        "This is an extra skill to demonstrate looping with more than 3 cards.",
    },
    {
      title: "Node.js",
      description:
        "Another skill to show the carousel in action with more items.",
    },
    {
      title: "React Native", // Changed to make it distinct
      description:
        "This is an extra skill to demonstrate looping with more than 3 cards.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  // State to manage how many cards are visible based on screen size
  const [cardsPerView, setCardsPerView] = useState(3); // Default to 3 for larger screens

  const totalSkills = skills.length;
  // Calculate the maximum index that can be the first visible card
  const maxPossibleIndex = Math.max(0, totalSkills - cardsPerView);

  const slideTo = (index: number) => {
    if (!containerRef.current) return;

    const cardElement = containerRef.current.querySelector(".skill-card");
    if (!cardElement) return; // Ensure card element exists

    const cardWidth = cardElement.clientWidth;
    const gap = 32; // This is your gap-8, so 32px

    // Ensure the index stays within valid bounds for sliding
    const effectiveIndex = Math.min(Math.max(0, index), maxPossibleIndex);

    const distance = effectiveIndex * (cardWidth + gap);

    gsap.to(containerRef.current, {
      x: -distance,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > maxPossibleIndex) {
        newIndex = 0; // Loop back to the beginning
      }
      slideTo(newIndex);
      return newIndex;
    });
  };

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = maxPossibleIndex; // Loop back to the end
      }
      slideTo(newIndex);
      return newIndex;
    });
  };

  const onMouseEnter = (index: number) => {
    const card = cardRefs.current[index];
    const icon = iconRefs.current[index];

    if (card) {
      gsap.to(card, {
        scale: 1.05,
        rotation: 5,
        boxShadow: "0 10px 20px rgba(50, 255, 100, 0.5)",
        duration: 0.3,
        ease: "power3.out",
        zIndex: 10,
        transformOrigin: "center center",
      });
    }

    if (icon) {
      gsap.to(icon, {
        rotation: "+=360",
        duration: 1,
        ease: "linear",
        repeat: -1,
      });
    }
  };

  const onMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    const icon = iconRefs.current[index];

    if (card) {
      gsap.to(card, {
        scale: 1,
        rotation: 0,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.3,
        ease: "power3.out",
        zIndex: 1,
        transformOrigin: "center center",
      });
    }

    if (icon) {
      gsap.to(icon, {
        rotation: "+=360",
        duration: 3,
        ease: "linear",
        repeat: -1,
      });

      gsap.to(icon, {
        y: -10,
        duration: 0.6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  };

  // Effect for initial icon animation
  useEffect(() => {
    iconRefs.current.forEach((icon) => {
      if (icon) {
        gsap.to(icon, {
          y: -10,
          duration: 0.6,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    });
  }, []);

  // Effect for responsiveness
  useEffect(() => {
    const handleResize = () => {
      // Set cardsPerView based on screen width
      // You can adjust these breakpoints as needed
      if (window.innerWidth < 768) { // md breakpoint in Tailwind is 768px
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
      // Re-slide to current index to adjust positioning
      slideTo(currentIndex);
    };

    // Set initial cardsPerView on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]); // Re-run effect when currentIndex changes to ensure correct slide position on resize

  return (
    <section className="bg-black text-white dark:bg-black dark:text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-2"> {/* Added gap-2 for spacing */}
          {/* Ensure 'i' is defined and correctly imported */}
          {i && <Image src={i} alt="Decoration Icon" width={32} height={32} />}
          <Button
            variant="outline"
            className="border-white dark:border-white text-white dark:text-white hover:bg-white hover:text-black transition-colors rounded-full px-6 py-2 bg-transparent"
          >
            Why Choose me
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white leading-tight">
              My Extensive
              <br />
              List of Skills
            </h2>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <p className="text-white/80 dark:text-white/80 text-lg text-end leading-relaxed mb-8">
              Building the worlds best marketing Your <br /> trusted partner for
              strategy, design, and dev.
            </p>
            <div className="flex justify-end">
              <div className="border border-gray-500 w-full md:w-2/4 mb-4"></div>
            </div>

            <div className="flex items-center justify-end gap-4">
              {/* Only show buttons if there are more skills than currently visible cards */}
              {totalSkills > cardsPerView && (
                <>
                  <Button
                    onClick={slideRight}
                    variant="outline"
                    size="icon"
                    className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors rounded-full w-12 h-12 bg-transparent"
                  >
                    <Image
                      src={right}
                      alt="Right arrow"
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </Button>
                  <Button
                    onClick={slideLeft}
                    variant="outline"
                    size="icon"
                    className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors rounded-full w-12 h-12 bg-transparent"
                  >
                    <Image
                      src={left}
                      alt="Left arrow"
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            // Dynamic padding: full width on mobile, less on desktop
            className="flex gap-8 transition-transform duration-600 p-16 ease-out"
            style={{
              cursor: "grab",
              // `transform` for GSAP animation
              willChange: "transform",
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => onMouseEnter(index)}
                onMouseLeave={() => onMouseLeave(index)}
                className="skill-card bg-gray-900 rounded-3xl p-8 flex-shrink-0
                           w-full md:w-[calc(100%/3 - 24px)] lg:w-[300px]
                           transition-transform duration-300"
              >
                <div
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="mb-6 w-16 h-16 flex items-center justify-center"
                >
                  <Image src={img} alt="Skill Icon" width={64} height={64} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {skill.title}
                </h3>

                <p className="text-white/70 text-base leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}