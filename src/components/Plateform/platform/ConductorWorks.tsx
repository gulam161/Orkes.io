import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Workflow_Creation_UI from "../../../assets/Workflow Creation UI.svg";
import Scheduler from "../../../assets/Scheduler.svg";
import Human_Task from "../../../assets/Human_Task.svg";
import Event_Tasks from "../../../assets/Event Tasks.svg";
import Wait_Tasks from "../../../assets/Wait_Tasks.svg";
import AI_and_LLM_Tasks from "../../../assets/AI and LLM Tasks.svg";
import Webhooks from "../../../assets/Webhooks.svg";
import One_Step_Invoke from "../../../assets/One-Step Invoke.svg";
import Workflow_Timeline_View from "../../../assets/Workflow Timeline View.svg";
import Task_Retry from "../../../assets/Task Retry.svg";
import Versioning from "../../../assets/Versioning.svg";
import Tags from "../../../assets/Tags.svg";
import Advanced_Metrics_Dashboard from "../../../assets/Advanced Metrics Dashboard.svg";
import Infinitely_Scaleable from "../../../assets/Infinitely Scaleable.svg";
import High_Performance_Queing from "../../../assets/High Performance Queing.svg";
import Role_Based_Access_Control from "../../../assets/Role Based Access Control.svg";
import Secrets_Storage from "../../../assets/Secrets Storage.svg";
import User_Groups from "../../../assets/User Groups.svg";
import Audit_logs from "../../../assets/Audit logs.svg";
import Change_Data_Capture from "../../../assets/Change Data Capture.svg";

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
        imgSrc: One_Step_Invoke,
        alt: "One_Step_Invoke",
        heading: "One-Step Invoke",
        label:
          "Simplify the execution process, reduce complexity, and enhance user efficiency by eliminating the need for multiple steps or commands.",
      },
      {
        id: 2,
        imgSrc: Workflow_Timeline_View,
        alt: "Workflow_Timeline_View",
        heading: "Workflow Timeline View",
        label:
          "View a chronological representation of workflow events, enabling better understanding, monitoring, and analysis of workflow processes from start to finish.",
      },
      {
        id: 3,
        imgSrc: Task_Retry,
        alt: "Task_Retry",
        heading: "Task Retry",
        label:
          "Handle task failures by automatically retrying tasks based on configurable parameters. This feature enhances workflow reliability and ensures that transient errors or temporary issues do not lead to complete workflow failures.",
      },
      {
        id: 4,
        imgSrc: Versioning,
        alt: "Versioning",
        heading: "Versioning",
        label:
          'Safely test changes by doing canary testing in production or A/B testing across multiple versions before rolling out. A version can also be deleted, effectively allowing for "rollback" if required.',
      },
    ],
  },
  {
    category: "Observe and Scale",
    section:
      "Monitor workflow and application performance while scaling without additional infrastructure configuration or setup.",
    items: [
      {
        id: 1,
        imgSrc: Tags,
        alt: "Tags",
        heading: "Tags",
        label:
          "Assign Tags to workflows, tasks, and other entities to efficiently organize workflows, enhance searchability, and implement more granular control over workflow execution and monitoring.",
      },
      {
        id: 2,
        imgSrc: Advanced_Metrics_Dashboard,
        alt: "Advanced_Metrics_Dashboard",
        heading: "Advanced Metrics Dashboard",
        label:
          "Gain insights into workflows that drive your business. Identify workflow patterns across your distributed landscape and quickly resolve bottlenecks. Built-in alerting over hundreds of granular metrics.",
      },
      {
        id: 3,
        imgSrc: Infinitely_Scaleable,
        alt: "Infinitely_Scaleable",
        heading: "Infinitely Scaleable",
        label:
          "Build or scale with a limitless number of application workflows and executions.",
      },
      {
        id: 4,
        imgSrc: High_Performance_Queing,
        alt: "High_Performance_Queing",
        heading: "High Performance Queing",
        label:
          "Increased throughput for handling large volumes of simultaneous task executions.",
      },
    ],
  },
  {
    category: "Collaborate and Govern",
    section:
      "Share or reuse integral pieces of a workflow across applications, view audit change logs, and assign access to unique users and groups.",
    items: [
      {
        id: 1,
        imgSrc: Role_Based_Access_Control,
        alt: "Role_Based_Access_Control",
        heading: "Role Based Access Control",
        label:
          "Securely share workflows, tasks, secrets, AI prompts and more with other teams with granular access controls.",
      },
      {
        id: 2,
        imgSrc: Secrets_Storage,
        alt: "Secrets_Storage",
        heading: "Secrets Storage",
        label:
          "Securely store API keys and tokens with custom access requirements to be used within workflows.",
      },
      {
        id: 3,
        imgSrc: User_Groups,
        alt: "User Groups",
        heading: "User Groups",
        label:
          "Create custom user groups to give access and permissions to various team members across your organization.",
      },
    ],
    additionalItems: [
      {
        id: 1,
        imgSrc: Audit_logs,
        alt: "Audit Logs",
        heading: "Audit Logs",
        label:
          "Audit changes to workflows as users make changes to the metadata.",
      },
      {
        id: 2,
        imgSrc: Change_Data_Capture,
        alt: "Change Data Capture",
        heading: "Change Data Capture",
        label:
          "Capture all state changes for your applications out of the box.",
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
      <div className="w-10/12 max-lg:w-11/12 max-md:w-[94%] bg-white mx-auto p-8 max-md:p-5 mt-10 rounded-xl border grid_shaddow">
        <div className="my-3 relative">
          <SlArrowLeft
            size={getSize("left")}
            onMouseEnter={() => setHoveredArrow("left")}
            onMouseLeave={() => setHoveredArrow(null)}
            onClick={() => handleArrowClick("left")}
            className={`arrow_button start-0 ${
              hoveredArrow === "left" ? "transition-all delay-75" : ""
            }`}
          />
          <div className="flex_between_center px-12 relative max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 max-md:px-0">
            {buttonLabels.map((label) => (
              <button
                key={label}
                onClick={() => handleClick(label)}
                className={`w-56 max-xl:w-40 max-xl:px-5 max-lg:w-10/12 max-lg:m-auto max-md:w-full text-base font-light text-center py-[10px] rounded-full border border-gray-300 transition-all duration-500 ${
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
            className={`arrow_button end-0 ${
              hoveredArrow === "right" ? "transition-all delay-75" : ""
            }`}
          />
        </div>

        {activeData && (
          <div className="flex flex-col gap-8">
            <p className="px-16 text-xl my-3 text-gray-800 max-md:px-2 transition duration-500">
              {activeData.section}
            </p>
            {[activeData.items, activeData.additionalItems].map(
              (items, index) => (
                <div
                  key={index}
                  className={`grid gap-8 ${
                    items?.length === 4
                      ? activeData.category === "Define and Execute"
                        ? "grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1"
                        : "grid-cols-2"
                      : items?.length === 2
                      ? "grid-cols-2 max-sm:grid-cols-1"
                      : "grid-cols-3 max-md:grid-cols-1"
                  }`}
                >
                  {items?.map(({ id, imgSrc, alt, heading, label }) => (
                    <div
                      key={id}
                      className="p-6 max-sm:p-4 text-start bg-gray-100/60 rounded-xl shadow-sm transition duration-500"
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
