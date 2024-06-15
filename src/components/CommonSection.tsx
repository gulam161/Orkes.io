import React, { useState } from "react";
import { Link } from "react-router-dom";

type CommonSectionProps = {
  heading: string;
  subheading: string;
  description: string;
  link?: string;
  linkText?: string;
  buttons: string[];
  images: string[];
  listItems?: string[];
  isReverse?: boolean;
};

const CommonSection: React.FC<CommonSectionProps> = ({
  heading,
  subheading,
  description,
  link,
  linkText,
  buttons,
  images,
  listItems,
  isReverse,
}) => {
  const [active, setActive] = useState(0);

  return (
    <section
      className={`flex ${
        isReverse && "flex-row-reverse"
      } border border-gray-200 text-gray-700 rounded-xl shadow-md my-32`}
    >
      <div
        className={`p-9 w-1/2 ${
          listItems
            ? "bg-gray-100 rounded-r-xl shadow-lg"
            : "bg-gray-100 rounded-l-xl shadow-lg"
        }`}
      >
        <h4 className="text-[#189ed3] text-sm mb-1">{subheading}</h4>
        <h1 className="text-4xl font-medium mb-4">{heading}</h1>
        <p className="font-light tracking-wide mb-10">{description}</p>
        {link && linkText && (
          <Link
            to={link}
            className="button px-8 text-white border-[#ed5668] bg-[#ed5668]"
          >
            {linkText}
          </Link>
        )}
        {listItems && (
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
            {listItems.map((item, idx) => (
              <li key={idx} className="font-light tracking-wide mb-2">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-9 w-1/2">
        <div className="border w-4/5 mx-auto grid grid-cols-2 rounded-full">
          {buttons.map((label, idx) => (
            <button
              key={label}
              className={`py-2 ${
                active === idx
                  ? "bg-purple-900 text-white"
                  : "bg-white text-black"
              } rounded-${idx === 0 ? "l" : "r"}-full`}
              //  ${
              //       idx === 0 ? "rounded-l-full" : idx === buttons.length - 1 ? "rounded-r-full" : ""
              //     }
              onClick={() => setActive(idx)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <img
            src={images[active]}
            alt={`${buttons[active]}_Diagram`}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
export default CommonSection;
