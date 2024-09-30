import React from "react";
import Buttons from "../Buttons";

type OrkesStarterBannerProps = {
  [key: string]: string;
};

const OrkesStarterBanner: React.FC<OrkesStarterBannerProps> = ({
  bgImage,
  heading,
  divClass,
  headingClass,
}) => {
  return (
    <section className="static pt-11 pb-28">
      <div
        className={`relative flex justify-center items-center flex-col ${divClass} py-16 text-center bg-center bg-cover rounded-2xl overflow-hidden`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className={`leading-10 ${headingClass}`}>{heading}</h1>
        <Buttons />
      </div>
    </section>
  );
};
export default OrkesStarterBanner;
