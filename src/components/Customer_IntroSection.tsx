import React from "react";
import Buttons from "./Buttons";

type ButtonDataType = {
  [Key: string]: string;
};

type Customer_IntroSectionProps = {
  title: string;
  subtitle: string;
  buttonData: ButtonDataType[];
  imageSrc?: string;
  imageAlt?: string;
  sectionClass?: string;
};

const Customer_IntroSection: React.FC<Customer_IntroSectionProps> = ({
  title,
  subtitle,
  buttonData,
  imageSrc,
  imageAlt,
  sectionClass,
}) => {
  return (
    <section className={`text-center py-8 ${sectionClass}`}>
      <h1 className="text-4xl font-medium text-black/90">{title}</h1>
      <p className="text-xl font-light my-3 mx-auto tracking-wide">
        {subtitle}
      </p>
      <div className="flex justify-center">
        <Buttons ButtonData={buttonData} />
      </div>
      <img src={imageSrc} alt={imageAlt} className="mt-5 inline-block" />
    </section>
  );
};
export default Customer_IntroSection;
