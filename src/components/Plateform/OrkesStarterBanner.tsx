import React from "react";
import Buttons from "../Buttons";

type OrkesStarterBannerProps = {
  [key: string]: string;
};

const ButtonData = [
  {
    to: "/sign-up",
    className: "border-[#ed5668]",
    lable_text: "Start Free Trial",
  },
  {
    to: "/talk-to-an-expert",
    className: "px-2 text-white border-[#ed5668] bg-[#ed5668]",
    lable_text: "Contact Sales",
  },
];

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
        <Buttons ButtonData={ButtonData} />
      </div>
    </section>
  );
};
export default OrkesStarterBanner;
