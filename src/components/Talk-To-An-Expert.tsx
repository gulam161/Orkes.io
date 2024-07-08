import React from "react";
import Header from "./Navigation/Header";
import { IoIosArrowDropright } from "react-icons/io";
import foxtel_logo from "../assets/Logo/foxtel-logo.svg";
import normalyze from "../assets/Logo/normalyze_Black.svg";
import UWM_Logo from "../assets/Logo/UWM_Logo.png";
import Collective_Logo from "../assets/Logo/collective-logo.png";

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
      <div className="w-4/5 mx-auto grid grid-cols-2 justify-between items-center py-12 max-lg:grid-cols-1">
        <div className="flex flex-col items-start justify-center gap-4 pt-4 text-gray-600 max-lg:hidden">
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
          <p className="mt-7">
            Join the companies around the world building with Orkes
          </p>
          <div className="w-full flex gap-7 items-center">
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
        {/* <div className=""> */}
        <form className="w-[512px] max-w-lg mx-auto border border-red-500 p-10 rounded-xl">
          <h1 className="text-center text-2xl font-semibold text-gray-700">
            Talk to an expert
          </h1>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        {/* </div> */}
      </div>
    </>
  );
};
export default Talk_To_An_Expert;
