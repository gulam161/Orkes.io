import React from "react";
import { Link } from "react-router-dom";
import Orchestration from "../../assets/Orchestration-01.svg";
import Events_Driven_Architecture from "../../assets/Events Driven Architecture.svg";
import AI_Orchestration from "../../assets/AI Orchestration.svg";
import Human_Workflow_Orchestration from "../../assets/Human Workflow Orchestration.svg";

type LayoutProps = {};

const layoutItems = [
  {
    id: 1,
    to: "/microservices-and-api-orchestration",
    text: "Microservices and API Orchestration",
    label:
      "Enable faster development cycles, easier maintenance, and improved user experiences.",
    imgSrc: Orchestration,
  },
  {
    id: 2,
    to: "/api-orchestration",
    text: "Realtime API Orchestration",
    label:
      "Enable faster development cycles, easier maintenance, and improved user experiences.",
    imgSrc: "/Images/Realtime API Orchestration.svg",
  },
  {
    id: 3,
    to: "/event-driven-architecture",
    text: "Event Driven Architecture",
    label:
      "Create durable workflows that promote modularity, flexibility, and responsiveness.",
    imgSrc: Events_Driven_Architecture,
  },
  {
    id: 4,
    to: "/ai-and-llm-chaining",
    text: "AI and LLM Chaining",
    label:
      "A complete comparison of the features and functionality of Orkes and Conductor OSS.",
    imgSrc: AI_Orchestration,
  },
  {
    id: 5,
    to: "/human-workflow-orchestration",
    text: "Human Workflow Orchestration ",
    label: "Seamlessly insert humans in the loop of complex workflows.",
    imgSrc: Human_Workflow_Orchestration,
  },
];

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <div className="bg-[#8057ff] w-5 h-5 ml-6 absolute top-0  transform origin-center rotate-45 max-lg:top-[125px]"></div>

      <div className="w-auto h-auto p-6 flex flex-col bg-gray-50 text-gray-500 border-t-[3px] border-[#8057ff] rounded-b-xl shadow-md absolute max-lg:relative max-lg:w-full max-lg:rounded-b-none max-lg:shadow-sm">
        <h2 className="uppercase font-medium text-sm text-black/70">
          Use Cases
        </h2>
        {layoutItems.map(({ id, text, to, imgSrc, label }, index) => (
          <Link
            to={to}
            key={id}
            className={`flex items-start gap-2 hover:bg-gray-200/80 ${
              index === 4 ? "border-none" : "border-b border-gray-300"
            } py-4`}
          >
            <img
              src={imgSrc}
              alt={`${imgSrc}-icon`}
              width={30}
              className="filter"
            />
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
