import React from "react";
import HeroSection from "../HeroSection";
// import skadb from "../../../../public";

type Api_OrchestrationProps = {};

const Api_Orchestration: React.FC<Api_OrchestrationProps> = () => {
  return (
    <div>
      <HeroSection
        heading="Realtime API Orchestration"
        subheading="Build highly performant and low latency APIs with backend calls across your multi-language distributed stack."
        description="Easily model the logic and components for your synchronous and asynchronous APIs using the orchestrated workflow pattern. Operate with extreme reliability and observability on the battle tested Open Source Conductor platform."
        imageSrc="/Real-time-API_Use_Case_Hero_Image.png"
        imageAlt="Real time API Use Case Hero Image"
        headingClass="text-cyan-500"
      />
    </div>
  );
};
export default Api_Orchestration;
