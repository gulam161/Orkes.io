import React from "react";
import bg_Grid from "../../assets/bg-Grid.png";
import { Link } from "react-router-dom";
import foxtel_logo from "../../assets/Logo/foxtel-logo.svg";
import UWM_Logo from "../../assets/Logo/UWM_Logo.png";
import Collective_Logo from "../../assets/Logo/collective-logo.png";
const data = [
  {
    id: 1,
    content:
      "“Orkes has been instrumental in increasing developer agility, creating cost efficiencies, and building highly reliable and secure applications.”",
    img_Src: foxtel_logo,
    alt: "foxtel_logo",
    width: "110",
    label:
      "Hear from Foxtel & how they speed the creation and scaling of distributed workflows, applications and microservices.",
    link: "",
    link_text: "Watch Webinar",
    margin_y: "my-4",
  },
  {
    id: 2,
    content:
      "“Our development teams love Orkes because they can quickly make the microservices they need. Our development teams can automate anything they want. It's very empowering...”",
    img_Src: UWM_Logo,
    alt: "UWM_Logo",
    width: "100",
    label:
      "Hear from Foxtel & how they speed the creation and scaling of distributed workflows, applications and microservices.",
    link: "",
    link_text: "Watch Webinar",
    margin_y: "my-0",
  },
  {
    id: 3,
    content:
      '"Conductor is designed to be flexible and built specifically for event orchestration. This means our workflows are flexible, scalabel, and maintainable"',
    img_Src: Collective_Logo,
    alt: "Collective_Logo",
    width: "150",
    label:
      "Hear from Foxtel & how they speed the creation and scaling of distributed workflows, applications and microservices.",
    link: "",
    link_text: "Watch Webinar",
    margin_y: "my-2",
  },
];

type Grid_SectionProps = {};

const Grid_Section: React.FC<Grid_SectionProps> = () => {
  return (
    <section className="bg-clip-content py-5 relative z-40  text-gray-600">
      <img
        src={bg_Grid}
        alt="Background grid image"
        className="absolute mb-[10px] z-10 top-auto bottom-0 left-0 right-0"
      />
      <div className="grid grid-cols-3 p-20 gap-10 max-lg:grid-cols-1 max-sm:p-8">
        {data.map(
          ({
            id,
            content,
            img_Src,
            alt,
            width,
            label,
            link,
            link_text,
            margin_y,
          }) => (
            <div
              key={id}
              className="border border-gray-300 px-4 py-4 rounded-xl  flex flex-col gap-8 hover:shadow-xl max-lg:rounded-lg"
            >
              <p className="w-full h-64 mt-4 font-light tracking-wide leading-8 border-b border-gray-400 max-lg:h-40 max-sm:h-64">
                {content}
              </p>

              <div>
                <img
                  src={img_Src}
                  alt={alt}
                  width={width}
                  className={margin_y}
                />
                <p className=" tracking-wide">{label}</p>

                <Link
                  to={link}
                  className="text-[#189ed3] flex gap-3 items-center mt-4 over"
                >
                  {link_text}
                  <span className="flex items-center mt-1  over_1">
                    <span className="h-0.5 w-10 bg-[#13afe4]"></span>
                    <span className="border-t-[1.5px] border-r-[1.5px] border-[#189ed3] w-3 h-3 ml-[-13px] rotate-45"></span>
                  </span>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
export default Grid_Section;
