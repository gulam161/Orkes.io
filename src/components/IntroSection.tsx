import React from "react";
import Buttons from "./Buttons";

type ButtonDataType = {
  [Key: string]: string;
};

type IntroSectionProps = {
  title: string;
  subtitle?: string;
  buttonData?: ButtonDataType[];
  imageSrc?: string;
  imageAlt?: string;
  sectionClass?: string;
};

const IntroSection: React.FC<IntroSectionProps> = ({
  title,
  subtitle,
  buttonData = [],
  imageSrc,
  imageAlt,
  sectionClass,
}) => {
  return (
    <section className={`text-center py-8 ${sectionClass}`}>
      <h1 className="text-4xl font-medium text-black/90">{title}</h1>
      <p className="text-xl font-light my-3 mx-auto tracking-wide text-gray-800">
        {subtitle}
      </p>
      {(buttonData?.length || imageSrc) && (
        <div>
          {buttonData?.length > 0 && (
            <div className="flex justify-center">
              <Buttons ButtonData={buttonData} />
            </div>
          )}
          {imageSrc && (
            <img src={imageSrc} alt={imageAlt} className="mt-5 inline-block" />
          )}
        </div>
      )}
    </section>
  );
};
export default IntroSection;
