import React from "react";
import Header from "../../Navigation/Header";
import HeroSection from "../HeroSection";
import FeatureHighlight from "../../FeatureHighlight";
import Additional_Microservices_Page from "../Additional_Microservices_Page";
import ContentCard from "../../ContentCard";
import Timeline from "../../Plateform/platform/Timeline";
import Usecases_Orkes_Starter_Banner from "../Usecases_Orkes_Starter_Banner";
import Footer from "../../Footer";

type Event_ArchitectureProps = {};

const data = [
  {
    src: "/Images/Event Tasks.svg",
    alt: "Event tasks",
    title: "Event tasks",
    items: [
      "Trigger events from your workflows to interface and share data from your execution with external systems like Kafka Topics.",
    ],
  },
  {
    src: "/Images/Wait_Tasks.svg",
    alt: "Wait tasks",
    title: "Wait tasks",
    items: [
      "Bring durability to your workflows with the ability to wait at any point within the execution. Wait tasks can wait for seconds, days, years, and more.",
    ],
  },
  {
    src: "/Images/Event handlers.svg",
    alt: "Event handlers",
    title: "Event handlers",
    items: [
      "Consume events from message queues to start new workflow executions and signal waiting tasks.",
    ],
  },
  {
    src: "/Images/Integrations.svg",
    alt: "Integrations",
    title: "Integrations",
    items: [
      "Seamlessly integrate with popular message queue providers like Confluent, Amazon MSK, Azure Service Bus, and more.",
    ],
  },
];

const OrkesEventWorkflows = [
  {
    id: 1,
    src: "/Supply-chain-automation.jpg",
    alt: "Supply-chain-automation",
    title: "Supply chain automation",
  },
  {
    id: 2,
    src: "/Retail-order-processing.jpg",
    alt: "Retail-order-processing",
    title: "Retail order processing",
  },
  {
    id: 3,
    src: "/Cyber-security-scanning,-detection.jpg",
    alt: "Cyber-security-scanning,-detection",
    title: "Cyber security scanning, detection, and mitigation",
  },
];

const AppBuilderOrchestrator = [
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
    src: "/Event-Driven-Orchestration-Graphics.jpg",
    alt: "Event-Driven-Orchestration-Graphics",
    link: "",
    lable: "BLOG",
    title: "Event Driven Architecture with Orkes Conductor",
  },
  {
    id: 2,
    src: "/Event-Driven-Thumbnail.png",
    alt: "Event-Driven-Thumbnail",
    link: "https://youtu.be/C6bH0koO2NQ",
    lable: "VIDEO",
    title: "Build Event Driven Distributed Applications with Conductor",
  },
  {
    id: 3,
    src: "/Event-Docs.jpg",
    alt: "Event-Docs",
    link: "",
    lable: "DOCS",
    title: "Event",
  },
];

const Event_Architecture: React.FC<Event_ArchitectureProps> = () => {
  return (
    <>
      <Header />
      <section className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
        <HeroSection
          heading="Event Driven Architecture"
          subheading="Build durable execution flows driven by events"
          description="Bring your asynchronous business workflows to life with built in message queue integrations, specialized task types and event handlers."
          imageSrc="/Event-Drive_UseCase_Hero_Image.jpg"
          imageAlt="Event-Drive_UseCase_Hero_Image"
          headingClass="text-cyan-500"
          videoLink="https://youtu.be/C6bH0koO2NQ"
        />

        {/* event driven architecture with Orkes */}
        <FeatureHighlight
          title="Harness the full potential of event driven architecture with Orkes"
          BannerSrc={"/EventDriven_UseCase_BG-image.png"}
          BannerAlt="EventDriven_UseCase_BG-image"
          bg_Color={true}
          data={data}
        />

        {/* Event driven workflow */}
        <Additional_Microservices_Page
          heading="Event driven workflows on Orkes"
          data={OrkesEventWorkflows}
        />

        {/* Build applications and Microservices*/}
        <ContentCard
          data={AppBuilderOrchestrator}
          columns={2}
          headingClassName={"font-medium leading-10"}
          heading={
            "Build applications that span across microservices, APIs, AI models and human tasks"
          }
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
export default Event_Architecture;
