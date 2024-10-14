import React from "react";
import Header from "../../Navigation/Header";
import HeroSection from "../HeroSection";
import FeatureHighlight from "../../FeatureHighlight";
import Additional_Microservices_Page from "../Additional_Microservices_Page";

type AI_ChainingProps = {};

const logos = [
  { src: "/Images/Open AI.svg", alt: "Open AI", size: "130" },
  { src: "/Images/Azure Open AI.svg", alt: "Azure Open AI", size: "215" },
  { src: "/Pinecone-AI.png", alt: "Pinecone-AI", size: "160" },
  {
    src: "/Images/Weaviate_2023_logo.svg",
    alt: "Weaviate_2023_logo",
    size: "170",
  },
  { src: "/Images/Hugging Face AI.svg", alt: "Hugging Face AI", size: "180" },
];

const data = [
  {
    src: "/Images/LLM-12.svg",
    alt: "LLM-12-01",
    title: "Infuse Gen-AI into your business logic",
    items: [
      "Harness the power of Large Language Models easily into your app, with a developer first approach.",
    ],
  },
  {
    src: "/Images/Retrieval Augmented Generation.svg",
    alt: "Retrieval Augmented Generation",
    title: "Retrieval Augmented Generation (RAG) made easy",
    items: [
      "Integrate vector databases, AI models and more in the same workflow to build powerful RAG business flows.",
    ],
  },

  {
    src: "/Images/Prompt Engineering.svg",
    alt: "Prompt Engineering",
    title: "Prompt engineering for developers",
    items: [
      "Enable collaborative AI application development to build and test prompts while securely sharing across teams.",
    ],
  },
];

const OrkesMicroservicesOrchestrator = [
  {
    id: 1,
    src: "/Financial-transaction-reconciliation.jpg",
    alt: "Financial-transaction-reconciliation",
    title: "Financial transaction reconciliation",
  },
  {
    id: 2,
    src: "/Video-transcoding-pipelines.jpg",
    alt: "Video-transcoding-pipelines",
    title: "Video transcoding pipelines",
  },
  {
    id: 3,
    src: "/Cloud-infrastructure-automation.jpg",
    alt: "Cloud-infrastructure-automation",
    title: "Cloud infrastructure automation",
  },
];

const AI_Chaining: React.FC<AI_ChainingProps> = () => {
  return (
    <>
      <Header />
      <section className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
        <HeroSection
          heading="AI and LLM Chaining"
          subheading="Supercharge your workflows with AI"
          description="Seamlessly weave in Large Language Models, Prompt Templates and Vector Database Integrations into your business workflows."
          imageSrc="/AI_Chaining_Hero_Image.png"
          imageAlt="AI_Chaining_Hero_Image"
          headingClass="text-rose-500"
          // AdditionalHeading=""
          // ConductorPlatform={}
        />
        <section className="flex_between_center w-full h-36 relative overflow-hidden pb-8">
          <div className="w-full flex items-center justify-evenly">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.size}
              />
            ))}
          </div>
        </section>

        {/* event driven architecture with Orkes */}
        <FeatureHighlight
          title="Amplify your efficiency with Gen AI powered Workflow Orchestration"
          BannerSrc={"/Gen-Ai-teaser-Illustrations.png"}
          BannerAlt="Gen-Ai-teaser-Illustrations"
          bg_Color={true}
          data={data}
        />

        {/* Microservices and API orchestration */}
        <Additional_Microservices_Page
          heading="Microservices and API orchestration on Orkes"
          data={OrkesMicroservicesOrchestrator}
        />
      </section>
    </>
  );
};
export default AI_Chaining;
