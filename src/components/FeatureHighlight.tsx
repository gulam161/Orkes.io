import React from "react";

interface DataItem {
  src: string;
  alt: string;
  title: string;
  items: string[];
}

type FeatureHighlightProps = {
  subTitle?: string;
  title: string;
  BannerSrc: string;
  BannerAlt: string;
  bg_Color?: boolean;
  data: DataItem[];
};

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  subTitle,
  title,
  BannerSrc,
  BannerAlt,
  bg_Color,
  data,
}) => {
  return (
    <section
      className={`${
        bg_Color ? "bg-white" : "bg-zinc-50"
      } grid grid-cols-2 border border-gray-200 text-gray-700 rounded-xl shadow-md my-8 max-lg:grid-cols-1`}
    >
      <div className="p-8">
        <h4 className="text-red-400 text-sm mb-1">{subTitle}</h4>
        <h1 className="text-4xl font-medium mb-4">{title}</h1>

        <img src={BannerSrc} alt={BannerAlt} className="mx-auto" />
      </div>
      <div className="p-8">
        {data.map(({ src, alt, title, items }, index) => (
          <div
            className={`flex gap-6 items-start ${
              index === data.length - 1
                ? "border-none pt-6"
                : "py-6 border-b border-gray-300"
            } max-sm:flex-col max-sm:gap-3`}
            key={index}
          >
            <img src={src} alt={alt} width={70} className="max-sm:w-1/4" />
            <div className="font-light tracking-wide mb-2">
              <h1 className="text-xl font-medium mb-2">{title}</h1>
              {items.map((item, idx) =>
                items.length <= 1 ? (
                  <p key={idx}>{item}</p>
                ) : (
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li key={idx}>{item}</li>
                  </ul>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeatureHighlight;
