import React from "react";
import { Link } from "react-router-dom";

interface DataItem {
  id: number;
  src: string;
  alt: string;
  link?: string;
  lable?: string;
  title: string;
}

type Additional_Microservices_PageProps = {
  heading: string;
  data: DataItem[];
  linkComponent?: boolean;
};

const Additional_Microservices_Page: React.FC<
  Additional_Microservices_PageProps
> = ({ heading, data, linkComponent = false }) => {
  return (
    <section
      className={`${
        !linkComponent
          ? "p-10 mt-32 text-gray-800 border border-gray-300 rounded-xl shadow-lg max-sm:px-8"
          : "py-3"
      } text-center mb-32`}
    >
      <h1 className="text-4xl font-medium mb-10 max-md:px-4 max-md:text-3xl">
        {heading}
      </h1>

      <div className="px-6 grid grid-cols-3 gap-20 max-lg:grid-cols-1 max-sm:px-0">
        {data.map(({ id, src, alt, title, lable, link }) => {
          const content = (
            <>
              <img
                src={src}
                alt={alt}
                className="w-full rounded-xl shadow-lg max-lg:w-80 max-lg:m-auto"
              />
              {lable && (
                <p className="font-light text-sm text-gray-500 mt-3">{lable}</p>
              )}
              <h2 className={`${lable ? "my-1" : "mt-5"} text-xl font-medium`}>
                {title}
              </h2>
            </>
          );

          return (
            <div
              key={id}
              className={linkComponent ? "text-start max-lg:text-center" : ""}
            >
              {linkComponent ? (
                <Link
                  to={link ?? ""}
                  className="inline-block transition-transform hover:scale-[1.01] hover:text-blue-700"
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Additional_Microservices_Page;
