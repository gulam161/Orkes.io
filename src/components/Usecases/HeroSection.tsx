import React from "react";
import Buttons from "../Buttons";

type HeroSectionProps = {
  [Key: string]: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  subheading,
  description,
  imageSrc,
  imageAlt,
  headingClass,
}) => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-8">
      <div className="flex flex-col gap-1.5 text-gray-700">
        <h5 className={`${headingClass} uppercase text-sm`}>{heading}</h5>
        <h1 className="text-4xl font-medium">{subheading}</h1>
        <p
          className="text-xl font-light tracking-wide leading-8 mt-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="mt-4">
          <Buttons text="See Docs" link="" />
        </div>
      </div>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};
export default HeroSection;
