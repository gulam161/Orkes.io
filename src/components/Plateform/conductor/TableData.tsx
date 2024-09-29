import React, { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

type TableItem = {
  id: number;
  title: string;
  description?: string[];
  leftValue?: string;
  rightValue?: string;
  label?: string;
  showCheck?: boolean;
  isBackground?: boolean;
};

type TableRowCategory = {
  category: string;
  tableItems: TableItem[];
};

type TableDataProps = {};

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

const TableRowData: TableRowCategory[] = [
  {
    category: "Operational Capabilities",
    tableItems: [
      {
        id: 1,
        title: "Tasks throughput/second",
        description: [
          "Number of tasks (across all workflows) processed per second.",
          "Ability to scale workloads with less downtime and increased output with a high task throughput rate.",
        ],
        leftValue: "~100",
        rightValue: "1000 +",
      },
      {
        id: 2,
        title: "High Availability",
        description: [
          "Conductor server is available to serve API requests",
          "Run mission-critical applications with high availability needs.",
        ],
        leftValue: "-",
        rightValue: "Up to 99.99% SLA",
        isBackground: true,
      },
      {
        id: 3,
        title: "Multi-Region support with auto-failover",
        label:
          "Stay up and running even in the event of an entire cloud region or data center failing.",
        leftValue: "-",
        showCheck: true,
      },
      {
        id: 4,
        title: "Infinitely scalable Conductor core",
        label:
          "Build or scale with a limitless number of application workflows and executions.",
        leftValue: "-",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 5,
        title: "End to end managed and custom architected clusters",
        label:
          "Abstract out the heavy lifting of DevOps for your Conductor cluster to Orkes.",
        leftValue: "-",
        showCheck: true,
      },
      {
        id: 6,
        title: "Metrics & Analytics Dashboard w/ Alerts",
        description: [
          "Gain insights into workflows that drive your business.",
          "Identify workflow patterns across your distributed landscape and quickly resolve bottlenecks.",
          "Built-in alerting over hundreds of granular metrics.",
        ],
        leftValue: "-",
        showCheck: true,
      },
      {
        id: 7,
        title:
          "Managed Cloud Offerings (including customer cloud hosted) on AWS, Azure, GCP",
        label:
          "Deploy managed Orkes Conductor clusters on your preferred cloud provider either hosted by Orkes or on your cloud footprint.",
        leftValue: "-",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 8,
        title: "Private cloud / data-center deployed enterprise grade clusters",
        label: "Deploy Orkes Conductor on premise on your data centers.",
        leftValue: "-",
        showCheck: true,
      },
      {
        id: 8,
        title: "Enterprise support",
        label:
          "Dedicated customer success manager, technical architect, and premium support resources.",
        leftValue: "-",
        showCheck: true,
      },
    ],
  },
  {
    category: "Developer Productivity Capabilities",
    tableItems: [
      {
        id: 1,
        title: "Enhanced UI with Workflow Creator",
        description: [
          "Increase idea to production velocity by creating and editing workflows visually in the Conductor UI.",
          "In Addition, leverage the built-in code editor for fine turning your definitions and integrating with source code repositories.",
        ],
        leftValue: "-",
        showCheck: true,
      },
      {
        id: 2,
        title: "SDKs in multiple languages",
        label:
          "Easily build client and worker applications using Conductor SDKs in Java, Python, C# Javascript, Go, Clojure (support for additional languages coming)",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 3,
        title: "Cli for conductor",
        label: "Build worker code and more using command line tooling",
        showCheck: true,
      },
      {
        id: 4,
        title: "Unit testing for Workflows in all supported languages",
        label: `<p class="font-light">
        Unit & Regression Tests – <a class="font-medium text-cyan-500 underline" href="">Docs</a>
      </p>
    `,
        showCheck: true,
        isBackground: true,
      },
    ],
  },
  {
    category: "Scaling CapabilitIES",
    tableItems: [
      {
        id: 1,
        title: "Indexing via persistent queues",
        label: "Internal optimization for handling large volume workloads",
        showCheck: true,
      },
      {
        id: 2,
        title: "Efficient & high performance indexing and archiving",
        label:
          "Scale to billions of workflow executions cost effectively with multi-layer persistence.",
        leftValue: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 3,
        title: "High performance queuing",
        label:
          "Increased throughput for handling large volumes of simultaneous task executions",
        leftValue: "–",
        showCheck: true,
      },
      {
        id: 4,
        title: "Improved persistence to reduce IO, network calls, compression",
        label:
          "Internal optimizations to support very large volume workloads and lower infrastructure TCO",
        leftValue: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 5,
        title: "Support for large forks",
        label:
          "Execute massively parallel use cases with up to 60k parallel forks in a single workflow execution",
        leftValue: "–",
        showCheck: true,
      },
    ],
  },
  {
    category: "Security Capabilities",
    tableItems: [
      {
        id: 1,
        title: "Role Based Access Controls",
        label:
          "Securely share workflows, tasks, secrets, AI prompts and more with other teams with granular access controls.",
        leftValue: "-",
        showCheck: true,
      },
      {
        id: 2,
        title: "Secrets store sensitive workflow data",
        label:
          "Securely store API keys and tokens with custom access requirements to be used within workflows.",

        leftValue: "-",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 3,
        title:
          "Directory sync, SSO between Orkes and Okta, AD and any OAuth 2.0 providers",
        description: [
          "Use your company’s ID provider for Single Sign On access to Conductor.",
          "Create access control groups in the ID provider for seamless syncing with Conductor Role Based Access Control groups.",
        ],
        leftValue: "-",
        showCheck: true,
      },
    ],
  },
  {
    category: "AI Orchestration Capabilities",
    tableItems: [
      {
        id: 1,
        title: "AI Prompt Management Studio",
        description: [
          "Create, test and manage prompts to be used with LLM system tasks.",
          "Securely share with other teams to be used in multiple workflows and with multiple model providers.",
        ],
        leftValue: "-",
        showCheck: true,
      },
      {
        id: 2,
        title: "AI & Vector DB Orchestration",
        label:
          "Seamlessly blend LLMs and vector DB interactions into your workflows using built-in system tasks",

        leftValue: "-",
        showCheck: true,
        isBackground: true,
      },
    ],
  },
  {
    category: "Human Task CapabilitIES",
    tableItems: [
      {
        id: 1,
        title: "Human Task",
        label:
          "Add human interactions to your workflows with built-in system task for assigning users or groups for specific actions inside an execution flow",
        leftValue: "-",
        showCheck: true,
      },
      {
        id: 2,
        title: "Human Task APIs",
        label:
          "Integrate external human interaction layers (e.g. web portal) with Conductor to execute human assigned tasks in a workflow execution (e.g. mortgage workflow with a human approval step if the amount is greater than $x)",
        leftValue: "-",
        rightValue: "Up to 99.99% SLA",
        isBackground: true,
      },
      {
        id: 3,
        title: "Human Task Forms",
        label:
          "Build and present visual forms associated with human tasks. Wire up form elements to variables and tasks outputs in the workflow execution",
        leftValue: "-",
        showCheck: true,
      },
    ],
  },
  {
    category: "Core Orchestration Capabilities",
    tableItems: [
      {
        id: 1,
        title: "Workflow priorities",
        label:
          "Prioritize execution of specific workflows in line with your business priority.",
        showCheck: true,
      },
      {
        id: 2,
        title:
          "Synchronous workflow execution (useful for short duration workflows)",
        label:
          "Fast synchronous execution model for latency sensitive workloads such as API gateways.",
        leftValue: "-",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 3,
        title: "Scheduler",
        label:
          "Execute workflows at a prescribed cadence (e.g. once every 10 seconds, once a month, at 4pm every day) without the need for an external cron job.",
        leftValue: "-",
        showCheck: true,
      },
      {
        id: 4,
        title: "Lightweight locks",
        label: "Internal optimization for increased throughput",
        leftValue: "-",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 5,
        title: "Array based dynamic fork",
        label: `<p class="font-light">
        Invoke dynamic forks easily with tasks and parameters specified in an input array – <a class="font-medium text-cyan-500 underline" href=""> View Docs
</a>
      </p>
    `,
        showCheck: true,
      },
      {
        id: 6,
        title:
          "Integrations: AI Model providers, Vector DBs, Message Queues, Alerting Services, ID Providers, Logs & Metrics Integrators",
        label:
          "Built-in integrations to interact with various components of your technology stack.",
        leftValue: "Partial",
        showCheck: true,
        isBackground: true,
      },
    ],
  },
  {
    category: "EVent-Driven Orchestration Capabilities",
    tableItems: [
      {
        id: 1,
        title: "Webhooks",
        label:
          "Asynchronously signal waiting workflows or start new workflow executions using built-in webhooks for incoming calls.",
        leftValue: "-",
        showCheck: true,
      },
      {
        id: 2,
        title: "Terminate workflow using Event",
        label: `<p class="font-light">
        Consume events from a queue to signal termination for an active workflow execution - <a class="font-medium text-cyan-500 underline" href=""> View Docs
</a>
      </p>
    `,
        showCheck: true,
        isBackground: true,
      },
    ],
  },
  {
    category: "SYstem Tasks Capabilities",
    tableItems: [
      {
        id: 1,
        title: "HTTP Poll Task",
        label: `<p class="font-light">
        <a class="font-medium text-cyan-500 underline" href=""> Reference Docs </a>
      </p>
    `,
        leftValue: "~100",
        rightValue: "1000+",
      },
      {
        id: 2,
        title: "Custom HTTP field extraction",
        description: [
          "Conductor server is available to serve API requests",
          "Run mission critical applications with high availability needs.",
        ],
        leftValue: "–",
        rightValue: "Up to 99.99% SLA",
        isBackground: true,
      },
      {
        id: 3,
        title: "Business rules task",
        label: `<p class="font-light">
        <a class="font-medium text-cyan-500 underline" href=""> Reference Docs </a>
      </p>
    `,
        leftValue: "–",
        showCheck: true,
      },
      {
        id: 4,
        title: "Query processor task",
        label: `<p class="font-light">
        <a class="font-medium text-cyan-500 underline" href=""> Reference Docs </a>
      </p>
    `,
        leftValue: "–",
        showCheck: true,
        isBackground: true,
      },
    ],
  },
];

const headers = [
  {
    src: "/Orkes Logo Symbol.svg",
    alt: "Orkes Logo Symbol",
    label: "Conductor OSS",
  },
  {
    src: "/Conductor_favicon.svg",
    alt: "Conductor Favicon",
    label: "Orkes Conductor",
  },
];

const TableData: React.FC<TableDataProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => setActiveIndex(index);

  const activeData = TableRowData[activeIndex];

  return (
    <section className="py-12 mt-16">
      {/* max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 max-md:px-0*/}
      <div className="relative flex items-center gap-x-10 gap-y-3 px-4 flex-wrap">
        {buttonLabels.map((label, index) => (
          <button
            key={label}
            onClick={() => handleClick(index)}
            // max-xl:px-5 max-lg:w-10/12 max-lg:m-auto max-md:w-full
            className={`text-base text-gray-700 font-light text-center py-2.5 outline-none rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "px-8 bg-[#cdccff] text-purple-950 font-medium"
                : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <table className="w-full inline-block px-6 py-8 my-6 border border-gray-300 rounded-xl">
        <thead className="inline-block w-full">
          <tr className="w-full flex justify-between items-end">
            <th className="w-3/5 flex flex-col justify-end items-start gap-3 px-2">
              <p className="text-gray-900 font-medium uppercase">
                {activeData.category}
              </p>
              <div className="w-full h-0.5 bg-gray-500/70 rounded-full"></div>
            </th>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`${
                  index === 0 ? "border-x-2" : ""
                } w-[20%] flex flex-col justify-center items-center gap-3 px-2`}
              >
                <img src={header.src} alt={header.alt} width={45} />
                <p className="text-gray-900 text-sm font-medium uppercase">
                  {header.label}
                </p>
                <div className="w-full h-0.5 bg-gray-500/70 rounded-full"></div>
              </th>
            ))}
          </tr>
        </thead>

        {activeData.tableItems.map(
          (
            {
              id,
              title,
              label,
              description,
              leftValue,
              rightValue,
              showCheck,
              isBackground,
            },
            index
          ) => (
            <tbody className="inline-block w-full" key={id}>
              <tr
                className={`w-full flex justify-start items-stretch ${
                  isBackground ? "bg-gray-50" : ""
                }`}
              >
                <td className="w-3/5 flex flex-col justify-center items-start gap-3 px-2">
                  <div className="flex flex-col justify-center items-start gap-1 py-4">
                    <h2 className="text-gray-800">{title}</h2>
                    {(label || description) && (
                      <ul
                        className={`${
                          label ? "pl-0" : "pl-5"
                        } flex flex-col gap-3 mb-1.5 text-gray-700 font-light list-disc leading-7`}
                      >
                        {label ? (
                          <p dangerouslySetInnerHTML={{ __html: label }} />
                        ) : (
                          description?.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))
                        )}
                      </ul>
                    )}
                  </div>
                  {index !== activeData.tableItems.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-400 rounded-full"></div>
                  )}
                </td>

                <td className="border-x-2 w-[20%] flex flex-col justify-end px-2 text-gray-700 font-light">
                  <h2 className="w-full h-full flex justify-center items-center gap-3">
                    {/* {leftValue} */}
                    {!leftValue ? (
                      <FaRegCircleCheck size={30} color="#3ac09c" />
                    ) : (
                      leftValue
                    )}
                  </h2>
                  {index !== activeData.tableItems.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-400 rounded-full"></div>
                  )}
                </td>

                <td className="w-[20%] flex flex-col justify-end px-2 text-gray-700 font-light">
                  <h2 className="w-full h-full flex justify-center items-center gap-3">
                    {showCheck ? (
                      <FaRegCircleCheck size={30} color="#3ac09c" />
                    ) : (
                      rightValue
                    )}
                  </h2>
                  {index !== activeData.tableItems.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-400 rounded-full"></div>
                  )}
                </td>
              </tr>
            </tbody>
          )
        )}
      </table>
    </section>
  );
};
export default TableData;
