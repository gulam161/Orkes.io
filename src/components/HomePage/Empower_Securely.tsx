import React from "react";
import Coding_Artwork from "../../assets/Coding-Artwork.png";
import FeatureHighlight from "../FeatureHighlight";

type Empower_SecurelyProps = {};

const data = [
  {
    src: "/Images/visual_modeling_Yellow.svg",
    alt: "visual_modeling_Yellow",
    title: "Code + visual modeling > Supercharged developers",
    items: [
      "Innovate faster than ever before with world class design and runtime visualizations",
      "Code the core foundations of your application on your terms - any language, any framework, any cloud",
    ],
  },
  {
    src: "/Images/Write_choosing.svg",
    alt: "Write_choosing",
    title:
      "Write workflows as code, build task workers, integrate other applications",
    items: [
      "SDKs in multiple languages - Java, Python, C#, Typescript, Clojure and more",
      "Write your workflows as code in the language of your choice. Start with code, tune with the visual designer and go back and forth - it's your choice!",
      "Build task workers for your workflow components to run externally as microservices, serverless functions or anywhere else you deploy",
    ],
  },
  {
    src: "/Images/Secure Collaboration.svg",
    alt: "Secure_Collaboration",
    title: "Secure collaboration across teams and functions",
    items: [
      "Package and reuse common functions across multiple teams",
      "Built-in access controls for control and visibility across your organization",
    ],
  },
];

const Empower_Securely: React.FC<Empower_SecurelyProps> = () => {
  return (
    <FeatureHighlight
      subTitle="EMPOWER SECURELY"
      title="Create and collaborate – visually, in code or both"
      BannerSrc={Coding_Artwork}
      BannerAlt="Coding_Artwork"
      data={data}
      // isSpace={false}
    />
  );
};
export default Empower_Securely;
