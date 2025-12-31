import React from "react";
import Button from "../UI/Button";

const HeroContent = () => {
  return (
    <div className="relative z-10 w-full px-6 md:px-8 mx-auto max-w-container-max">
      <div className="inline-flex items-center gap-2 bg-white text-[#006fe8] py-[2px] px-[7px] rounded-[35px] text-sm md:text-base font-medium mb-6 shadow-[0_1px_4px_rgba(29,32,38,0.05)]">
        <img src="/assets/dots.svg" alt="" className="w-8 h-[17px]" />
        <span>#1 iMessage Automation Tool</span>
      </div>

      <h1 className="text-[2.25rem] md:text-[2.75rem] lg:text-[4rem] leading-[1.2] font-bold mb-6 text-dark text-center">
        <span className="text-primary">iMessage</span> Automation
        <br />
        for Teams and AI <br />
        Workflows.
      </h1>

      <p className="text-sm md:text-[1.125rem] text-dark mb-6 md:mb-12 max-w-[800px] md:max-w-[590px] mx-auto font-normal text-center">
        Coup lets you, your team, or AI workflows send iMessages directly from
        your phone number, running securely on your Mac or Mac Mini.
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center w-full justify-center">
        <Button variant="primary" className="w-full md:w-auto max-w-[320px] md:max-w-none">
          Get Started
        </Button>
        <Button
          variant="secondary"
          className="w-full md:w-[265px] max-w-[320px] md:max-w-none"
          icon={<img src="/assets/apple.svg" alt="Apple logo" className="w-[18px] h-[18px]" />}
        >
          <span className="border-l border-[#6c788f] pl-2">Download the Mac app</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
