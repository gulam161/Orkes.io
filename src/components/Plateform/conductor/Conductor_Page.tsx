import React, { useState } from "react";
import Header from "../../Navigation/Header";
import Buttons from "../../Buttons";
import ContentCard from "../ContentCard";

type Conductor_PageProps = {};

const EnterpriseCapabilities = [
  {
    id: 0,
    isStatic: true,
    heading:
      "Enterprise level features and capabilities built on the battle-tested foundation of Conductor OSS",
  },
  {
    id: 1,
    imgSrc: "/Images/Five 9s availability.svg",
    alt: "Five_9s_availability",
    heading: "Up to four 9s of availability",
    label:
      "Orkes Conductor has industry standard levels of availability and account based customer support.",
  },
  {
    id: 2,
    imgSrc: "/Images/Security and RBAC.svg",
    alt: "Security and RBAC",
    heading: "Enterprise grade security",
    label:
      "Additional features to ensure the security of sensitive information and the ability to control who within your organization has access.",
  },
  {
    id: 3,
    imgSrc: "/Images/Audit logs.svg",
    alt: "Audit logs",
    heading: "Heightened observability",
    label:
      "Review logs of all workflow executions, metadata changes, and user group changes with change data capture and audit logs.",
  },

  {
    id: 4,
    imgSrc: "/Images/Developer velocity.svg",
    alt: "Developer velocity",
    heading: "Enhanced developer velocity",
    label:
      "Increase the efficiency of your engineering team with an enhanced visual workflow creation UI and out of the box features like AI and LLM chaining, and human tasks.",
  },
  {
    id: 5,
    imgSrc: "/Images/Effortless scaling.svg",
    alt: "Effortless scaling",
    heading: "Effortless scaling",
    label:
      "Scale to the billions of workflows with managed clusters on your preferred cloud provider or on your private cloud.",
  },
];

const buttonLabels = [
  "Operational",
  "Developer Productivity",
  "Scale",
  "Security",
  "AI Orchestration",
  "Human Tasks",
  "Core Orchestration",
  "Event-driven Orchestration",
  "System Tasks",
];

const Conductor_Page: React.FC<Conductor_PageProps> = () => {
  const [activeLink, setActiveLink] = useState(buttonLabels[0]);

  const handleClick = (label: string) => setActiveLink(label);
  return (
    <>
      <Header />
      <section className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
        {/* Hero Section */}
        <div className="w-5/6 m-auto p-10 text-center max-lg:w-full max-md:p-8">
          <div className="flex justify-center items-center gap-5">
            <img
              src="/Orkes Logo Symbol.svg"
              alt="/Orkes Logo Symbol"
              width={45}
              className=""
            />
            <div className="w-[1px] h-auto self-stretch bg-gray-300"></div>
            <img
              src="/Conductor_favicon.svg"
              alt="Conductor_favicon"
              width={45}
              className=""
            />
          </div>
          <h1 className="text-4xl font-medium text-black/90 my-5 max-sm:text-[2rem] max-sm:font-normal">
            Orkes Conductor vs. Conductor OSS
          </h1>
          <p className="text-xl font-light my-6 mx-auto text-gray-600 tracking-wide">
            Compare Orkes Conductor and Conductor OSS accompanied by an in depth
            look into the respective features and capabilities.
          </p>
          <div className="flex justify-center">
            <Buttons />
          </div>
        </div>

        {/* Enterprise level features and capabilities */}
        <ContentCard
          data={EnterpriseCapabilities}
          columns={3}
          headingClassName={"font-light text-start"}
        />

        {/*  */}
        <section className="py-12 my-16">
          {/* max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 max-md:px-0*/}
          <div className="relative flex items-center gap-x-10 gap-y-3 px-4 flex-wrap">
            {buttonLabels.map((label) => (
              <button
                key={label}
                onClick={() => handleClick(label)}
                // max-xl:px-5 max-lg:w-10/12 max-lg:m-auto max-md:w-full
                className={`text-base text-gray-700 font-light text-center py-2.5 outline-none rounded-full transition-all duration-500 ${
                  activeLink === label
                    ? "px-8 bg-[#cdccff] text-purple-950 font-medium"
                    : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};
export default Conductor_Page;
