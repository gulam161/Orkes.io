import React from "react";

type Standard_SectionProps = {};

const data = [
  { count: "7,000", color: "text-blue-700", label: "Orkes Developers" },
  {
    count: "12,000",
    color: "text-blue-400",
    label: "Companies using Conductor",
  },
  { count: "11,000", color: "text-red-600", label: "Github Stars" },
];

const Standard_Section: React.FC<Standard_SectionProps> = () => {
  return (
    <section className="grid grid-cols-3 gap-8 px-36">
      {data.map((item, index) => (
        <div key={index} className="text-center">
          <h1
            className={`text-5xl font-semibold ${item.color} pb-6 border-b border-gray-400`}
          >
            <span>{item.count}</span> +
          </h1>
          <p className="tracking-wide font-light pt-4">{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Standard_Section;
