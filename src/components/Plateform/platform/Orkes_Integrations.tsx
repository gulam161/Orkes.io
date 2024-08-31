import React from "react";
import Platform_Page_Integrations_v2 from "../../../assets/Platform-Page_Integrations_v2.jpg";

type Orkes_IntegrationsProps = {};

const Orkes_Integrations: React.FC<Orkes_IntegrationsProps> = () => {
  return (
    <section className="w-10/12 max-md:w-[97%] m-auto py-12 max-lg:py-12">
      <h1 className="text-3xl font-light text-center tracking-wide leading-10 text-gray-700 my-6 max-lg:px-4 max-lg:text-2xl">
        Orkes has integrations with major applications and SDKs for popular
        languages languages to make workflow and application development a
        seamless experience
      </h1>
      <img
        src={Platform_Page_Integrations_v2}
        alt={Platform_Page_Integrations_v2}
      />
    </section>
  );
};
export default Orkes_Integrations;
