import React from "react";
import Header from "../../Navigation/Header";
import Buttons from "../../Buttons";
import ContentCard from "../../ContentCard";
import TableData from "./TableData";
import OrkesStarterBanner from "../OrkesStarterBanner";
import Foxtel from "../../../assets/Logo/foxtel-logo.svg";
import Normalyze from "../../../assets/Logo/normalyze_Black.svg";
import Footer from "../../Footer";

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

const CustomerFeedback = [
  {
    text: "“Orkes has been instrumental in increasing developer agility, creating cost efficiencies, and building highly reliable and secure applications.”",
    img: Foxtel,
    size: 125,
  },
  {
    text: "“With Orkes Conductor hosted in Orkes Cloud, we don’t have to think about building and maintaining the orchestration engine ourselves. We can focus on creating an exceptional customer experience and optimizing our margins.”",
    img: Normalyze,
    size: 175,
  },
];

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

const Conductor_Page: React.FC<Conductor_PageProps> = () => {
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
            <Buttons ButtonData={ButtonData} />
          </div>
        </div>

        {/* Enterprise level features and capabilities */}
        <ContentCard
          data={EnterpriseCapabilities}
          columns={3}
          headingClassName={"font-light text-start"}
          heading=""
        />

        {/* table Data */}
        <TableData />
      </section>

      {/* Performance Improvement */}
      <OrkesStarterBanner
        heading="30X Performance Improvement, 10X Lower Cost of Ownership Over Self-Hosted Conductor OSS"
        divClass="text-gray-700 bg-zinc-100/70 rounded-none"
        headingClass="font-light text-3xl max-md:text-2xl mb-2 w-2/3 max-lg:w-5/6"
      />

      <section className="w-4/5  mx-auto max-lg:w-11/12">
        <div className="pb-20 mb-10 flex flex-col gap-16">
          <h1 className="text-4xl font-medium text-center max-md:px-10 max-sm:text-2xl max-sm:px-1">
            See what Orkes customers that made the switch are saying
          </h1>
          <div className="flex justify-center items-center gap-12 px-10 max-sm:px-3 max-md:grid max-md:grid-cols-1 max-md:m-auto">
            {CustomerFeedback.map(({ text, img, size }, idx) => (
              <div
                key={idx}
                className="relative w-[400px] h-[400px] max-md:w-full max-md:h-auto p-5 border-gray-300 border rounded-2xl shadow-xl"
              >
                <div className="max-md:mb-16">
                  <p className="font-light tracking-wide text-left text-gray-600 leading-8">
                    {text}
                  </p>
                  <img src={img} alt="logo" width={size} className="mt-8" />
                </div>
                <img
                  src="/Inverted Comma.svg"
                  alt="Inverted Comma"
                  width={110}
                  className="absolute bottom-0 right-0 rounded-r-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};
export default Conductor_Page;
