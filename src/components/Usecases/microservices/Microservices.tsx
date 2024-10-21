import React from "react";
import Header from "../../Navigation/Header";
import HeroSection from "../HeroSection";
import FeatureHighlight from "../../FeatureHighlight";
import ContentCard from "../../ContentCard";
import Timeline from "../../Plateform/platform/Timeline";
import Additional_Microservices_Page from "../Additional_Microservices_Page";
import Footer from "../../Footer";
import Usecases_Orkes_Starter_Banner from "../Usecases_Orkes_Starter_Banner";
import ConductorPlatform from "../../HomePage/ConductorPlatform";

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

const AdditionalResources = [
  {
    id: 1,
    src: "/Building-Applications-10x-faster.jpg",
    alt: "Building-Applications-10x-faster",
    lable: "BLOG",
    title: "Building Microservice-based Applications using Orkes Conductor",
  },
  {
    id: 2,
    src: "/Microservices-Pattern-Blog-Banner.jpg",
    alt: "Microservices-Pattern-Blog-Banner",
    lable: "BLOG",
    title: "4 Microservice Patterns Crucial in Microservices Architecture",
  },
  {
    id: 3,
    src: "/Foxtel-Webinar.jpg",
    alt: "Foxtel-Webinar",
    lable: "VIDEO",
    title: "How Foxtel Accelerates Microservices and Workflow Orchestration",
  },
];

const Microservices: React.FC<MicroservicesProps> = () => {
  return (
    <>
      <Header />
      <section className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
        <HeroSection
          heading="Microservices Workflow Orchestration"
          subheading="Build and scale distributed applications with high levels of observability, security, and durability"
          description={`Easily model and scale your business logic and processes using a 
    <span class="font-medium text-cyan-500">durable workflow execution model.</span> 
    Use your new and existing services (in any language) and APIs as the runtime of your workflows.`}
          imageSrc="/Use-Case-Page-Hero_image.png"
          imageAlt="Use Case Page Hero"
          headingClass="text-purple-700"
          AdditionalHeading="Companies around the world build with Orkes"
          ConductorPlatform={<ConductorPlatform />}
        />

        {/* MicroserviceFeatureOverview */}
        <FeatureHighlight
          title="Enterprise-grade features make building and scaling microservices driven applications easier and more secure than ever"
          BannerSrc={"/Mircroservices_BG-image_2.png"}
          BannerAlt="Mircroservices_BG-image_2"
          bg_Color={true}
          data={data}
        />

        {/* Microservices and API orchestration */}
        <Additional_Microservices_Page
          heading="Microservices and API orchestration on Orkes"
          data={OrkesMicroservicesOrchestrator}
        />

        {/* Microservices and API Orchestration */}
        <ContentCard
          data={APIOrchestrationOverview}
          columns={2}
          headingClassName={"font-medium"}
          heading={"Why Orkes for Microservices and API Orchestration"}
        />

        <div className="mt-32">
          <Timeline />
        </div>

        {/* Start building with orkes */}
        <Usecases_Orkes_Starter_Banner />

        {/* Additional Resources */}
        <Additional_Microservices_Page
          heading="Additional Resources"
          data={AdditionalResources}
          linkComponent={true}
        />
        <Footer />
      </section>
    </>
  );
};
export default Microservices;
