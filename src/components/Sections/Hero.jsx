import React from "react";

const Hero = () => {
  return (
    <section className="pt-[100px] md:pt-[140px] lg:pt-[180px] pb-20 text-center relative min-h-screen flex flex-col items-center bg-primary overflow-hidden before:content-[''] before:absolute before:-top-[100px] before:-left-[100px] before:w-[500px] before:h-[500px] before:bg-[rgba(255,255,255,0.7)] before:blur-[120px] before:rounded-full before:pointer-events-none before:z-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.9),rgba(255,255,255,0.9))]">
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

      <div className="relative z-10 w-full px-6 md:px-8 mx-auto max-w-container-max">
        <div className="inline-flex items-center gap-2 bg-white text-[#006fe8] py-[2px] px-[7px] rounded-[35px] text-sm md:text-base font-medium mb-6 shadow-[0_1px_4px_rgba(29,32,38,0.05)]">
          <img src="/assets/dots.svg" alt="" className="w-8 h-[17px]" />
          <span>#1 iMessage Automation Tool</span>
        </div>

        <h1 className="text-[2.25rem] md:text-[2.75rem] lg:text-[4rem] leading-[1.2] font-bold mb-6 text-text-dark">
          <span className="text-primary">iMessage</span> Automation
          <br />
          for Teams and AI <br />
          Workflows.
        </h1>

        <p className="text-sm md:text-[1.125rem] text-black mb-6 md:mb-12 max-w-[800px] md:max-w-[590px] mx-auto font-normal">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center w-full justify-center">
          <button className="w-full md:w-auto max-w-[320px] md:max-w-none py-3 px-7 rounded-full text-[0.95rem] md:text-[1.125rem] font-medium cursor-pointer transition-all duration-250 ease-out bg-primary text-white border border-transparent hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,122,255,0.25)] whitespace-nowrap">
            Get Started
          </button>
          <button className="w-full md:w-[265px] max-w-[320px] md:max-w-none py-3 px-7 rounded-full text-[0.95rem] md:text-[1.125rem] font-medium cursor-pointer transition-all duration-250 ease-out bg-transparent text-text-dark border border-[#6c788f] flex items-center justify-center gap-[0.6rem] hover:bg-[#f9fafb] hover:border-[#d1d5db] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] whitespace-nowrap">
            <img src="/assets/apple.svg" alt="Apple logo" className="w-[18px] h-[18px]" />
            <span className="border-l border-[#6c788f] pl-2">Download the Mac app</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-text-muted text-sm animate-bounce-custom">
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
