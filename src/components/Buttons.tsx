import React from "react";
import { Link } from "react-router-dom";

type ButtonsProps = {
  text?: string;
  link?: string;
  to: string;
};

const ButtonData = [
  {
    to: "/sign-up",
    className: "border-[#ed5668]",
    lable_text: "Start Free Trial",
  },
  {
    to: "/talk-to-an-expert",
    className: "px-2 text-white border-[#ed5668] bg-[#ed5668]",
    lable_text: "Contact Sales",
  },
];

const Buttons: React.FC<ButtonsProps> = ({ text, link }) => {
  return (
    <div className="flex gap-4 capitalize mt-5 text-sm max-xs:flex-col">
      {ButtonData.map(({ to, className, lable_text }, index) => (
        <Link
          key={index}
          to={index === 1 && link ? link : to}
          className={`button scale_button ${className}`}
        >
          {index === 1 && text ? text : lable_text}{" "}
        </Link>
      ))}
    </div>
  );
};

export default Buttons;
