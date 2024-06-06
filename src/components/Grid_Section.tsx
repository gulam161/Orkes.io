import React from "react";
import bg_Grid from "../assets/bg-Grid.png";
import { Link } from "react-router-dom";
import foxtel_logo from "../assets/Logo/foxtel-logo.svg";
import UWM_Logo from "../assets/Logo/UWM_Logo.png";
import Collective_Logo from "../assets/Logo/collective-logo.png";
const data = [
  {
    id: 1,
    content:
      "“Orkes has been instrumental in increasing developer agility, creating cost efficiencies, and building highly reliable and secure applications.”",
    img_Src: foxtel_logo,
    alt: "foxtel_logo",
    width: "110",
    lable:
      "Hear from Foxtel & how they speed the creation and scaling of distributed workflows, applications and microservices.",
    link: "",
    link_text: "Watch Webinar",
  },
  {
    id: 2,
    content:
      "“Our development teams love Orkes because they can quickly make the microservices they need. Our development teams can automate anything they want. It's very empowering...”",
    img_Src: UWM_Logo,
    alt: "UWM_Logo",
    width: "100",
    lable:
      "Hear from Foxtel & how they speed the creation and scaling of distributed workflows, applications and microservices.",
    link: "",
    link_text: "Watch Webinar",
  },
  {
    id: 3,
    content:
      '"Conductor is designed to be flexible and built specifically for event orchestration. This means our workflows are flexible, scalable, and maintainable"',
    img_Src: Collective_Logo,
    alt: "Collective_Logo",
    width: "150",
    lable:
      "Hear from Foxtel & how they speed the creation and scaling of distributed workflows, applications and microservices.",
    link: "",
    link_text: "Watch Webinar",
  },
];

type Grid_SectionProps = {};

const Grid_Section: React.FC<Grid_SectionProps> = () => {
  return (
    <section className="bg-clip-content py-5 relative  text-gray-600">
      <img
        src={bg_Grid}
        alt="Background grid image"
        className="absolute w-screen mb-[-39px] top-auto bottom-[0%] left-[0%] right-[0%]"
      />
      <div className="grid grid-cols-3 p-20 gap-10 ">
        {data.map(
          ({ id, content, img_Src, alt, width, lable, link, link_text }) => {
            return (
              <div
                key={id}
                className="border border-gray-300 px-4 py-8 rounded-xl flex flex-col gap-8 hover:shadow-xl"
              >
                <p className="w-full font-light tracking-wide leading-8 border-b border-gray-400 h-64">
                  {content}
                </p>

                <div className="relative">
                  <img src={img_Src} alt={alt} width={width} />
                  <p className="py-0 tracking-wide">{lable}</p>
                  <Link
                    to={link}
                    className="text-[#189ed3] flex gap-3 items-center absolute bottom-[-10]"
                  >
                    {link_text}
                    <span className="flex items-center mt-2 ">
                      <span className="h-0.5 w-10 bg-[#13afe4]"></span>
                      <span className="border-t-[1.5px] border-r-[1.5px] border-[#189ed3] w-3 h-3 ml-[-13px] rotate-45"></span>
                    </span>
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Grid_Section;
