import React from "react";

type Standard_SectionProps = {};

const data = [
  { count: "7,000", color: "text-blue-700", label: "Orkes Developers" },
  {
    count: "1,200",
    color: "text-blue-400",
    label: "Companies using Conductor",
  },
  { count: "11,000", color: "text-red-600", label: "Github Stars" },
];

const Standard_Section: React.FC<Standard_SectionProps> = () => {
  return (
    <section className="grid grid-cols-3 gap-8 py-10 px-36 max-xl:px-28 max-lg:grid-cols-1 max-lg:gap-20 max-sm:px-12">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-center max-lg:w-2/3 max-lg:m-auto max-md:w-full"
        >
          <h1
            // max-lg:text-6xl max-lg:pb-8
            className={`text-5xl font-medium ${item.color} pb-6 border-b-2 border-gray-100 `}
          >
            <span>{item.count}</span> +
          </h1>
          {/* max-lg:text-lg max-lg:pt-4*/}
          <p className="tracking-wide font-light pt-4">{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Standard_Section;
