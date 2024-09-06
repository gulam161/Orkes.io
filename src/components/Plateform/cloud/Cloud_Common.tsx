import React from "react";

type Cloud_CommonProps = {
  [key: string]: string;
};

const Cloud_Common: React.FC<Cloud_CommonProps> = ({
  bgImage,
  imgSrc,
  imgAlt,
  imgWidth,
  title,
  description,
}) => {
  return (
    <section
      className={`flex_between_center max-lg:flex-col py-5 bg-cover bg-center
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className="max-md:w-full"
        width={imgWidth}
      />

      <div className=" text-gray-700 max-lg:text-center max-lg:py-4 max-lg:px-20 max-md:px-0 max-sm:px-4">
        <h2 className="text-4xl font-medium mb-4 text-gray-800">{title}</h2>
        <p className="font-light tracking-wide">{description}</p>
      </div>
    </section>
  );
};
export default Cloud_Common;
