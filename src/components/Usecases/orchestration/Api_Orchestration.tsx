import React from "react";
import HeroSection from "../HeroSection";
import Header from "../../Navigation/Header";
import FeatureHighlight from "../../FeatureHighlight";
import Additional_Microservices_Page from "../Additional_Microservices_Page";
import Timeline from "../../Plateform/platform/Timeline";
import Usecases_Orkes_Starter_Banner from "../Usecases_Orkes_Starter_Banner";
import Footer from "../../Footer";
import ContentCard from "../../ContentCard";
import ConductorPlatform from "../../HomePage/ConductorPlatform";

type Api_OrchestrationProps = {};

const data = [
  {
    src: "/Images/Synchronous Execution.svg",
    alt: "Synchronous_Execution",
    title: "Synchronous Execution",
    items: [
      "Build backend workflows leveraging the best out of your distributed landscape. Open Source SDKs for all the popular langauges making coding your API components easy and intuitive.",
    ],
  },
  {
    src: "/Images/Span across languages and tech stacks.svg",
    alt: "Span across languages and tech stacks",
    title: "Span across languages and tech stacks",
    items: [
      "Integrate vector databases, AI models and more in the same workflow to build powerful RAG business flows.",
    ],
  },
  {
    src: "/Images/Observe deep and wide.svg",
    alt: "Observe deep and wide",
    title: "Observe deep and wide",
    items: [
      "See how every component that makes up your API is performing. Dive deep into issues with the powerful visual interface and detailed metrics and logs",
    ],
  },
];

const OrkesRealtimeOrchestrator = [
  {
    id: 1,
    src: "/Customer-Signups.jpg",
    alt: "Customer-Signups",
    title: "Financial transaction reconciliation",
  },
  {
    id: 2,
    src: "/Payment-Processing.jpg",
    alt: "Payment-Processing",
    title: "Video transcoding pipelines",
  },
  {
    id: 3,
    src: "/Ecommerce-Checkout.jpg",
    alt: "Ecommerce-Checkout",
    title: "Cloud infrastructure automation",
  },
];

const APIOrchestrationOverview = [
  {
    id: 1,
    imgSrc: "/Images/Write_choosing.svg",
    alt: "Write_choosing",
    heading: "Write in any language of your choosing",
    label:
      "Workers can be implemented as microservices in multiple programming languages as well as in a combination of languages. Enable cross team sharing of workflow definition implementation or services without the need to rewrite or duplicate code.",
  },
  {
    id: 2,
    imgSrc: "/Images/Accelerate go-to-market.svg",
    alt: "Accelerate go-to-market",
    heading: "Accelerate deployment from months to minutes",
    label:
      "With simplified workflows, seamless retry functionality, and version-history control, deploying your APIs to production has never been easier.",
  },
  {
    id: 3,
    imgSrc: "/Images/See everything.svg",
    alt: "See everything",
    heading: "See everything. Miss nothing",
    label:
      "Quickly see API level and component level performance and error metrics. Identify and quickly resolve bottlenecks and pressure areas in your backend workflow.",
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
    imgSrc:
      "/Images/Deploy on your preference of cloud provider and location.svg",
    alt: "Deploy on your preference of cloud provider and location",
    heading: "Deploy on your preferred cloud provider and on-prem",
    label:
      "Run on AWS, Azure, or GCP hosted by Orkes, on your cloud, or on-prem.",
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

const Api_Orchestration: React.FC<Api_OrchestrationProps> = () => {
  return (
    <>
      <Header />
      <section className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
        <HeroSection
          heading="Realtime API Orchestration"
          subheading="Build highly performant and low latency APIs with backend calls across your multi-language distributed stack."
          description="Easily model the logic and components for your synchronous and asynchronous APIs using the orchestrated workflow pattern. Operate with extreme reliability and observability on the battle tested Open Source Conductor platform."
          imageSrc="/Real-time-API_Use_Case_Hero_Image.png"
          imageAlt="Real time API Use Case Hero Image"
          headingClass="text-cyan-500"
          AdditionalHeading="Companies around the world build with Orkes"
          ConductorPlatform={<ConductorPlatform />}
        />

        {/* APIs real time with extreme */}
        <FeatureHighlight
          title="Make your APIs real time with extreme low latencies"
          BannerSrc={"/Real-time-API_Use_Case_API-Image.png"}
          BannerAlt="Real-time-API_Use_Case_API-Image"
          bg_Color={true}
          data={data}
        />

        {/* Realtime API orchestration */}
        <Additional_Microservices_Page
          heading="Realtime API orchestration on Orkes"
          data={OrkesRealtimeOrchestrator}
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
export default Api_Orchestration;
