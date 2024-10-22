import React from "react";

interface SectionData {
  id: number;
  heading: string;
  isStatic?: boolean;
  imgSrc?: string;
  alt?: string;
  label?: string;
}

type ContentCardProps = {
  heading: string;
  data: SectionData[];
  columns: number;
  headingClassName: string;
};

const ContentCard: React.FC<ContentCardProps> = ({
  heading,
  data,
  columns,
  headingClassName,
}) => {
  return (
    <section
      className={`w-full p-10 pt-5 my-16 text-center text-gray-800 bg-stone-100/80 border border-gray-300 rounded-xl shadow-lg max-sm:px-6`}
    >
      <h1 className="text-4xl font-medium mb-6 px-4">{heading}</h1>
      <div
        className={`grid grid-cols-${columns} gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:gap-8`}
      >
        {data.map(({ id, isStatic, imgSrc, alt, heading, label }) => {
          return isStatic ? (
            <div key={id} className="flex flex-col gap-2 justify-center">
              <h1 className={`${headingClassName} text-[32px] max-md:text-3xl`}>
                {heading}
              </h1>
              <p className="text-xl font-light">{label}</p>
            </div>
          ) : (
            <div
              key={id}
              className="p-5 text-start bg-white rounded-xl shadow-md"
            >
              <img src={imgSrc} alt={alt} width={70} />
              <h2 className="text-lg font-semibold my-2">{heading}</h2>
              <p className="font-light">{label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ContentCard;
