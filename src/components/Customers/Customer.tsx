import React, { useState } from "react";
import Header from "../Navigation/Header";
import Customer_IntroSection from "../Customer_IntroSection";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

type CustomerProps = {};
const ButtonData = [
  {
    to: "/sign-up",
    className: "border-[#ed5668]",
    lable_text: "Start Free Trial",
  },
  {
    to: "",
    className: "px-2 text-white border-[#ed5668] bg-[#ed5668]",
    lable_text: "Get Demo",
  },
];

const data = [
  {
    imgSrc: "/Images/Companies.svg",
    count: 10,
    color: "text-blue-700",
    label: "Orkes Developers",
  },
  {
    imgSrc: "/Images/Developers.svg",
    count: 12,
    color: "text-blue-400",
    label: "Companies using Conductor",
  },
  {
    imgSrc: "/Images/Github Stars.svg",
    count: 17,
    color: "text-red-600",
    label: "Github Stars",
  },
];

const data1 = [
  {
    id: 1,
    logo: "/UWM_Logo_BW_White.png",
    backgroundImage: "/UWM-BG-Image.jpg",
    backgroundColor: "#342960db",
    text: `UWM automates 153 microservices, slashing development time from months to minutes and saving hundreds of thousands of dollars`,
    label:
      "– Andy French, AVP of Platform Automation, United Wholesale Mortgage",
    textColor: "#cdccff",
    link: "",
    linkText: "Read Case Study",
    linkImage: "/Image/Case Study icon.svg",
  },
  
  {
    id: 2,
    logo: "/Collective_cropped-White.png",
    backgroundImage: "/Collective-BG-Image.jpg",
    backgroundColor: "#0c80adba",
    text: `Collective accelerates nationwide service launch across 37 states by automating complex workflows`,
    label: "– Chintan Shah, VP of engineering at Collective",
    textColor: "#ffeab6",
    link: "",
    linkText: "Read Case Study",
    linkImage: "/Image/Case Study icon.svg",
  },
  {
    id: 3,
    logo: "/Foxtel_logo_white.svg",
    backgroundImage: "/Foxtel-BG-Image.jpg",
    backgroundColor: "#af2e47ba",
    text: `Foxtel modernizes operations, boosting reliability, efficiency, and developer velocity to drive company growth and expansion`,
    label: "– Thisara Alawala, Lead Architect, Foxtel",
    textColor: "#f4a2ab",

    link: "",
    linkText: "Read Case Study",
    linkImage: "/Image/Case Study icon.svg",
  },
  {
    id: 4,
    logo: "/Normalyze_logo.svg",
    backgroundImage: "/Normalyze-BG-Image.jpg",
    backgroundColor: "#313435e0",
    text: `Normalyze reduces debugging time by 90%, achieving rapid issue resolution with Orkes Conductor on Orkes Cloud`,
    textColor: "#d9d9d9",
    link: "",
    linkText: "Read Case Study",
    linkImage: "/Image/Case Study icon.svg",
  },
  {
    id: 5,
    logo: "/SPI-logistics_logo.png",
    backgroundImage: "/SPI-Logistics.jpg",
    backgroundColor: "#51290bd4",
    text: `SPI Logistics accelerates digital transformation and streamlines operations with Orkes Conductor`,
    textColor: "#d9d9d9",
    link: "",
    linkText: "Read Case Study",
    linkImage: "/Image/Case Study icon.svg",
  },
  {
    id: 6,
    logo: "/Florence_logo.png",
    backgroundImage: "/Florence.jpg",
    backgroundColor: "#11775ccc",
    text: `Florence Healthcare accelerates clinical trials by streamlining workflows and infrastructure with Orkes Conductor`,
    textColor: "#d9d9d9",
    link: "",
    linkText: "Read Case Study",
    linkImage: "/Image/Case Study icon.svg",
  },
  {
    id: 7,
    logo: "/Netflix_logo.png",
    backgroundImage: "/Netflix.jpg",
    backgroundColor: "#7c1f31ab",
    text: `Netflix uses Conductor to power machine learning infrastructure for personalized artwork recommendations`,
    textColor: "#d9d9d9",
    link: "",
    linkText: "Watch Video",
    linkImage: "/Image/Video Recording icon.svg",
  },
  {
    id: 8,
    logo: "/freshworks_logo.png",
    backgroundImage: "/Freshworks.jpg",
    backgroundColor: "#342960e6",
    text: `How Freshworks uses Conductor to execute hundreds of millions of workflows daily`,
    textColor: "#d9d9d9",
    link: "",
    linkText: "Read Case Study",
    linkImage: "/Image/Case Study icon.svg",
  },
];

