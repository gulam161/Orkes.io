import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/hero-banner.png";
import Play_Button from "../../assets/Play_Button.svg";
import Conductor_Logo from "../../assets/Logo/Conductor Logo.png";
import ConductorPlatform from "./ConductorPlatform";

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <>
      <div className="grid grid-cols-2 justify-between items-center py-8 max-lg:grid-cols-1">
        <div className="flex flex-col gap-y-4 max-lg:px-16 max-sm:px-10">
          <h1 className="font-medium text-4xl pt-2 text-gray-700">
            Developers Get More Done with Orkes
          </h1>
          <p className="text-xl font-light text-gray-600 tracking-wide">
            Transform the way you develop, connect, and deploy applications,
            microservices, AI agents, and more with workflow orchestration.
          </p>
          <div className="flex gap-4 capitalize mt-5 text-sm">
            <Link
              to="/sign-up"
              className="button border-[#ed5668] text-gray-600"
            >
              Start Free Trail
            </Link>
            <Link
              to=""
              className="button px-2 text-white border-[#ed5668] bg-[#ed5668]"
            >
              Contact Sales
            </Link>
          </div>
        </div>
        <div>
          <Link
            to="https://www.youtube.com/watch?v=VV036Ljs2ns"
            className="relative flex justify-center items-center text-[#f8f3f3] underline"
          >
            <img src={Banner} alt="hero-banner" />
            <img
              src={Play_Button}
              width="70"
              alt="Play_Button icon"
              className="absolute rounded-full transition-all duration-100 hover:shadow-xl hover:w-[16%]"
            />
          </Link>
        </div>
      </div>
      {/* Conductor Logo platform */}
      <div className="flex_between_center">
        {/* bg-custom-gradient */}
        <div className="flex-1 h-[1px] custom"></div>
        <div className="flex_between_center gap-1 mx-2 font-light text-gray-600">
          <span> The enterprise grade </span>
          <img src={Conductor_Logo} alt="Conductor_Logo" width={122} />
          <span> platform </span>
        </div>
        <div className="flex-1 h-[1px] custom_2"></div>
      </div>
      <ConductorPlatform />
    </>
  );
};
export default HeroSection;
