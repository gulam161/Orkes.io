import React from "react";
import { Link } from "react-router-dom";

type TimelineProps = {};
const data = [
  {
    id: 1,
    logo: "/UWM_Logo_BW_White.png",
    backgroundImage: "/UWM-BG-Image.jpg",
    backgroundColor: "int-purple/85",
    text: `"I can't stress enough how much Orkes Cloud has helped us over the past year to get our microservices efforts off the ground and accelerate this process. And our development teams love Orkes because they can quickly make the microservices they need. Our development teams can automate anything they want. It's very empowering,"`,
    label:
      "– Andy French, AVP of Platform Automation, United Wholesale Mortgage",
    textColor: "#cdccff",
    link: "",
    linkText: "Read the Full Story",
  },
  {
    id: 2,
    logo: "/Foxtel_logo_white.svg",
    backgroundImage: "/Foxtel-BG-Image.jpg",
    backgroundColor: "int-red/85",
    text: `“Orkes has been instrumental in increasing developer agility, creating cost efficiencies, and building highly reliable and secure applications. We’re so impressed with the results that we are migrating more workflows from other platforms to Orkes and initiating all flows on Orkes.”`,
    label: "– Thisara Alawala, Lead Architect, Foxtel",
    textColor: "#f4a2ab",

    link: "",
    linkText: "Watch the Full Video",
  },
  {
    id: 3,
    logo: "/Collective_cropped-White.png",
    backgroundImage: "/Collective-BG-Image.jpg",
    backgroundColor: "int-brown/85",
    text: `“Thanks to Orkes Conductor, we can continue to focus on building our workflows. And because it’s all hosted in Orkes Cloud, we don’t have to think about building and maintaining the orchestration engine ourselves. We can focus on creating an exceptional customer experience and optimizing our margins,”`,
    label: "– Chintan Shah, VP of engineering at Collective",
    textColor: "#ffeab6",
    link: "",
    linkText: "Read the Full Story",
  },
  {
    id: 4,
    logo: "/Normalyze_logo.svg",
    backgroundImage: "/Normalyze-BG-Image.jpg",
    backgroundColor: "int-gray/85",
    text: `“We didn't want data management; we wanted a powerful microservice orchestration engine. After a careful analysis, Normalyze chose Conductor delivered by Orkes Cloud.”`,
    label: "– Ravi Ithal, Founder & CTO, Normalyze",
    textColor: "#d9d9d9",
    link: "",
    linkText: "Read the Full Story",
  },
];

const Timeline: React.FC<TimelineProps> = () => {
  return (
    <section className="">
      <div className="w-[83%] m-auto my-8">
        {data.map(
          ({
            id,
            label,
            text,
            logo,
            backgroundImage,
            backgroundColor,
            textColor,
            link,
            linkText,
          }) => (
            <div
              key={id}
              className="h-[420px] relative overflow-hidden flex flex-row pt-5 pb-8 px-3 rounded-2xl bg-repeat bg-[auto,cover] bg-center grid_shaddow"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div
                className={`bg-${backgroundColor} h-full w-full absolute top-0 left-0`}
              ></div>

              <div className="flex ">
                <div className="w-1/2 relative px-5">
                  <p className="text-white text-justify leading-8 tracking-wide font-light my-2">
                    {text}
                  </p>
                  <p className={`text-${textColor} mt-5`}>{label}</p>
                  <Link
                    to={link}
                    className="button px-3 mt-6 inline-block text-white border-[#ed5668] bg-[#ed5668] hover:mb-0.5"
                  >
                    {linkText}
                  </Link>
                </div>
                <div className="m-auto text-white">
                  <img
                    src={logo}
                    alt="UMW_logo"
                    className="filter"
                    width={240}
                  />
                </div>
              </div>
            </div>
          )
        )}
        <div className=""></div>
      </div>
    </section>
  );
};
export default Timeline;
