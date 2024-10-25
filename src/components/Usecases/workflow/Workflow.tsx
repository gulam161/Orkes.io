import React from "react";
import Header from "../../Navigation/Header";
import HeroSection from "../HeroSection";
import ConductorPlatform from "../../HomePage/ConductorPlatform";
import FeatureHighlight from "../../FeatureHighlight";
import ContentCard from "../../ContentCard";
import Timeline from "../../Plateform/platform/Timeline";
import Additional_Microservices_Page from "../Additional_Microservices_Page";
import Footer from "../../Footer";
import Usecases_Orkes_Starter_Banner from "../Usecases_Orkes_Starter_Banner";
import MissionCriticalAppBuilder from "../../Plateform/MissionCriticalAppBuilder";

type WorkflowProps = {};

const data = [
  {
    src: "/Images/Specialized Human Task.svg",
    alt: "Specialized Human Task",
    title: "Specialized Human Task Type",
    items: [
      "Easily model human actions and assignments in the same workflow that drives your backend services.",
    ],
  },
  {
    src: "/Images/Human Task Triggers.svg",
    alt: "Human Task Triggers",
    title: "Human Task Triggers",
    items: [
      "Trigger workflows based on state changes in an active human task. For example, automatically email the next assignee when an assignment is failed.",
    ],
  },
  {
    src: "/Images/Form creation.svg",
    alt: "Form creation",
    title: "Form creation",
    items: [
      "Design and create native forms within the UI for associated human actions and capture the data back in your workflow. Or integrate your own external forms.",
    ],
  },
  {
    src: "/Images/Flexible Assignment Policies.svg",
    alt: "Flexible Assignment Policies",
    title: "Flexible Assignment Policies",
    items: [
      "Bring your business processes into life by assigning humans and their groups for tasks and build SLA driven assignment chains.",
    ],
  },
  {
    src: "/Images/Observe and audit.svg",
    alt: "Observe and audit",
    title: "Observe and audit",
    items: [
      "Fine tune your processes and achieve compliance with the ability to observe and audit all human actions within your workflows.",
    ],
  },
];

const OrkesMicroservicesOrchestration = [
  {
    id: 1,
    imgSrc: "/Images/Approval workflows.svg",
    alt: "Approval workflows",
    heading: "Approval workflows",
    label:
      "Create simple or complex workflows that require human input for the approval of business processes like document verification or mortgage approvals.",
  },
  {
    id: 2,
    imgSrc: "/Images/AI assisted copilots.svg",
    alt: "AI assisted copilots",
    heading: "AI assisted copilots",
    label:
      "Build copilots that harness the power of LLMs generate insights over large volumes of data to assist humans in complex decision making.",
  },

  {
    id: 3,
    imgSrc: "/Images/Workforce process automation.svg",
    alt: "Workforce process automation",
    heading: "Workforce process automation",
    label:
      "Construct dynamic workflows to automate processes with human actions like employee onboarding  and customer support.",
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

const AdditionalResources = [
  {
    id: 1,
    src: "/AI-Blog.jpg",
    alt: "AI-Blog",
    lable: "BLOG",
    title:
      "Harness the Power of Gen AI in Your Applications - Introducing AI Orchestration and Human Tasks in Orkes Conductor",
  },
  {
    id: 2,
    src: "/Human-task-Documentation.png",
    alt: "Human-task-Documentation",
    lable: "VIDEO",
    title: "Orchestrating Human Tasks with Conductor",
  },
];

const Workflow: React.FC<WorkflowProps> = () => {
  return (
    <>
      <Header />
      <section className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
        <HeroSection
          heading="Human Workflow Orchestration"
          subheading="Integrate and optimize human actions into your workflows"
          description="Effortlessly incorporate human actions into your workflows with native support for features like human task assignment policies, state-change triggers, and built-in forms."
          imageSrc="/Human-Task_Hero_Image.png"
          imageAlt="Human-Task_Hero_Image"
          headingClass="text-teal-400"
          AdditionalHeading="Companies around the world build with Orkes"
          ConductorPlatform={<ConductorPlatform />}
        />

        {/* MicroserviceFeatureOverview */}
        <FeatureHighlight
          title="Bring human actions into your workflows with built in capabilities"
          BannerSrc={"/Human-Task_UseCase_BG-Image.png"}
          BannerAlt="Human-Task_UseCase_BG-Image"
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
export default Workflow;
