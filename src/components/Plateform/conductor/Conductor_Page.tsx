import React from "react";
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

const Conductor_Page: React.FC<Conductor_PageProps> = () => {
  return (
    <>
      <Header />
      <section>
        {/* Hero Section */}
        <div className="w-4/6 p-10 m-auto text-center">
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
          <h1 className="text-4xl font-medium text-black/90 my-5">
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
        {/* <section className="w-5/6 mx-auto p-10 my-14 text-center text-gray-800 bg-stone-100/80 border border-gray-300 rounded-xl shadow-lg max-sm:px-6 ">
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-sm:gap-8">
            {EnterpriseCapabilities.map(
              ({ id, isStatic, imgSrc, alt, heading, label }) => {
                return isStatic ? (
                  <div key={id} className="flex flex-col gap-2 justify-center">
                    <h1 className="text-[32px] font-light text-start max-md:text-3xl">
                      {heading}
                    </h1>
                    <p className="text-xl font-light">{label}</p>
                  </div>
                ) : (
                  <div
                    key={id}
                    className="p-5 text-start bg-white rounded-xl shadow-md"
                  >
                    <img src={imgSrc} alt={alt} width={70} />
                    <h2 className="text-lg font-semibold my-2">{heading}</h2>
                    <p className="font-light">{label}</p>
                  </div>
                );
              }
            )}
          </div>
        </section> */}
        <ContentCard
          data={EnterpriseCapabilities}
          isStatic={false}
          columns={3}
          width={true}
        />
      </section>
    </>
  );
};
export default Conductor_Page;
