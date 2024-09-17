import React from "react";

type ContentCardProps = {
  data: (
    | {
        id: number;
        isStatic: boolean;
        heading: string;
        label: string;
        imgSrc?: undefined;
        alt?: undefined;
      }
    | {
        id: number;
        imgSrc: string;
        alt: string;
        heading: string;
        label: string;
        isStatic?: undefined;
      }
  )[];
  isStatic: boolean;
  columns: number;
  width: boolean;
};

const ContentCard: React.FC<ContentCardProps> = ({
  data,
  isStatic,
  columns,
  width,
}) => {
  return (
    <section
      className={`${
        width ? "w-5/6 mx-auto" : ""
      } p-10 my-14 text-center text-gray-800 bg-stone-100/80 border border-gray-300 rounded-xl shadow-lg max-sm:px-6`}
    >
      <div
        className={`grid grid-cols-${columns} gap-10 max-md:grid-cols-1 max-sm:gap-8`}
      >
        {/* {data.map(({ id, imgSrc, alt, heading, label }) =>
          isStatic ? (
            <div key={id} className="flex flex-col gap-2 justify-center">
              <h1 className="text-[32px] font-medium max-md:text-3xl">
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
          )
        )} */}
        {data.map(({ id, isStatic, imgSrc, alt, heading, label }) => {
          return isStatic ? (
            <div key={id} className="flex flex-col gap-2 justify-center">
              <h1
                className={`${
                  width ? "font-light text-start" : ""
                }text-[32px] font-medium max-md:text-3xl`}
              >
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
