import React from "react";
import Buttons from "../../Buttons";

const ButtonData = [
  {
    to: "/sign-up",
    className: "border-[#ed5668]",
    lable_text: "Start Free Trial",
  },
  {
    to: "/talk-to-an-expert",
    className: "px-2 text-white border-[#ed5668] bg-[#ed5668]",
    lable_text: "Contact Sales",
  },
];

const Heropage_Artwork: React.FC = () => {
  return (
    <section className="text-center py-8">
      <h1 className="text-4xl font-medium text-black/90">Orkes Cloud</h1>
      <p className="text-xl font-light my-3 mx-auto tracking-wide">
        Deploy fully managed, dedicated Conductor instances on your preferred
        cloud provider.
      </p>
      <div className="flex justify-center">
        <Buttons ButtonData={ButtonData} />
      </div>
      <img
        src="/Orkes-Cloud-Page-Assets_Hero-Artwork.png"
        alt="Orkes-Cloud-Page-Assets_Hero-Artwork"
        className="mt-5 inline-block"
      />
    </section>
  );
};
export default Heropage_Artwork;
