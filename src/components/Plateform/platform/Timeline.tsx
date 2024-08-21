import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UWM_Logo from "../../../assets/Logo/UWM_Logo.png";
import foxtel_logo from "../../../assets/Logo/foxtel-logo.svg";
import collective from "../../../assets/Logo/collective-logo.png";
import normalyze_Black from "../../../assets/Logo/normalyze_Black.svg";

type TimelineProps = {};

const data = [
  {
    id: 1,
    logo: "/UWM_Logo_BW_White.png",
    backgroundImage: "/UWM-BG-Image.jpg",
    backgroundColor: "#342960bd",
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
    backgroundColor: "#561827a8",
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
    backgroundColor: "#231307a8",
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
    backgroundColor: "#313435a8",
    text: `“We didn't want data management; we wanted a powerful microservice orchestration engine. After a careful analysis, Normalyze chose Conductor delivered by Orkes Cloud.”`,
    label: "– Ravi Ithal, Founder & CTO, Normalyze",
    textColor: "#d9d9d9",
    link: "",
    linkText: "Read the Full Story",
  },
];

const logos = [
  { src: UWM_Logo, alt: "UWM_Logo", width: "130" },
  { src: foxtel_logo, alt: "foxtel_logo", width: "140" },
  { src: collective, alt: "collective_logo", width: "190" },
  { src: normalyze_Black, alt: "normalyze_Black", width: "180" },
];

const Timeline: React.FC<TimelineProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((preInd) => (preInd + 1) % data.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // const progress = document.getElementById("progress");
  // let percent = 0;

  // const progressBar = setInterval(() => {
  //   percent++;
  //   if (progress) {
  //     progress.style.width = percent;
  //   }
  //   if (percent === 100) {
  //     clearInterval(progressBar); // Clear interval when percent reaches 100
  //   }
  // }, 100);
  // const {
  //   label,
  //   text,
  //   logo,
  //   backgroundImage,
  //   backgroundColor,
  //   textColor,
  //   link,
  //   linkText,
  // } = data[currentIndex];

  return (
    <section className="">
      <div className="w-10/12 mx-auto max-lg:w-11/12 max-md:w-[94]">
        {data.map(
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
            },
            i
          ) =>
            i === currentIndex && (
              <div
                key={id}
                className="h-[420px] w-full max-md:h-auto relative overflow-hidden flex flex-row pt-5 pb-8 px-3 my-8 rounded-2xl bg-repeat bg-[auto,cover] bg-center grid_shaddow"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                <div
                  className={`h-full w-full absolute top-0 left-0 `}
                  style={{ backgroundColor: backgroundColor }}
                ></div>

                <div className="flex max-lg:flex-col-reverse">
                  <div className="w-1/2 relative px-5 max-lg:w-full">
                    <p className="text-white text-justify leading-8 tracking-wide font-light my-2">
                      {text}
                    </p>
                    <p className="mt-5" style={{ color: textColor }}>
                      {label}
                    </p>
                    <Link
                      to={link}
                      className="text-sm text-center py-2 px-3 rounded-full border-2  mt-6 inline-block text-white border-[#ed5668] bg-[#ed5668] hover:ml-0.5 hover:grid_shaddow"
                    >
                      {linkText}
                    </Link>
                  </div>
                  <div className="m-auto h-[120px]">
                    <img
                      src={logo}
                      alt="logo"
                      className={`${
                        i === 0 || i === 1
                          ? "max-lg:w-[200px] max-md:w-[180px]"
                          : ""
                      } filter mt-5`}
                      width={`${i === 2 ? 280 : 240}`}
                    />
                  </div>
                </div>
              </div>
            )
        )}
        <div className="grid grid-cols-4 gap-2 place-items-stretch mb-4 max-md:grid-cols-2">
          {logos.map((logo, index) => (
            <div
              onClick={() => setCurrentIndex(index)}
              className={`${
                index === 0 ? "py-0" : "py-5"
              } w-full h-full flex justify-center items-center place-self-center border-b-[1px]`}
            >
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                className={`${
                  index === currentIndex
                    ? "filter-none"
                    : "filter cursor-pointer"
                } ${
                  index === 0
                    ? "max-lg:w-[100px] max-md:w-[120px] max-sm:w-[90px]"
                    : index === 1
                    ? "max-lg:w-[120px] max-md:w-[130px] max-sm:w-[90px]"
                    : " max-sm:w-[120px]"
                }`}
              />
              {/* <div className="logotab-progress-bar" id="progress"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Timeline;
