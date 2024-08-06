import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const buttonLabels = [
  "Define and Execute",
  "Run and Optimize",
  "Observe and Scale",
  "Collaborate and Govern",
];

type ConductorWorksProps = {};

const ConductorWorks: React.FC<ConductorWorksProps> = () => {
  const [leftSize, setLeftSize] = useState(26);
  const [rightSize, setRightSize] = useState(26);

  return (
    <section className="bg-stone-100/90 text-center py-16">
      <h1 className="text-3xl font-medium text-black/90 ">
        How Orkes Conductor Works
      </h1>
      <p className="text-xl font-light w-8/12 my-3 mx-auto">
        Orkes Conductor can be categorized into four distinct capabilities that
        make it the ultimate workflow engine for all your distributed business
        processes.
      </p>
      <div className="w-11/12 bg-white mx-auto p-6 mt-10 rounded-xl border grid_shaddow">
        <div className="flex_between_center gap-8 mt-5">
          <SlArrowLeft
            size={leftSize}
            onMouseEnter={() => setLeftSize(30)}
            onMouseLeave={() => setLeftSize(26)}
          />
          <div className="flex_between_center gap-12 relative">
            {buttonLabels.map((label) => (
              <button
                key={label}
                className="w-56 text-base font-light text-center py-[10px] rounded-full border border-gray-300 hover:grid_shaddow"
              >
                {label}
              </button>
            ))}
          </div>
          <SlArrowRight
            size={rightSize}
            onMouseEnter={() => setRightSize(30)}
            onMouseLeave={() => setRightSize(26)}
          />
        </div>
        <p className="px-20 text-xl my-6 text-gray-800">
          Visually define workflows, write code in any language with supported
          SDKs, plug into existing APIs and easily expose business functions as
          a worker process.
        </p>

        <div className="relative w-full border" data-carousel="static"></div>
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="https://guides.lib.umich.edu/c.php?g=282942&p=1888163"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-2.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-3.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-4.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-5.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConductorWorks;
