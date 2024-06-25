import React from "react";
import Coding_Artwork from "../../assets/Coding-Artwork.png";
import visual_modeling_Yellow from "../../../public/Image/visual_modeling_Yellow.svg";
import Secure_Collaboration from "../../../public/Image/Secure Collaboration.svg";
import Write_choosing from "../../../public/Image//Write_choosing.svg";

type Empower_SecurelyProps = {};

const data = [
  {
    src: visual_modeling_Yellow,
    alt: "visual_modeling_Yellow",
    title: "Code + visual modeling > Supercharged developers",
    items: [
      "Innovate faster than ever before with world class design and runtime visualizations",
      "Code the core foundations of your application on your terms - any language, any framework, any cloud",
    ],
  },
  {
    src: Write_choosing,
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
    src: Secure_Collaboration,
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
    <section className="grid grid-cols-2 border border-gray-200 bg-gray-50 text-gray-700 rounded-xl shadow-md my-32">
      <div className="p-8">
        <h4 className="text-red-400 text-sm mb-1">EMPOWER SECURELY</h4>
        <h1 className="text-4xl font-medium mb-4">
          Create and collaborate – visually, in code or both
        </h1>

        <img src={Coding_Artwork} alt="Coding_Artwork" className="mx-auto" />
      </div>
      <div className="p-8">
        {data.map(({ src, alt, title, items }, index) => (
          <div
            className={`flex py-4 gap-6 items-start ${
              index === 2 ? "border-none" : "border-b border-gray-300"
            }`}
            key={alt}
          >
            <img src={src} alt={alt} width={70} />
            <div>
              <h1 className="text-xl font-medium mb-2">{title}</h1>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {items.map((item, idx) => (
                  <li key={idx} className="font-light tracking-wide mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Empower_Securely;
