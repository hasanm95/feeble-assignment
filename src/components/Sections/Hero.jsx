import React from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="pt-[100px] md:pt-[140px] lg:pt-[180px] pb-20 text-center relative min-h-screen flex flex-col items-center bg-primary overflow-hidden before:content-[''] before:absolute before:-top-[100px] before:-left-[100px] before:w-[500px] before:h-[500px] before:bg-[rgba(255,255,255,0.7)] before:blur-[120px] before:rounded-full before:pointer-events-none before:z-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.9),rgba(255,255,255,0.9))]">
      <HeroBackground />
      <HeroContent />

      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-muted text-sm animate-bounce-custom">
        <span>Scroll to learn more</span>
        <img
          src="/assets/arrow-down-04.svg"
          alt="arrow down"
          className="w-5"
        />
      </div>
    </section>
  );
};

export default Hero;
