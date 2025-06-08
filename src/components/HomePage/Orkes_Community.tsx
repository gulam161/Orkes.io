import React from "react";
import Slack_Icon from "../../assets/Logo/Slack Icon.svg";
import Git_Icon from "../../assets/Logo/Github_Logo.svg";
import Calender_Icon from "../../assets/Logo/Event_Calender_Icon.svg";
import { Link } from "react-router-dom";

const Comunities = [
  {
    link: "/",
    icon: Slack_Icon,
    text: "Join the Conductor Slack community",
  },
  {
    link: "/",
    icon: Git_Icon,
    text: "Check out the Conductor repository on Github",
  },
  {
    link: "/",
    icon: Calender_Icon,
    text: "Join us at one of our Events",
  },
];

type Orkes_CommunityProps = {};

const Orkes_Community: React.FC<Orkes_CommunityProps> = () => {
  return (
    <section className="text-gray-800 my-20">
      <h1 className="text-4xl font-medium mb-4">Join the Orkes Community</h1>
      <p className="font-light w-3/4 mb-10 tracking-wide max-lg:w-10/12 max-md:w-full">
        Connect with, learn from and contribute to the active community of
        Conductor developers, architects and more. Post your questions, share
        your exciting use cases and help each other and be on the forefront of
        application orchestration!
      </p>

      <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1">
        {Comunities.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="border border-gray-300 rounded-xl flex items-center flex-col gap-4 text-center p-7 shadow-md max-lg:w-[50%] max-md:w-4/6 max-md:m-auto max-sm:w-10/12"
          >
            <img src={item.icon} alt={`${item.text} Icon`} width={50} />
            <p className="font-light">{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Orkes_Community;
