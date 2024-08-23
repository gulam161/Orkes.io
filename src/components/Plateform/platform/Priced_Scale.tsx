import React, { useState } from "react";
import { Link } from "react-router-dom";

type Priced_ScaleProps = {};

// features["AI_Orchestration"]
const data = [
  {
    id: 1,
    img_Src: "/Images/Dev Playground_Purple.svg",
    alt: "Dev_Playground_Purple",
    heading: "Developer Playground",
    label:
      "Designated playground to explore features, build and test workflows, and get familiar with Orkes Conductor.",
    buttonLable: "Free",
    buttontext: "Sign Up",
    link: "",
    borderColor: "#8057ff",
    features: [
      {
        list: "All Conductor OSS Features",
      },
      {
        list: "Orkes Workflow UI",
      },
      {
        list: "Workflow Template Explorer",
      },
      {
        list: "Community Support",
      },
    ],
  },
  {
    id: 2,
    img_Src: "/Images/Basic Plan_Blue.svg",
    alt: "Basic_Plan_Blue",
    heading: "Basic",
    label:
      "Sign up and get access to a fully managed Orkes Conductor cluster instantly.",
    buttonLable: "$695",
    buttontext: "Start 14 Day Free Trial",
    link: "/sign-up",
    borderColor: "#13afe4",
    features: [
      {
        list: "Fully Managed Orkes Conductor Clusters",
      },
      {
        list: "Choose your geographical region from Americas, EU, and APAC",
      },
      {
        list: "Distributed Scheduler",
      },
      {
        list: "Webhooks",
      },
      {
        list: "Message Queue Integrations",
      },
      {
        list: "1 GB Active Data Space",
      },
      {
        list: "25 GB of monthly execution history with 7 days retainment",
      },
      {
        list: "99% SLA",
      },
      {
        list: "SOC2 Type 2 Compliant",
      },
      {
        list: "Basic Support",
      },
    ],
  },
  {
    id: 3,
    img_Src: "/Images/Enterprise_red.svg",
    alt: "Enterprise_red",
    heading: "Enterprise",
    label:
      "For Enterprises with custom security, observability, scale and availability needs.",
    buttonLable: "Custom",
    buttontext: "Talk to Sales",
    link: "/talk-to-an-expert",
    borderColor: "#ed5668",
    features: [
      {
        basic: "Everything in Basic plus:",
        list: "AI Orchestration",
        AI_Orchestration: [
          "- LLM and Vector DB Integrations",
          "  AI Prompt Studio",
          "– LLM System Tasks",
        ],
      },
      {
        list: "Human Tasks and Forms",
      },
      {
        list: "Secure Workflows",
        Secure_Workflows: {
          //   data_encryption:
          //     "End to end encryption of data at rest and in transit",
          //   access_controls: "Role Based Access Controls",
          //   user_groups: true,
          //   external_application_identities: true,
          //   secrets_management: true,
        },
      },
    ],
  },
];

const Priced_Scale: React.FC<Priced_ScaleProps> = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section className="flex justify-start flex-col gap-7 text-center py-16">
      <div className=" text-center mt-10">
        <h1 className="text-4xl font-medium text-black/90">Priced to Scale</h1>
        <p className="text-xl font-light w-8/12 my-3 mx-auto text-gray-600">
          Build without limitations with unlimited task and workflow executions
        </p>
      </div>
      <div className="w-10/12 m-auto grid grid-cols-3 gap-10 max-lg:grid-cols-1 max-sm:p-8">
        {data.map(
          ({
            id,
            img_Src,
            alt,
            heading,
            label,
            buttonLable,
            buttontext,
            link,
            borderColor,
          }) => {
            return (
              <div
                key={id}
                className="flex flex-col gap-8 text-start border-2 border-gray-200 px-4 py-4 rounded-xl expert_shaddow max-lg:rounded-lg"
              >
                <div className="h-52">
                  <img src={img_Src} alt={alt} width={80} />
                  <h2 className="text-xl font-medium text-gray-700 my-1">
                    {heading}
                  </h2>
                  <p className="font-light text-gray-600">{label}</p>
                </div>
                {/* plan & offer */}
                <div className="h-60 py-2 border-y border-gray-300 text-center">
                  <div className="flex justify-center items-center gap-6 h-10 my-2">
                    {id === 2 && (
                      <>
                        <p className="text-base font-light text-gray-400">
                          <span className={`${!toggle ? "text-black" : ""}`}>
                            Monthly
                          </span>
                          /
                          <span className={`${toggle ? "text-black" : ""}`}>
                            Annually
                          </span>
                        </p>
                        <div
                          className="w-10 h-6 p-1 self-center rounded-full bg-[#b6e7f2] cursor-pointer"
                          onClick={() => setToggle((prevToggle) => !prevToggle)}
                        >
                          <div
                            className={`w-4 h-4 rounded-full bg-[#13afe4] transform transition-transform duration-300 ease-in-out ${
                              toggle ? "translate-x-4" : "translate-x-0"
                            }`}
                          ></div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="h-24">
                    <h1 className="text-5xl font-extralight text-gray-800 mb-2">
                      {toggle ? buttonLable : "$825"}
                      {id === 2 && (
                        <span className="text-[26px] font-light text-gray-400 pl-1">
                          {!toggle ? "/month" : "/annually"}
                        </span>
                      )}
                    </h1>
                    {id === 2 && (
                      <p
                        className={`${
                          !toggle ? "hidden" : ""
                        } text-emerald-400 text-center text-sm`}
                      >
                        (Save 15%)
                      </p>
                    )}
                  </div>
                  <Link
                    to={link}
                    className="border-2 scale_button"
                    style={{
                      borderColor: borderColor,
                      backgroundColor: id === 3 ? borderColor : "transparent",
                      color: id === 3 ? "white" : "black",
                    }}
                  >
                    {buttontext}
                  </Link>
                </div>

                {/* Price and table-list */}
                <div className=""></div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Priced_Scale;
