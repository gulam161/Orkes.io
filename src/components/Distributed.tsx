import React, { useState } from "react";
import { Link } from "react-router-dom";
import Before_Diagram from "../assets/Before_Diagram.png";
import After_Diagram from "../assets/After_Diagram.png";

// const data = [
//   {
//     label: "10X YOUR VELOCITY",
//     heading: "Supercharge coding, scaling and observing distributed systems",
//     discription:
//       "Orkes Conductor is the fastest way to build and modernize all your applications. Model your business logic as intuitively as you would in a whiteboard, code the components in the language and framework of your choice, run them at scale with no additional setups and observe across your distributed landscape - with enterprise grade security and manageability baked-in.",
//     link: "",
//     text: "Get Started",
//     button1: "Before",
//     button2: "After",
//     image1: "Before_Diagram",
//     image2: "After_Diagram",
//   },
// ];

const Distributed: React.FC = () => {
  const [active, setActive] = useState(true);

  return (
    <section className="grid grid-cols-2 border border-gray-200 text-gray-700 rounded-xl shadow-md my-32">
      <div className="p-8 bg-gray-100 rounded-l-xl shadow-lg">
        <h4 className="text-[#189ed3] text-base mb-1">10X YOUR VELOCITY</h4>
        <h1 className="text-4xl font-medium mb-4">
          Supercharge coding, scaling and observing distributed systems
        </h1>
        <p className="font-light tracking-wide mb-10">
          Orkes Conductor is the fastest way to build and modernize all your
          applications. Model your business logic as intuitively as you would in
          a whiteboard, code the components in the language and framework of
          your choice, run them at scale with no additional setups and observe
          across your distributed landscape - with enterprise grade security and
          manageability baked-in.
        </p>
        <Link
          to=""
          className="button px-8 text-white border-[#ed5668] bg-[#ed5668]"
        >
          Get Started
        </Link>
      </div>
      <div className="p-8">
        <div className="border w-4/5 mx-auto grid grid-cols-2 rounded-full">
          {["Before", "After"].map((label, idx) => (
            <button
              key={label}
              className={`py-2 ${
                active === (idx === 0)
                  ? "bg-purple-900 text-white"
                  : "bg-white text-black"
              } rounded-${idx === 0 ? "l" : "r"}-full`}
              onClick={() => setActive(idx === 0)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <img
            src={active ? Before_Diagram : After_Diagram}
            alt={`${active ? "Before" : "After"}_Diagram`}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Distributed;
