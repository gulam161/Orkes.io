import React, { useEffect, useRef, useState } from "react";
import Header from "../Navigation/Header";
import IntroSection from "../IntroSection";
import CountUp from "react-countup";
import OrkesStarterBanner from "../Plateform/OrkesStarterBanner";
import Footer from "../Footer";
import { useInView } from "motion/react";

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
    count: 12,
    color: "text-purple-700",
    label: "Companies using Conductor",
  },
  {
    imgSrc: "/Images/Developers.svg",
    count: 10,
    color: "text-sky-600",
    label: "Orkes Developers",
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
    linkText: "Read Case Study",
    linkImage: "/Images/Case Study icon.svg",
  },

  {
    id: 2,
    logo: "/Collective_cropped-White.png",
    backgroundImage: "/Collective-BG-Image.jpg",
    backgroundColor: "#0c80adba",
    text: `Collective accelerates nationwide service launch across 37 states by automating complex workflows`,
    linkText: "Read Case Study",
    linkImage: "/Images/Case Study icon.svg",
  },
  {
    id: 3,
    logo: "/Foxtel_logo_white.svg",
    backgroundImage: "/Foxtel-BG-Image.jpg",
    backgroundColor: "#af2e47ba",
    text: `Foxtel modernizes operations, boosting reliability, efficiency, and developer velocity to drive company growth and expansion`,
    linkText: "Read Case Study",
    linkImage: "/Images/Case Study icon.svg",
  },
  {
    id: 4,
    logo: "/Normalyze_logo.svg",
    backgroundImage: "/Normalyze-BG-Image.jpg",
    backgroundColor: "#313435e0",
    text: `Normalyze reduces debugging time by 90%, achieving rapid issue resolution with Orkes Conductor on Orkes Cloud`,
    linkText: "Read Case Study",
    linkImage: "/Images/Case Study icon.svg",
  },
  {
    id: 5,
    logo: "/SPI-logistics_logo.png",
    backgroundImage: "/SPI-Logistics.jpg",
    backgroundColor: "#51290bd4",
    text: `SPI Logistics accelerates digital transformation and streamlines operations with Orkes Conductor`,
    linkText: "Read Case Study",
    linkImage: "/Images/Case Study icon.svg",
  },
  {
    id: 6,
    logo: "/Florence_logo.png",
    backgroundImage: "/Florence.jpg",
    backgroundColor: "#11775ccc",
    text: `Florence Healthcare accelerates clinical trials by streamlining workflows and infrastructure with Orkes Conductor`,
    linkText: "Read Case Study",
    linkImage: "/Images/Case Study icon.svg",
  },
  {
    id: 7,
    logo: "/Netflix_logo.png",
    backgroundImage: "/Netflix.jpg",
    backgroundColor: "#7c1f31ab",
    text: `Netflix uses Conductor to power machine learning infrastructure for personalized artwork recommendations`,
    linkText: "Watch Video",
    linkImage: "/Images/Video Recording icon.svg",
  },
  {
    id: 8,
    logo: "/freshworks_logo.png",
    backgroundImage: "/Freshworks.jpg",
    backgroundColor: "#342960e6",
    text: `How Freshworks uses Conductor to execute hundreds of millions of workflows daily`,
    linkText: "Read the article",
    linkImage: "/Images/dbedd_Blog icon.svg",
  },
];

