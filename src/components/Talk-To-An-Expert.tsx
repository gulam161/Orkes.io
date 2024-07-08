import React from "react";
import Header from "./Navigation/Header";
import { IoIosArrowDropright } from "react-icons/io";
import foxtel_logo from "../assets/Logo/foxtel-logo.svg";
import normalyze from "../assets/Logo/normalyze_Black.svg";
import UWM_Logo from "../assets/Logo/UWM_Logo.png";
import Collective_Logo from "../assets/Logo/collective-logo.png";
import Footer from "./Footer";

const logos = [
  { src: foxtel_logo, alt: "Foxtel Logo", width: 90 },
  { src: normalyze, alt: "Normalyze Logo", width: 120 },
  { src: UWM_Logo, alt: "UWM Logo", width: 90 },
  { src: Collective_Logo, alt: "Collective Logo", width: 120 },
];

type Talk_To_An_ExpertProps = {};

const Talk_To_An_Expert: React.FC<Talk_To_An_ExpertProps> = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto max-xl:w-11/12">
        <div className="grid grid-cols-2 gap-8 justify-between items-center mt-16 mb-32 max-lg:grid-cols-1 max-lg:mt-10 max-lg:mb-20">
          <div className="flex flex-col items-start justify-center gap-4  text-gray-600 max-lg:w-full">
            <p className="text-3xl font-normal text-gray-700 tracking-wide">
              Orkes helps teams solve complex workflow orchestration challenges.
            </p>
            <div className="flex flex-col gap-6 mt-4">
              {[
                "Develop durable, long running workflows and applications",
                "Modernize existing applications and infrastructure",
                "Accelerate development of mission critical applications",
              ].map((text, index) => (
                <p key={index} className="flex gap-3 items-center font-light">
                  <IoIosArrowDropright size={22} className="text-emerald-400" />{" "}
                  {text}
                </p>
              ))}
            </div>
            <p className="mt-7 max-lg:text-lg">
              Join the companies around the world building with Orkes
            </p>
            <div className="w-full flex gap-7 items-center max-xl:gap-4 max-lg:justify-between max-lg:pr-12 max-sm:flex-wrap">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                />
              ))}
            </div>
          </div>
          <form className="expert_shaddow w-full h-full mx-auto border py-6 px-10 rounded-xl">
            <h1 className="text-center text-3xl font-medium text-gray-800 mb-8">
              Talk to an expert
            </h1>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-600"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 text-gray-900 font-light rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Company"
                className="block mb-2 font-medium text-gray-600"
              >
                Company*
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                required
              />
            </div>

            <button
              type="submit"
              className="w-40 text-white font-medium text-sm text-center px-5 py-2.5 my-4 rounded-full bg-rose-500 hover:ml-[1px] hover:grid_shaddow focus:ring-4 focus:outline-none focus:ring-red-300"
            >
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Talk_To_An_Expert;
