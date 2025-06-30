"use client";
import { FC, useRef } from "react";
import gsap from "gsap";

export const PreviouslyWorkedOn: FC = () => {
  const badgeRefs = useRef<HTMLDivElement[]>([]);

  const handleHover = (index: number, enter: boolean) => {
    gsap.to(badgeRefs.current[index], {
      y: enter ? -10 : 0,
      rotate: enter ? 5 : 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const badgeData = [
    { text: "awwwards.", className: "bg-black text-white" },
    { text: "CSS WINNER", className: "border border-black text-black" },
    {
      text: "/thoughtworks",
      className: "border border-black text-black rotate-[-8deg]",
    },
    { text: "facebook", className: "border border-black text-black" },
    {
      text: "AUTODESK",
      className: "border border-black text-black rotate-[10deg]",
    },
    {
      text: "CSSDesignAwards",
      className: "border border-black text-black rotate-[15deg]",
    },
  ];

  const positions = [
    { left: "left-100 top-8" },
    { left: "left-80 top-28" },
    { left: "left-120 top-36" },
    { left: "left-[470px] top-20" },
    { left: "left-[630px] top-32" },
    { left: "left-[640px] top-10" },
  ];

  return (
    <section className="relative w-full h-[300px] overflow-hidden flex md:flex-row flex-col gap-10 justify-between items-center px-10">
      {/* Heading */}
      <div>
        <h2 className="text-black text-lg md:text-xl font-semibold absolute top-8 left-6 leading-tight">
          PREVIOUSLY
          <br />
          WORKED ON
        </h2>
      </div>

      {/* Badges */}
      <div>
        {badgeData.map((badge, i) => (
          <div
            key={i}
            className={`absolute ${positions[i].left} cursor-pointer`}
            onMouseEnter={() => handleHover(i, true)}
            onMouseLeave={() => handleHover(i, false)}
          >
            <div
              ref={(el) => {
                badgeRefs.current[i] = el!;
              }}
              className={`${badge.className} rounded-full px-6 py-3 text-sm font-medium shadow-md`}
            >
              {badge.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