const Customer: React.FC<CustomerProps> = () => {
  const [counterOn, setCounterOn] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setCounterOn(true);
    } else {
      setCounterOn(false);
    }
  }, [isInView]);

  return (
    <>
      <Header />
      <section className="bg-[url(/Orkes-Customers_Page-World-Map.jpg)] bg-[50%_10%] bg-no-repeat bg-contain block">
        <div className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
          <IntroSection
            title="The workflow orchestration platform powering the future of automation"
            subtitle="See how Orkes is transforming the way businesses of all sizes and industries are automating complex business workflows with Conductor."
            buttonData={ButtonData}
            sectionClass="pt-10 pb-0 px-32 max-lg:px-16 max-md:px-0 max-sm:px-0"
          />

          <section className="grid grid-cols-3 gap-8 my-3 py-10 px-28  max-lg:grid-cols-1 max-xl:px-0 max-lg:px-0 max-md:px-0 max-sm:px-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="text-center max-lg:w-11/12 max-lg:m-auto  max-md:w-full"
              >
                <div ref={ref}>
                  <div
                    className={`${
                      index === 1
                        ? "px-8 border-x border-gray-200 max-lg:border-x-0 max-lg:py-10 max-lg:border-y-2 max-md:border-y-1"
                        : ""
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
                      className={`text-6xl font-extralight ${item.color} border-gray-100`}
                    >
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={item.count}
                          duration={1}
                          separator=" "
                          decimals={index === 0 ? 2 : 3}
                          decimal=","
                          suffix=" + "
                          delay={0}
                        />
                      )}
                    </h1>
                    <p className="tracking-wide font-light">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/*  */}
          <div className="grid grid-cols-2 gap-x-[72px] w-[92%] m-auto mt-12 max-lg:grid-cols-1">
            {data1.map(
              ({
                id,
                text,
                logo,
                backgroundImage,
                backgroundColor,
                linkText,
                linkImage,
              }) => (
                // <div
                //   key={id}
                //   className=" w-full relative overflow-hidden py-8 px-4 my-8 rounded-2xl bg-repeat bg-[auto,cover] bg-center cursor-pointer hover:scale_shadow hover:custumers-cta"
                //   style={{ backgroundImage: `url(${backgroundImage})` }}
                // >
                //   <div
                //     className="h-full w-full absolute top-0 left-0"
                //     style={{ backgroundColor: backgroundColor }}
                //   ></div>

                //   <div className="flex flex-col items-start justify-between flex-1">
                //     <div className="">
                //       <img
                //         src={logo}
                //         alt="logo"
                //         className="filter mb-5 px-5"
                //         width={
                //           id === 1 || id === 3 || id === 7
                //             ? 170
                //             : id === 5
                //             ? 150
                //             : 240
                //         }
                //       />
                //     </div>
                //     <div className="w-full relative px-5 text-white max-lg:w-full">
                //       <p className="tracking-normal font-light my-2">{text}</p>

                //       <div className={`flex items-center gap-3 justify-end`}>
                //         <p className="text-[#d9d9d9]">{linkText}</p>
                //         <img src={linkImage} alt="Case Study icon" width={30} />
                //       </div>
                //     </div>
                //   </div>
                // </div>

                <a
                  key={id}
                  href="/"
                  className="w-inline-block no-underline w-full  relative overflow-hidden py-8 px-4 my-8 rounded-2xl bg-repeat bg-[auto,cover] bg-center cursor-pointer hover:scale_shadow"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                  <div
                    className="h-full w-full absolute top-0 left-0"
                    style={{ backgroundColor: backgroundColor }}
                  ></div>

                  <div className="gap-2 text-white text-left rounded-[12px] flex flex-col flex-1 justify-between items-start shadow-md">
                    <div className="">
                      <img
                        src={logo}
                        alt="logo"
                        className="filter mb-5 px-5"
                        width={
                          id === 1 || id === 3 || id === 7
                            ? 170
                            : id === 5
                            ? 150
                            : 240
                        }
                      />

                      <p className="font-light px-5 mb-5 relative text-white">
                        {text}
                      </p>
                    </div>
                    <div className="gap-3 text-[var(--light-steel-blue)] justify-start self-end items-center no-underline transition-transform duration-200 flex transform-gpu">
                      <p>{linkText}</p>
                      <img
                        src={linkImage}
                        loading="lazy"
                        alt="Case study logo"
                        width={30}
                      />
                    </div>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* started with Orkes Cloud */}
      <OrkesStarterBanner
        bgImage="/Orkes-Customers-Page_CTA.jpg"
        heading="Start building with orkes today"
        divClass="text-gray-700 gap-1.5 bg-[4px]"
        headingClass="font-light text-3xl max-md:text-2xl mb-2"
      />
      <div className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
        <Footer />
      </div>
    </>
  );
};
export default Customer;