const Customer: React.FC<CustomerProps> = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <Header />
      <section className="bg-[url(/Orkes-Customers_Page-World-Map.jpg)] bg-[50%_10%] bg-no-repeat bg-contain block">
        <div className="w-4/5 mx-auto flex_items_between max-lg:w-11/12 border border-red-500">
          <Customer_IntroSection
            title="The workflow orchestration platform powering the future of automation"
            subtitle="See how Orkes is transforming the way businesses of all sizes and industries are automating complex business workflows with Conductor."
            buttonData={ButtonData}
            sectionClass="pt-10 pb-0 px-32"
          />

          <section className="grid grid-cols-3 gap-8 py-10 px-28 max-xl:px-28 max-lg:grid-cols-1 max-lg:gap-20 max-sm:px-12">
            {data.map((item, index) => (
              <div
                key={index}
                className="text-center max-lg:w-2/3 max-lg:m-auto max-md:w-full"
              >
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <div
                    className={`${
                      index === 1 ? "border-x border-gray-200" : ""
                    } flex flex-col justify-center items-center gap-5`}
                  >
                    <div className="flex items-center justify-center rounded-full bg-white w-14 h-14 shadow-md">
                      <img
                        src={item.imgSrc}
                        alt="Logo"
                        className="w-auto h-9"
                      />
                    </div>

                    <h1
                      className={`text-6xl font-light ${item.color} border-gray-100`}
                    >
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={item.count}
                          duration={1}
                          separator=" "
                          decimals={index === 1 ? 2 : 3}
                          decimal=","
                          suffix=" + "
                          delay={0}
                        />
                      )}
                    </h1>
                    <p className="tracking-wide font-light">{item.label}</p>
                  </div>
                </ScrollTrigger>
              </div>
            ))}
          </section>

          {/*  */}
          <div className="grid grid-cols-2 gap-x-16 w-[90%] m-auto">
            {data1.map(
                    (
                      {
                        id,
                        label,
                        text,
                        logo,
                        backgroundImage,
                        backgroundColor,
                        textColor,
                        link,
                        linkText,
                      }) =>
                       (
                        <div
                          key={id}
                          className="h-[280px] w-full max-md:h-auto relative overflow-hidden pt-5 pb-8 px-3 my-8 rounded-2xl bg-repeat bg-[auto,cover] bg-center cursor-pointer hover:scale_shadow"
                          style={{ backgroundImage: `url(${backgroundImage})` }}
                        >
                          <div
                            className="h-full w-full absolute top-0 left-0"
                            style={{ backgroundColor: backgroundColor }}
                          ></div>
            
                          <div>
                           <div className="m-auto">
                              <img
                                src={logo}
                                alt="logo"
                                className="filter mt-5 px-5"
                                width={id === 1 || id === 3 || id === 7 ? 170 : id === 5 ? 150 : 240}
                              />
                            </div>
                            <div className="w-full relative px-5 text-white max-lg:w-full">
                              <p className="tracking-normal font-light my-2">
                                {text}
                              </p>
                             
                              <p className="absolute bottom-[1] right-0" >
                                {linkText}
                              </p>
                            </div>
                            
                          </div>
                        </div>
                      )
                  )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Customer;
