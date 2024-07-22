import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

type Standard_SectionProps = {};

const data = [
  { count: 7, color: "text-blue-700", label: "Orkes Developers" },
  {
    count: 12,
    color: "text-blue-400",
    label: "Companies using Conductor",
  },
  { count: 13, color: "text-red-600", label: "Github Stars" },
];

const Standard_Section: React.FC<Standard_SectionProps> = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="grid grid-cols-3 gap-8 py-10 px-28 max-xl:px-28 max-lg:grid-cols-1 max-lg:gap-20 max-sm:px-12">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-center max-lg:w-2/3 max-lg:m-auto max-md:w-full"
        >
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1
              className={`text-6xl font-medium ${item.color} pb-6 border-b-2 border-gray-100 `}
            >
              {counterOn && (
                <CountUp
                  start={0}
                  end={item.count}
                  duration={1}
                  separator=" "
                  decimals={index === 1 ? 2 : 3}
                  decimal=","
                  suffix=" + "
                  delay={0}
                />
              )}
            </h1>
            <p className="tracking-wide font-light pt-4">{item.label}</p>
          </ScrollTrigger>
        </div>
      ))}
    </section>
  );
};

export default Standard_Section;
