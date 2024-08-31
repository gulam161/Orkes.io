import React from "react";
import Durable_Execution from "../../assets/Durable_Execution.svg";
import Modernize_Applications from "../../assets/Modernize_Applications.svg";
import Accelerate_Development from "../../assets/Accelerate_Development.svg";

const data = [
  {
    id: 1,
    img_Src: Durable_Execution,
    alt: "Durable_Execution",
    heading: "Durable Execution",
    label:
      "Build durable, long running workflows without the complexities of managing system failures, dependencies, or scalability.",
  },
  {
    id: 2,
    img_Src: Modernize_Applications,
    alt: "Modernize_Applications",
    heading: "Modernize Applications",
    label:
      "Upgrade existing applications and infrastructure with microservices, AI agents, and API orchestration all while lowering total cost of ownership.",
  },
  {
    id: 3,
    img_Src: Accelerate_Development,
    alt: "Accelerate_Development",
    heading: "Accelerate Development",
    label:
      "Ship code and bring new applications to market faster without compromising security, resiliency, and observability.",
  },
];

type Orchestration_PlatformProps = {};

const Orchestration_Platform: React.FC<Orchestration_PlatformProps> = () => {
  return (
    <section className="p-10 my-5 text-center text-gray-700 bg-stone-100/80 border border-gray-300 rounded-xl shadow-lg max-sm:px-8 ">
      <h1 className="text-4xl font-semibold">
        The Modern Workflow Orchestration Platform
      </h1>
      <p className="text-xl font-light px-20 mt-3 mb-10 max-lg:px-8 max-md:px-4">
        Seamlessly build and run complex workflows, applications, and
        integrations without the hassle of building infrastructure - all on
        Orkes
      </p>

      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
        {data.map(({ id, img_Src, alt, heading, label }) => {
          return (
            <div
              key={id}
              className="p-6 text-start bg-white rounded-xl shadow-md "
            >
              <img src={img_Src} alt={alt} width={70} />
              <h2 className="text-lg font-semibold my-2">{heading}</h2>
              <p className="font-light">{label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Orchestration_Platform;
