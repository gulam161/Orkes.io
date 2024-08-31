import React from "react";
import image from "../../../../public/Build-with-orkes-CTA.jpg";
import Buttons from "../../Buttons";

type OrkesStarterBannerProps = {};

const OrkesStarterBanner: React.FC<OrkesStarterBannerProps> = () => {
  return (
    <section className="static pt-11 py-28">
      <div
        className="relative flex justify-center items-center flex-col py-16 px-10 border border-gray-100 text-white text-center bg-center bg-cover rounded-2xl overflow-hidden shadow-md"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="text-4xl max-md:text-3xl font-medium leading-10 mb-1">
          Start building with orkes today
        </h1>
        <Buttons />
      </div>
    </section>
  );
};
export default OrkesStarterBanner;
