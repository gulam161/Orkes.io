import React, { useState } from "react";
import IntroSection from "../IntroSection";
import { FaRegCircleCheck } from "react-icons/fa6";

type FeatureTableItem = {
  id: number;
  center?: string;
  leftValue?: string;
  rightValue?: string;
  label: string;
  showCheck?: boolean;
  isBackground?: boolean;
};

type FeatureTableRowCategory = {
  category: string;
  FeatureTableItems: FeatureTableItem[];
};

type Feature_Price_TableProps = {};

const buttonLabels = [
  "Core",
  "Capacity",
  "Integrations Productivity",
  "Hosting",
  "Security and Compliance",
];

const TableRowData: FeatureTableRowCategory[] = [
  {
    category: "Core Features",
    FeatureTableItems: [
      {
        id: 1,
        label: "Orkes Visual Workflow",
        showCheck: true,
      },
      {
        id: 2,
        label: "Workflow Template Explorer",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 3,
        label: "User Token",
        showCheck: true,
      },
      {
        id: 4,
        label: "SDK API Key",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 5,
        label: "Event Tasks",
        showCheck: true,
      },
      {
        id: 6,
        label: "Event Handlers",
        leftValue: "2",
        center: "2",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 7,
        label: "Webhooks",
        leftValue: "–",
        rightValue: "Unlimited",
        center: "2",
        showCheck: true,
      },
      {
        id: 8,
        label: "Distributed Scheduler",
        leftValue: "–",
        center: "2 schedules",
        rightValue: "Unlimited",

        isBackground: true,
      },
      {
        id: 9,
        label: "Conductor Users",
        leftValue: "–",
        center: "5",
        rightValue: "Unlimited",
      },
      {
        id: 10,
        label: "Human Tasks",
        leftValue: "–",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 11,
        label: "Human Tasks Forms",
        leftValue: "–",
        center: "–",
        rightValue: "Unlimited",
      },
      {
        id: 12,
        label: "LLM Tasks",
        leftValue: "–",
        center: "–",
        rightValue: "Unlimited",
        isBackground: true,
      },
      {
        id: 13,
        label: "AI Prompt Studio",
        leftValue: "–",
        center: "–",
        rightValue: "Unlimited",
      },
      {
        id: 14,
        label: "Advanced Metrics Dashboard",
        leftValue: "–",
        center: "–",
        rightValue: "Unlimited",
        isBackground: true,
      },
    ],
  },
  {
    category: "Capacity Features",
    FeatureTableItems: [
      {
        id: 1,
        label: "Active Data space",
        leftValue: "Limited",
        center: "1GB",
        rightValue: "100GB +",
      },
      {
        id: 2,
        label: "Archived Executions",
        leftValue: "200MB",
        center: "25GB",
        rightValue: "Custom",
        isBackground: true,
      },
      {
        id: 3,
        label: "Retain Period",
        leftValue: "2 Days",
        center: "7 Days",
        rightValue: "Custom",
      },
    ],
  },
  {
    category: "Integrations Features",
    FeatureTableItems: [
      {
        id: 1,
        label: "Message Queue Integrations",
        leftValue: "Limited",
        center: "2",
        showCheck: true,
      },
      {
        id: 2,
        label: "LLM Integrations",
        leftValue: "Limited",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 3,
        label: "Vector DB Integrations",
        leftValue: "Limited",
        center: "–",
        showCheck: true,
      },
      {
        id: 4,
        label: "LLM Integrations",
        leftValue: "–",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
    ],
  },
  {
    category: "Hosting Features",
    FeatureTableItems: [
      {
        id: 1,
        label: "Orkes Hosted",
        showCheck: true,
      },
      {
        id: 2,
        label: "Hybrid Hosted on Customer Cloud",
        leftValue: "–",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 3,
        label: "Choice of Cloud Provider and Regions",
        leftValue: "–",
        center: "–",
        showCheck: true,
      },
      {
        id: 4,
        label: "Dedicated VPC/VNET",
        leftValue: "–",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 5,
        label: "Private Link",
        leftValue: "–",
        center: "–",
        showCheck: true,
      },
      {
        id: 6,
        label: "VPC/VNET Peering",
        leftValue: "–",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
    ],
  },
  {
    category: "Security and Compliance Features",
    FeatureTableItems: [
      {
        id: 1,
        label: "SOC2 Type II",
        leftValue: "–",
        showCheck: true,
      },
      {
        id: 2,
        label: "Role Based Access Control",
        leftValue: "–",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 3,
        label: "Bring Your Own Keys",
        leftValue: "–",
        center: "–",
        showCheck: true,
      },
      {
        id: 4,
        label: "Single Sign On",
        leftValue: "–",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 5,
        label: "Audit Logs",
        leftValue: "–",
        center: "–",
        showCheck: true,
      },
      {
        id: 6,
        label: "Change Data Capture",
        leftValue: "–",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 7,
        label: "User Groups",
        leftValue: "–",
        center: "–",
        showCheck: true,
      },
      {
        id: 8,
        label: "User Groups Sync with IdP",
        leftValue: "–",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 9,
        label: "External Application Identities",
        leftValue: "–",
        center: "–",
        showCheck: true,
      },
      {
        id: 10,
        label: "Secrets",
        leftValue: "–",
        center: "–",
        showCheck: true,
        isBackground: true,
      },
      {
        id: 11,
        label: "Data Encryption",
        leftValue: "At Rest and In Transit",
        center: "At Rest and In Transit",
        rightValue: "At Rest and In Transit",
      },
    ],
  },
];

const headers = [
  {
    src: "/Images/Dev Playground_Purple.svg",
    alt: "Dev Playground_Purple",
    label: "Developer Edition",
  },
  {
    src: "/Images/Basic Plan_Blue.svg",
    alt: "Basic Plan_Blue",
    label: "Basic",
  },
  {
    src: "/Images/Enterprise_red.svg",
    alt: "Enterprise_red",
    label: "Enterprise",
  },
];

const Feature_Price_Table: React.FC<Feature_Price_TableProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => setActiveIndex(index);

  const activeData = TableRowData[activeIndex];

  return (
    <section className="py-10 w-3/4 m-auto">
      <IntroSection title="Features List" sectionClass="pb-4 pt-0" />
      {/* max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 max-md:px-0*/}
      <div className="relative flex items-center gap-x-10 gap-y-3 px-4 flex-wrap">
        {buttonLabels.map((label, index) => (
          <button
            key={index + label}
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

      <table className="w-full inline-block px-6 py-8 my-6 border border-gray-300 rounded-xl bg-white">
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
                key={index + 1}
                className={`${
                  index === 0 ? "border-x-2" : index === 1 ? "border-r-2" : ""
                } w-[20%] flex flex-col justify-center items-center gap-3 px-2`}
              >
                <img src={header.src} alt={header.alt} width={60} />
                <p className="text-gray-900 text-sm font-medium uppercase">
                  {header.label}
                </p>
                <div className="w-full h-0.5 bg-gray-500/70 rounded-full"></div>
              </th>
            ))}
          </tr>
        </thead>

        {activeData.FeatureTableItems.map(
          (
            {
              id,
              label,
              leftValue,
              center,
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
                  <div className="flex flex-col justify-center items-start gap-1 py-3">
                    <p className="text-gray-700  font-light mt-1.5 leading-7">
                      {label}
                    </p>
                  </div>
                  {index !== activeData.FeatureTableItems.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-300 rounded-full"></div>
                  )}
                </td>

                <td className="border-x-2 w-[20%] flex flex-col justify-end px-2 text-gray-700 font-light">
                  <h2 className="w-full h-full flex justify-center items-center gap-3">
                    {/* {leftValue} */}
                    {!leftValue ? (
                      <FaRegCircleCheck size={26} color="#3ac09c" />
                    ) : (
                      leftValue
                    )}
                  </h2>
                  {index !== activeData.FeatureTableItems.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-300 rounded-full"></div>
                  )}
                </td>

                <td className=" border-r-2 w-[20%] flex flex-col justify-end px-2 text-gray-700 font-light">
                  <h2 className="w-full h-full flex justify-center items-center gap-3">
                    {!center ? (
                      <FaRegCircleCheck size={26} color="#3ac09c" />
                    ) : (
                      center
                    )}
                  </h2>
                  {index !== activeData.FeatureTableItems.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-300 rounded-full"></div>
                  )}
                </td>

                <td className="w-[20%] flex flex-col justify-end px-2 text-gray-700 font-light">
                  <h2 className="w-full h-full flex justify-center items-center gap-3">
                    {showCheck ? (
                      <FaRegCircleCheck size={26} color="#3ac09c" />
                    ) : (
                      rightValue
                    )}
                  </h2>
                  {index !== activeData.FeatureTableItems.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-300 rounded-full"></div>
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
export default Feature_Price_Table;
