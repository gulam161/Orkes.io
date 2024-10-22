import React from "react";
import Buttons from "../Buttons";
import ConductorPlatform from "../HomePage/ConductorPlatform";
import { Link } from "react-router-dom";

type HeroSectionProps = {
  // [key: string]: string;
  heading: string;
  subheading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  videoLink?: string;
  headingClass?: string;
  AdditionalHeading?: string;
  ConductorPlatform?: JSX.Element;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  subheading,
  description,
  imageSrc,
  imageAlt,
  headingClass,
  videoLink,
  AdditionalHeading,
  ConductorPlatform,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 mt-8 max-lg:grid-cols-1">
        <div className="flex flex-col justify-center gap-1.5 text-gray-700">
          <h5 className={`${headingClass} uppercase text-sm`}>{heading}</h5>
          <h1 className="text-4xl font-medium">{subheading}</h1>
          <p
            className="text-xl font-light tracking-wide leading-8 mt-3"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="mt-4">
            <Buttons text="See Docs" to="" />
          </div>
        </div>

        {videoLink ? (
          <Link
            to={videoLink}
            className="relative flex justify-center items-center"
          >
            <img src={imageSrc} alt={imageAlt} className="m-auto" />
            <img
              src="/Images/Play_Button.svg"
              width="70"
              alt="Play Button"
              className="absolute rounded-full transition-all duration-100 hover:shadow-xl hover:w-[16%]"
            />
          </Link>
        ) : (
          <img src={imageSrc} alt={imageAlt} className="m-auto" />
        )}
      </div>
      <div>
        <h1 className="text-[28px] font-light text-center mt-12 text-gray-600">
          {AdditionalHeading}
        </h1>
        {/* <ConductorPlatform /> */}
        {ConductorPlatform}
      </div>
    </>
  );
};
export default HeroSection;
