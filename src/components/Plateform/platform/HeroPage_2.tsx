import React from "react";
import Platform_Page_Hero_v2 from "../../../assets/Platform-Page_Hero_v2.png";
import Buttons from "../../Buttons";

type HeroPage_2Props = {};

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

const HeroPage_2: React.FC<HeroPage_2Props> = () => {
  return (
    <div className="grid grid-cols-2 justify-between items-center py-9 max-lg:grid-cols-1 max-lg:gap-12 ">
      <div className="flex flex-col gap-y-4 tracking-wide text-gray-600">
        <h1 className="font-medium text-3xl pt-2 text-gray-700">
          The modern workflow engine for building, managing, and observing
          complex applications and microservices
        </h1>
        <p className="text-xl font-light">
          Orkes Conductor allows engineering and product teams to build and
          scale distributed applications with high levels of observability,
          security, and durability.
        </p>
        <Buttons ButtonData={ButtonData} />
      </div>
      <img
        src={Platform_Page_Hero_v2}
        alt="Platform_Page_Hero_v2"
        className="max-lg:w-3/4 max-lg:m-auto max-sm:w-full"
      />
    </div>
  );
};
export default HeroPage_2;
