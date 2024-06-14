import React from "react";
import CommonSection from "./CommonSection";
import Before_Diagram from "../assets/Before_Diagram.png";
import After_Diagram from "../assets/After_Diagram.png";

const Distributed: React.FC = () => {
  return (
    <CommonSection
      heading="Supercharge coding, scaling and observing distributed systems"
      subheading="10X YOUR VELOCITY"
      description="Orkes Conductor is the fastest way to build and modernize all your applications. Model your business logic as intuitively as you would in a whiteboard, code the components in the language and framework of your choice, run them at scale with no additional setups and observe across your distributed landscape - with enterprise grade security and manageability baked-in."
      link="#"
      linkText="Get Started"
      buttons={["Before", "After"]}
      images={[Before_Diagram, After_Diagram]}
    />
  );
};

export default Distributed;
