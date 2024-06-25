import React from "react";
import { Link } from "react-router-dom";
import Orchestration from "../../assets/Orchestration-01.svg";
import OrkesCloud from "../../assets/Orkes Cloud.svg";
import OSS_V_Conductor from "../../assets/OSS V Conductor.svg";

type LayoutProps = {};

const layoutItems = [
  {
    id: 1,
    to: "plateform",
    text: "Orkes Platform",
    label:
      "Supercharge coding distributed systems across microservices, APIs, AI models, and event-driven architectures – any language, framework, and complexity.",
    imgSrc: Orchestration,
  },
  {
    id: 2,
    to: "cloud",
    text: "Orkes Cloud",
    label:
      "Scale to the billions and eliminate the complexity of building, securing, and managing Conductor clusters.",
    imgSrc: OrkesCloud,
  },
  {
    id: 3,
    to: "conductor-oss-vs-orkes",
    text: "Orkes vs. Conductor_OSS",
    label:
      "A complete comparison of the features and functionality of Orkes and Conductor OSS.",
    imgSrc: OSS_V_Conductor,
  },
];

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <div className="bg-[#8057ff] w-5 h-5 ml-6 absolute top-0 transform origin-center rotate-45"></div>

      <div className="w-[40%] h-auto p-5 flex flex-col bg-gray-50 text-gray-500 border-t-[3px] border-[#8057ff] rounded-b-xl shadow-md absolute">
        {layoutItems.map(({ id, text, to, imgSrc, label }, index) => (
          <Link
            to={to}
            key={id}
            className={`flex items-start gap-2 ${
              index === 2 ? "border-none" : "border-b border-gray-300"
            } py-4`}
          >
            <img src={imgSrc} alt={`${imgSrc}-icon`} width={25} />
            <div className="">
              <h2 className="font-light text-gray-700 mb-1">{text}</h2>
              <p className="text-sm">{label}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Layout;
