import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Workflow_Creation_UI from "../../../assets/Workflow Creation UI.svg";
import Scheduler from "../../../assets/Scheduler.svg";
import Human_Task from "../../../assets/Human_Task.svg";
import Event_Tasks from "../../../assets/Event Tasks.svg";
import Wait_Tasks from "../../../assets/Wait_Tasks.svg";
import AI_and_LLM_Tasks from "../../../assets/AI and LLM Tasks.svg";
import Webhooks from "../../../assets/Webhooks.svg";

const buttonLabels = [
  "Define and Execute",
  "Run and Optimize",
  "Observe and Scale",
  "Collaborate and Govern",
];

const data = [
  {
    category: "Define and Execute",
    section:
      "Visually define workflows, write code in any language with supported SDKs, plug into existing APIs and easily expose business functions as a worker process.",
    items: [
      {
        id: 1,
        imgSrc: Workflow_Creation_UI,
        alt: "Workflow Creation UI",
        heading: "Visual Workflow Creation UI",
        label:
          "Increase idea to production velocity by creating and editing workflows visually in the Conductor UI. Leverage the built-in code editor for fine-tuning your definitions and integrating with source code repositories.",
      },
      {
        id: 2,
        imgSrc: Scheduler,
        alt: "Scheduler",
        heading: "Scheduler",
        label:
          "Execute workflows at a prescribed cadence (e.g., once every 10 seconds, once a month, at 4pm every day) without the need for an external cron job.",
      },
      {
        id: 3,
        imgSrc: Human_Task,
        alt: "Human Task",
        heading: "Human Tasks",
        label:
          "Add human interactions to your workflows with built-in system tasks for assigning users or groups for specific actions inside an execution flow.",
      },
      {
        id: 4,
        imgSrc: Event_Tasks,
        alt: "Event Tasks",
        heading: "Event Tasks",
        label:
          "Trigger events from your workflows to interface and share data from your execution with external systems like Kafka Topics.",
      },
    ],
    additionalItems: [
      {
        id: 1,
        imgSrc: Wait_Tasks,
        alt: "Wait Tasks",
        heading: "Wait Tasks",
        label:
          "Bring durability to your workflows with the ability to wait at any point within the execution. Wait tasks can wait for seconds, days, years, and more.",
      },
      {
        id: 2,
        imgSrc: AI_and_LLM_Tasks,
        alt: "AI and LLM Tasks",
        heading: "AI and LLM Tasks",
        label:
          "Seamlessly weave in Large Language Models, Prompt Templates, and Vector Database Integrations into your business workflows.",
      },
      {
        id: 3,
        imgSrc: Webhooks,
        alt: "Webhooks",
        heading: "Webhooks",
        label:
          "Asynchronously signal waiting workflows or start new workflow executions using built-in webhooks for incoming calls.",
      },
    ],
  },
  {
    category: "Run and Optimize",
    section:
      "Run workflows in parallel, optimize for debugging with a visual runtime dashboard, and quickly identify and fine tune inefficiencies within your flow.",
    items: [
      {
        id: 1,
        imgSrc: Workflow_Creation_UI,
        alt: "Workflow Creation UI",
        heading: "Visual Workflow Creation UI",
        label:
          "Increase idea to production velocity by creating and editing workflows visually in the Conductor UI. Leverage the built-in code editor for fine-tuning your definitions and integrating with source code repositories.",
      },
      {
        id: 2,
        imgSrc: Scheduler,
        alt: "Scheduler",
        heading: "Scheduler",
        label:
          "Execute workflows at a prescribed cadence (e.g., once every 10 seconds, once a month, at 4pm every day) without the need for an external cron job.",
      },
      {
        id: 3,
        imgSrc: Human_Task,
        alt: "Human Task",
        heading: "Human Tasks",
        label:
          "Add human interactions to your workflows with built-in system tasks for assigning users or groups for specific actions inside an execution flow.",
      },
      {
        id: 4,
        imgSrc: Event_Tasks,
        alt: "Event Tasks",
        heading: "Event Tasks",
        label:
          "Trigger events from your workflows to interface and share data from your execution with external systems like Kafka Topics.",
      },
    ],
  },
];

const ConductorWorks: React.FC = () => {
  const [activeLink, setActiveLink] = useState(buttonLabels[0]);
  const [hoveredArrow, setHoveredArrow] = useState<string | null>(null);
  const getSize = (arrow: string) => (hoveredArrow === arrow ? 30 : 26);

  const handleClick = (label: string) => {
    setActiveLink(label);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    const currentIndex = buttonLabels.indexOf(activeLink);
    const newIndex =
      (currentIndex + (direction === "left" ? -1 : 1) + buttonLabels.length) %
      buttonLabels.length;
    setActiveLink(buttonLabels[newIndex]);
  };

  const activeData = data.find((section) => section.category === activeLink);

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
      <div className="w-10/12 bg-white mx-auto p-8 mt-10 rounded-xl border grid_shaddow">
        <div className="my-3 relative">
          <SlArrowLeft
            size={getSize("left")}
            onMouseEnter={() => setHoveredArrow("left")}
            onMouseLeave={() => setHoveredArrow(null)}
            onClick={() => handleArrowClick("left")}
            className={`absolute top-3 start-0 z-30 cursor-pointer text-gray-300 ${
              hoveredArrow === "left" ? "transition-all delay-75" : ""
            }`}
          />
          <div className="flex_between_center px-12 relative">
            {buttonLabels.map((label) => (
              <button
                key={label}
                onClick={() => handleClick(label)}
                className={`w-56 text-base font-light text-center py-[10px] rounded-full border border-gray-300 ${
                  activeLink === label
                    ? "bg-rose-500/90 text-white font-normal"
                    : "bg-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <SlArrowRight
            size={getSize("right")}
            onMouseEnter={() => setHoveredArrow("right")}
            onMouseLeave={() => setHoveredArrow(null)}
            onClick={() => handleArrowClick("right")}
            className={`absolute top-3 end-0 z-30 cursor-pointer text-gray-300 ${
              hoveredArrow === "right" ? "transition-all delay-75" : ""
            }`}
          />
        </div>

        {activeData && (
          <div className="flex flex-col gap-8">
            <p className="px-16 text-xl my-3 text-gray-800">
              {activeData.section}
            </p>
            {[activeData.items, activeData.additionalItems].map(
              (items, index) => (
                <div key={index} className="flex justify-between">
                  {items?.map(({ id, imgSrc, alt, heading, label }) => (
                    <div
                      key={id}
                      className="w-1/4 p-6 text-start bg-gray-100/60 rounded-xl shadow-sm"
                      style={{ width: index === 1 ? "31.4%" : "22.8%" }}
                    >
                      <img src={imgSrc} alt={alt} width={70} />
                      <h2 className="text-lg text-gray-700 font-semibold my-2">
                        {heading}
                      </h2>
                      <p className="font-light text-gray-600 tracking-wide">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ConductorWorks;
