import React from "react";
import ConductorPlatform from "../../HomePage/ConductorPlatform";
import HeroSection from "../HeroSection";

type MicroservicesProps = {};

const Microservices: React.FC<MicroservicesProps> = () => {
  return (
    <section>
      <HeroSection
        heading="Microservices Workflow Orchestration"
        subheading="Build and scale distributed applications with high levels of observability, security, and durability"
        description={`Easily model and scale your business logic and processes using a 
    <span class="font-medium text-cyan-500">durable workflow execution model.</span> 
    Use your new and existing services (in any language) and APIs as the runtime of your workflows.`}
        imageSrc="/Use-Case-Page-Hero_image.png"
        imageAlt="Use Case Page Hero"
        headingClass="text-purple-700"
      />
      {/*  */}

      <div>
        <h1 className="text-3xl font-light text-center mt-12 text-gray-700">
          Companies around the world build with Orkes
        </h1>
        <ConductorPlatform />
      </div>
    </section>
  );
};
export default Microservices;
