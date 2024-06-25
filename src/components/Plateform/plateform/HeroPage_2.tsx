import React from "react";
import Platform_Page_Hero_v2 from "../../../assets/Platform-Page_Hero_v2.png";
import { Link } from "react-router-dom";

type HeroPage_2Props = {};

const HeroPage_2: React.FC<HeroPage_2Props> = () => {
  return (
    <div className="grid grid-cols-2 justify-between items-center py-9">
      <div className="flex flex-col gap-y-4 tracking-wide">
        <h1 className="font-medium text-3xl pt-2 text-gray-700">
          The modern workflow engine for building, managing, and observing
          complex applications and microservices
        </h1>
        <p className="text-xl font-light text-gray-600">
          Orkes Conductor allows engineering and product teams to build and
          scale distributed applications with high levels of observability,
          security, and durability.
        </p>
        <div className="flex gap-4 capitalize mt-5 text-sm">
          <Link to="" className="button border-[#ed5668] text-gray-600">
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
      <img src={Platform_Page_Hero_v2} alt="Platform_Page_Hero_v2" />
    </div>
  );
};
export default HeroPage_2;
