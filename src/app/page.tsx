"use client";

import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import SkillsSection from "@/components/home/Skills";

import WorkProcess from "@/components/home/WorkProcess";
import HeroSection from "../components/home/HeroSection";

export default function Home() {
  return (
    <div>
      <Banner />

      <SkillsSection />
      <HeroSection></HeroSection>
      <WorkProcess />
      <Contact />
    </div>
  );
}
