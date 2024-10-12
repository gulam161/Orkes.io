import React from "react";
import Buttons from "../Buttons";
import bgImage from "../../../public/Start-CTA-Image.jpg";

type Usecases_Orkes_Starter_BannerProps = {};

const Usecases_Orkes_Starter_Banner: React.FC<
  Usecases_Orkes_Starter_BannerProps
> = () => {
  return (
    <section className="static grid grid-cols-2 my-20 rounded-2xl shadow-lg max-md:grid-cols-1">
      <div className="py-12 px-10 bg-zinc-100/60 rounded-l-2xl border border-gray-300 max-md:rounded-t-2xl max-md:rounded-bl-none max-sm:px-6">
        <h1 className="leading-10 text-4xl max-md:text-3xl font-medium mb-1">
          Start building with Orkes today
        </h1>
        <div className="mt-8">
          <Buttons text="See Docs" link="" />
        </div>
      </div>
      <div
        className="relative py-10 bg-center bg-cover rounded-r-2xl overflow-hidden max-md:h-60 max-md:rounded-b-2xl max-md:rounded-tr-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </section>
  );
};
export default Usecases_Orkes_Starter_Banner;
