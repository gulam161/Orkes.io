import React from "react";
import ConductorPlatform from "../../HomePage/ConductorPlatform";
import HeroSection from "../HeroSection";
import FeatureHighlight from "../../FeatureHighlight";
import ContentCard from "../../ContentCard";

type MicroservicesProps = {};

const data = [
  {
    src: "/Images/Visualize your workflows.svg",
    alt: "visual_modeling_Yellow",
    title: "Visualize your workflows",
    items: [
      "Visually map out complex workflows with drag and drop definitions or write your own code.  Span your business logic across microservices in different languages, frameworks and clouds.",
    ],
  },
  {
    src: "/Images/Setup custom metrics and alerts.svg",
    alt: "Setup custom metrics and alerts",
    title: "Setup custom metrics and alerts",
    items: [
      "Track important metrics like number of workflows running, duration and completion rate, and setup custom alerts to be notified when failures have occured.",
    ],
  },
  {
    src: "/Images/Debug in minutes not days.svg",
    alt: "Debug in minutes not days",
    title: "Debug in minutes not days",
    items: [
      "Effortlessly identify points of failure within millions of workflows so you can test, iterate, and deploy a fix within minutes.",
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

const APIOrchestrationOverview = [
  {
    id: 1,
    imgSrc: "/Images/Write_choosing.svg",
    alt: "Write_choosing",
    heading: "Write your code in any language",
    label:
      "Workers can be implemented as microservices in multiple programming languages as well as in a combination of languages. Enable cross team sharing of workflow definition implementation or services without the need to rewrite or duplicate code.",
  },
  {
    id: 2,
    imgSrc: "/Images/Accelerate go-to-market.svg",
    alt: "Accelerate go-to-market",
    heading: "Accelerate go-to-market from month to days",
    label:
      "With simplified workflows, seamless retry functionality, and version-history control, deploying to production has never been easier.",
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
      "Package and reuse common functionalities across teams with Rules Based Access Control (RBAC)",
  },
  {
    id: 6,
    imgSrc: "/Images/Ensure secrets stay...secret.svg",
    alt: "Ensure secrets stay...secret",
    heading: "Ensure secrets stay...secret",
    label:
      "Securely store and use sensitive information in workflows without exposing it in the UI or compromising authentication tokens.",
  },
];

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
        <h1 className="text-[28px] font-light text-center mt-12 text-gray-600">
          Companies around the world build with Orkes
        </h1>
        <ConductorPlatform />
      </div>

      {/* MicroserviceFeatureOverview */}
      <FeatureHighlight
        subTitle=""
        title="Enterprise-grade features make building and scaling microservices driven applications easier and more secure than ever"
        BannerSrc={"/Mircroservices_BG-image_2.png"}
        BannerAlt="Mircroservices_BG-image_2"
        data={data}
      />

      {/* Microservices and API orchestration */}
      <section className="p-10 my-32 text-center text-gray-800 border border-gray-300 rounded-xl shadow-lg max-sm:px-8 ">
        <h1 className="text-4xl font-medium mb-10 max-md:px-4 max-md:text-3xl">
          Microservices and API orchestration on Orkes
        </h1>

        <div className="px-6 grid grid-cols-3 gap-20 max-lg:grid-cols-1 max-sm:px-0">
          {OrkesMicroservicesOrchestrator.map(({ id, src, alt, title }) => {
            return (
              <div key={id}>
                <img
                  src={src}
                  alt={alt}
                  className="w-full rounded-xl shadow-lg max-lg:w-80 max-lg:m-auto"
                />
                <h2 className="text-xl text-center font-medium my-5">
                  {title}
                </h2>
              </div>
            );
          })}
        </div>
      </section>

      {/* Microservices and API Orchestration */}
      <ContentCard
        data={APIOrchestrationOverview}
        columns={2}
        headingClassName={"font-medium"}
        heading={"Why Orkes for Microservices and API Orchestration"}
      />
    </section>
  );
};
export default Microservices;
