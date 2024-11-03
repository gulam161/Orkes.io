import React, { useState } from "react";
import Header from "../Navigation/Header";
import Customer_IntroSection from "../Customer_IntroSection";
import Standard_Section from "../HomePage/Standard_Section";
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

const Customer: React.FC<CustomerProps> = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <Header />
      <section className="bg-[url(/Orkes-Customers_Page-World-Map.jpg)] bg-[50%_10%] bg-no-repeat bg-contain block">
        <div className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
          <Customer_IntroSection
            title="The workflow orchestration platform powering the future of automation"
            subtitle="See how Orkes is transforming the way businesses of all sizes and industries are automating complex business workflows with Conductor."
            buttonData={ButtonData}
            sectionClass="pt-10 pb-0 px-32"
          />
          {/* <div>
            <Standard_Section />
          </div> */}

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
        </div>
      </section>
    </>
  );
};
export default Customer;
