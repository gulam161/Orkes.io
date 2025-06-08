import { useState } from "react";
import IntroSection from "../IntroSection";
import { FaRegCircleCheck } from "react-icons/fa6";

type TableItem = {
  id: number;
  title: string;
  description?: string[];
  leftValue: string | string[];
  rightValue?: string | string[];
  centerValue: string | string[];
  label?: string;
  showCheck?: boolean;
  isBackground?: boolean;
};

const TableRowData: TableItem[] = [
  {
    id: 1,
    title: "Support Case Response Times",
    description: [
      "Catastrophic Support Ticket (P1)",
      "Critical Support Ticket (P2)",
      "Important Support Ticket (P3)",
    ],
    leftValue: [
      "Within 3 business days",
      "Within 5 business days",
      "Within 7 business days",
    ],
    centerValue: [
      "Within 8 business hours",
      "Within 1 business day",
      "Within 2 business days",
    ],
    rightValue: ["Within 4 hours", "Within 8 hours", "Within 24 hours"],
  },
  {
    id: 2,
    title: "Support Channel(s)",
    leftValue: "Email",
    centerValue: "Orkes Support Portal",
    rightValue: "Orkes Support Portal, Slack, Teams",
    isBackground: true,
  },
  {
    id: 3,
    title: "Technical Account Manager",
    leftValue: "-",
    centerValue: "-",
    showCheck: true,
  },
  {
    id: 4,
    title: "Architectural Guidance",
    leftValue: "-",
    centerValue: "General",
    rightValue: "Contextual to your use cases",
    isBackground: true,
  },
];

const headers = ["Basic", "Standard", "Premium"];

export default function SupportPlans() {
  const [activeData] = useState<TableItem[]>(TableRowData);

  return (
    <section className="py-12 w-3/4 m-auto">
      <IntroSection title="Support Plans" sectionClass="pb-4 pt-0" />
      <table className="w-full inline-block px-6 py-8 my-6 border border-gray-300 rounded-xl grid_shaddow">
        <thead className="inline-block w-full">
          <tr className="w-full flex justify-between items-end">
            <th className="w-3/5 flex flex-col justify-end items-start gap-3 px-2">
              <div className="w-full h-0.5 bg-gray-500/70 rounded-full"></div>
            </th>
            {headers.map((header, index) => (
              <th
                key={header}
                className={`${
                  index === 0 ? "border-x-2" : index === 1 ? "border-r-2" : ""
                } w-[25%] flex flex-col justify-center items-center gap-3 px-2`}
              >
                <p className="text-gray-900 text-[15px] font-medium uppercase">
                  {header}
                </p>
                <div className="w-full h-0.5 bg-gray-500/70 rounded-full"></div>
              </th>
            ))}
          </tr>
        </thead>

        {TableRowData.map(
          (
            {
              id,
              title,
              description,
              leftValue,
              rightValue,
              showCheck,
              isBackground,
              centerValue,
            },
            index
          ) => (
            <tbody className="inline-block w-full" key={id}>
              <tr
                className={`w-full flex justify-start items-stretch ${
                  isBackground ? "bg-gray-50" : ""
                }`}
              >
                <td className="w-3/5 flex flex-col justify-center items-start gap-0 px-2">
                  <div className="flex flex-col justify-center items-start gap-3 py-4">
                    <h2
                      className={`text-gray-800 ${!description ? "py-5" : ""}`}
                    >
                      {title}
                    </h2>
                    {description && (
                      <ul
                        className={`flex flex-col gap-5  text-gray-700 font-light list-none leading-7`}
                      >
                        {description?.map((desc, idx) => (
                          <li key={`desc-${id}-${idx}`}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {index !== activeData.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-400 rounded-full"></div>
                  )}
                </td>

                <td className="border-x-2 w-[25%] flex flex-col justify-end px-2 text-gray-700 font-light">
                  <h2
                    className={`${
                      Array.isArray(leftValue)
                        ? "justify-end py-4"
                        : "justify-center"
                    } w-full h-full flex-col flex  items-center gap-7 text-center`}
                  >
                    {!leftValue ? (
                      <FaRegCircleCheck size={30} color="#3ac09c" />
                    ) : Array.isArray(leftValue) ? (
                      leftValue.map((value, index) => (
                        <>
                          <p
                            key={`left-${id}-${index}`}
                            className="text-center"
                          >
                            {value}
                          </p>
                        </>
                      ))
                    ) : (
                      <p>{leftValue}</p>
                    )}
                  </h2>

                  {index !== activeData.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-400 rounded-full"></div>
                  )}
                </td>

                <td className="w-[25%] border-r-2 flex flex-col justify-end px-2 text-gray-700 font-light">
                  <h2
                    className={`${
                      Array.isArray(centerValue)
                        ? "justify-end py-4"
                        : "justify-center"
                    } w-full h-full flex-col flex  items-center gap-7 text-center`}
                  >
                    {!centerValue ? (
                      <FaRegCircleCheck size={30} color="#3ac09c" />
                    ) : Array.isArray(centerValue) ? (
                      centerValue.map((value, index) => (
                        <>
                          <p
                            key={`center-${id}-${index}`}
                            className="text-center"
                          >
                            {value}
                          </p>
                        </>
                      ))
                    ) : (
                      <p>{centerValue}</p>
                    )}
                  </h2>
                  {index !== activeData.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-400 rounded-full"></div>
                  )}
                </td>

                <td className="w-[25%] flex flex-col justify-end px-2 text-gray-700 font-light">
                  <h2
                    className={`${
                      Array.isArray(rightValue)
                        ? "justify-end py-4"
                        : "justify-center"
                    } w-full h-full flex-col flex  items-center gap-7 text-center`}
                  >
                    {showCheck ? (
                      <FaRegCircleCheck size={30} color="#3ac09c" />
                    ) : Array.isArray(rightValue) ? (
                      rightValue.map((value, index) => (
                        <>
                          <p key={`right-${id}-${index}`}>{value}</p>
                        </>
                      ))
                    ) : (
                      <p className="">{rightValue}</p>
                    )}
                  </h2>
                  {index !== activeData.length - 1 && (
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
}
