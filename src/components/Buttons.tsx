import React from "react";
import { Link } from "react-router-dom";

type ButtonsProps = {};

const ButtonData = [
  { to: "/sign-up", className: "border-[#ed5668]", text: "Start Free Trial" },
  {
    to: "/talk-to-an-expert",
    className: "px-2 text-white border-[#ed5668] bg-[#ed5668]",
    text: "Contact Sales",
  },
];

const Buttons: React.FC<ButtonsProps> = () => {
  return (
    <div className="flex gap-4 capitalize mt-5 text-sm">
      {ButtonData.map(({ to, className, text }, index) => (
        <Link
          key={index}
          to={to}
          className={`button scale_button ${className}`}
        >
          {text}
        </Link>
      ))}
    </div>
  );
};
export default Buttons;
