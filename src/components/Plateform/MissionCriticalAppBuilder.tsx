import React from "react";
interface dataItem {
  [Key: string]: string | number;
  // id: number;
  // imgSrc: string;
  // alt: string;
  // label: string;
  // heading: string;
}

type MissionCriticalAppBuilderProps = {
  title: string;
  data: dataItem[];
  isCentered: boolean;
};

const MissionCriticalAppBuilder: React.FC<MissionCriticalAppBuilderProps> = ({
  title,
  data,
  isCentered,
}) => {
  return (
    <section
      className={`p-10 my-5 text-center text-gray-800 border border-gray-300 rounded-xl shadow-lg max-sm:px-8 ${
        isCentered ? "bg-zinc-100" : "bg-white"
      }`}
    >
      <h1
        className={`${
          isCentered ? "px-28" : "text-center"
        } text-4xl font-medium mb-10 max-lg:px-8 max-md:px-4 max-md:text-3xl`}
      >
        {title}
      </h1>

      <div
        className={`grid grid-cols-3 max-md:grid-cols-1 ${
          isCentered ? "gap-6" : "gap-10"
        }`}
      >
        {data.map(({ id, imgSrc, alt, heading, label }) => (
          <div
            key={id}
            className={`${
              isCentered
                ? "text-start bg-white shadow-md"
                : "bg-zinc-100 grid_shaddow"
            } p-6 bg-white rounded-xl`}
          >
            <img
              src={String(imgSrc)}
              alt={String(alt)}
              width={70}
              className={!isCentered ? "m-auto" : ""}
            />
            <h2 className="text-lg font-semibold my-2">{heading}</h2>
            <p className="font-light">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MissionCriticalAppBuilder;
