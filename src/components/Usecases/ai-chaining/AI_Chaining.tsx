import React from "react";
import Header from "../../Navigation/Header";
import HeroSection from "../HeroSection";
import FeatureHighlight from "../../FeatureHighlight";
import MissionCriticalAppBuilder from "../../Plateform/MissionCriticalAppBuilder";
import ContentCard from "../../ContentCard";
import Timeline from "../../Plateform/platform/Timeline";
import Usecases_Orkes_Starter_Banner from "../Usecases_Orkes_Starter_Banner";

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
    alt: "LLM-12",
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

const OrkesMicroservicesOrchestration = [
  {
    id: 1,
    imgSrc: "/Images/Document Intelligence.svg",
    alt: "Document Intelligence",
    heading: "Document Intelligence",
    label:
      "Develop document workflows to automate mundane tasks, enhance data extraction, and derive richer insights from both structured and unstructured document data.",
  },
  {
    id: 2,
    imgSrc: "/Images/AI Generated Synopsis.svg",
    alt: "AI Generated Synopsis",
    heading: "AI Generated Synopsis",
    label:
      "Accelerate production times with a workflow to AI generate content synopsis across different genres and languages.",
  },

  {
    id: 3,
    imgSrc: "/Images/Marketing Automation.svg",
    alt: "Marketing Automation",
    heading: "Marketing Automation",
    label:
      "Create a simple workflow to identify your top percentile of customers and send them custom AI generated promotional emails and coupons.",
  },
];

const API_AI_Integration = [
  {
    id: 1,
    imgSrc: "/Images/Write_choosing.svg",
    alt: "Write_choosing",
    heading: "Write your code in any language",
    label:
      "Task workers can be written in multiple programming languages including mixing and matching languages in the same workflow.",
  },
  {
    id: 2,
    imgSrc: "/Images/Accelerate go-to-market.svg",
    alt: "Accelerate go-to-market",
    heading: "Accelerate go-to-market from month to days",
    label:
      "With the powerful workflow creation UI, re-usability of workflows and worker tasks, and version-history control, ideation to production has never been easier.",
  },
  {
    id: 3,
    imgSrc:
      "/Images/Deploy on your preference of cloud provider and location.svg",
    alt: "Deploy on your preference of cloud provider and location",
    heading: "Deploy on your preferred cloud provider and on-prem",
    label:
      "Run on AWS, Azure, or GCP hosted by Orkes, on your cloud, or on-prem.",
  },
  {
    id: 4,
    imgSrc: "/Images/Infinitely scale to teams.svg",
    alt: "Infinitely scale to teams",
    heading: "Infinitely scale to accommodate other teams and business growth",
    label:
      "Orkes Conductor is battle tested and equipped to handle whatever workload thrown at it from thousands to millions of workflows.",
  },
  {
    id: 5,
    imgSrc: "/Images/Secure collaboration across teams.svg",
    alt: "Secure collaboration across teams and functions",
    heading: "Secure collaboration across teams and functions",
    label:
      "Tailor access controls of AI models, prompt templates, vector DBs and more to specific teams, ensuring organizational data privacy with Role Based Access Control (RBAC).",
  },
  {
    id: 6,
    imgSrc: "/Images/Ensure secrets stay...secret.svg",
    alt: "Ensure secrets stay...secret",
    heading: "Preserve enterprise grade security and compliance",
    label:
      "Ensure the security, auditablity and safety, of AI interactions with built-in logging and auditing features",
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
        <div className="my-32">
          <MissionCriticalAppBuilder
            title="Microservices and API orchestration on Orkes"
            data={OrkesMicroservicesOrchestration}
            isCentered={false}
          />
        </div>

        {/* Microservices and API Orchestration */}
        <ContentCard
          data={API_AI_Integration}
          columns={2}
          headingClassName={"font-medium"}
          heading={
            "Build applications that span across microservices, APIs, AI models and human tasks"
          }
        />

        <div className="mt-32">
          <Timeline />
        </div>

        {/* Start building with orkes */}
        <Usecases_Orkes_Starter_Banner />
      </section>
    </>
  );
};
export default AI_Chaining;
