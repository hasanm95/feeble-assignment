import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <img
        src="/assets/cloud.svg"
        alt=""
        className="absolute -bottom-[10px] md:bottom-0 lg:-bottom-[50px] left-0 w-full opacity-100 z-[1]"
      />

      {/* Static birds on clouds */}
      <img
        src="/assets/bird-1.svg"
        alt=""
        className="absolute pointer-events-none z-[5] mix-blend-multiply transition-opacity duration-300 opacity-0 animate-bird-fly-in [animation-delay:0.1s] w-10 left-[5%] bottom-[45px] md:left-[10%] md:w-20 md:bottom-[15px] lg:left-[15%] lg:w-[103px]"
      />
      <img
        src="/assets/bird-2.svg"
        alt=""
        className="absolute pointer-events-none z-[5] mix-blend-multiply transition-opacity duration-300 opacity-0 animate-bird-fly-in [animation-delay:0.3s] w-10 left-1/5 bottom-[60px] md:left-1/5 md:w-[60px] lg:left-[30%] lg:w-[87px]"
      />
      <img
        src="/assets/bird-3.svg"
        alt=""
        className="absolute pointer-events-none z-[5] mix-blend-multiply transition-opacity duration-300 opacity-0 animate-bird-fly-in [animation-delay:0.2s] w-10 right-[5%] bottom-[85px] md:right-[10%] md:w-[90px] md:bottom-[85px] lg:right-[25%] lg:w-[128px]"
      />
      <img
        src="/assets/bird-4.svg"
        alt=""
        className="absolute pointer-events-none z-[5] mix-blend-multiply transition-opacity duration-300 opacity-0 animate-bird-fly-in [animation-delay:0.4s] w-10 right-1/5 bottom-[35px] md:right-1/5 md:w-[85px] lg:right-[15%] lg:w-[128px]"
      />

      {/* Small birds around title */}
      <img
        src="/assets/small-bird.svg"
        alt=""
        className="hidden md:block absolute pointer-events-none z-[5] mix-blend-multiply transition-opacity duration-300 opacity-0 animate-bird-fly-in [animation-delay:0.5s] md:w-[42px] md:top-1/5 md:left-[5%] lg:top-[31%] lg:left-[6%]"
      />
      <img
        src="/assets/small-bird.svg"
        alt=""
        className="hidden md:block absolute pointer-events-none z-[5] mix-blend-multiply transition-opacity duration-300 opacity-0 animate-bird-fly-in [animation-delay:0.6s] md:w-[42px] md:top-[21%] md:right-[12%] lg:top-[33%] lg:right-[18%]"
      />
      <img
        src="/assets/small-bird.svg"
        alt=""
        className="hidden md:block absolute pointer-events-none z-[5] mix-blend-multiply transition-opacity duration-300 opacity-0 animate-bird-fly-in [animation-delay:0.7s] md:w-[42px] md:top-[23%] md:left-[15%] lg:top-[33%] lg:left-[17%]"
      />
      <img
        src="/assets/small-bird.svg"
        alt=""
        className="hidden md:block absolute pointer-events-none z-[5] mix-blend-multiply transition-opacity duration-300 opacity-0 animate-bird-fly-in [animation-delay:0.8s] md:w-[42px] md:top-[30%] md:right-[5%] lg:top-1/2 lg:right-[15%]"
      />

      {/* Flying birds crossing the screen */}
      <img
        src="/assets/bird-1.svg"
        alt=""
        className="absolute pointer-events-none z-20 mix-blend-multiply transition-opacity duration-300 opacity-0 animate-fly-across-ltr [animation-delay:2s] w-10 bottom-[180px] md:w-20 lg:w-[100px]"
      />
      <img
        src="/assets/bird-1.svg"
        alt=""
        className="absolute pointer-events-none z-20 mix-blend-multiply transition-opacity duration-300 opacity-0 animate-fly-across-rtl [animation-delay:2s] w-10 bottom-[180px] md:w-20 lg:w-[100px]"
      />
    </div>
  );
};

export default HeroBackground;
