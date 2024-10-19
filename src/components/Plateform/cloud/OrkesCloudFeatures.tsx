import React from "react";
import ContentCard from "../../ContentCard";
import Cloud_Common from "./Cloud_Common";
import Orkes_Cloud_Page_BG_Clouds from "../../../../public/Orkes-Cloud-Page-BG_Clouds.png";
import OrkesStarterBanner from "../OrkesStarterBanner";
import Footer from "../../Footer";
import MissionCriticalAppBuilder from "../MissionCriticalAppBuilder";

const data = [
  {
    id: 1,
    imgSrc: "/Images/Flexible Deployment.svg",
    alt: "Flexible Deployment",
    heading: "Flexible Deployment",
    label:
      "End to end hosted by Orkes or fully contained in your footprint - Azure, AWS, GCP or your private cloud.",
  },
  {
    id: 2,
    imgSrc: "/Images/Effortlessly Scale.svg",
    alt: "Effortlessly Scale",
    heading: "Effortlessly Scale",
    label:
      "Handle that hockey-stick growth or rapid usage peaks with no action from your side. Orkes Cloud can easily scale to billions of workflows.",
  },
  {
    id: 3,
    imgSrc: "/Images/Dedicated Instances.svg",
    alt: "Dedicated Instances",
    heading: "Dedicated Instances",
    label:
      "Protect your workflows from the noise of other's workflows and better your security by isolating yourself from other's address space.",
  },
];

const EnterpriseCapabilities = [
  {
    id: 0,
    isStatic: true,
    heading: "All the capabilities you need",
    label:
      "Enterprise level features and add ons to ensure total observability and security of your clusters.",
  },
  {
    id: 1,
    imgSrc: "/Images/Secure Workflows.svg",
    alt: "Secure Workflows",
    heading: "Secure Workflows",
    label:
      "Package and reuse common workflows, tasks, integrations and more across your teams with Role Based Access Control. Assign granular permissions to User Groups and/or client or worker Applications, and safely store sensitive information with built-in secrets storage.",
  },
  {
    id: 2,
    imgSrc: "/Images/Single Sign On.svg",
    alt: "Single Sign On",
    heading: "Single Sign On",
    label:
      "Enhance your user experience, improve security, and increase your ease of compliance with SSO for Orkes Conductor clusters across multiple identity platforms like Okta, Azure Entra ID, and more.",
  },
  {
    id: 3,
    imgSrc: "/Images/Advanced Analytics.svg",
    alt: "Advanced Analytics",
    heading: "Advanced Analytics",
    label:
      "Identify workflow patterns across your distributed landscape and quickly resolve bottlenecks using built-in alerts that monitor hundreds of metrics. Additionally, export these metrics to your external analytics solutions for further analysis.",
  },
  {
    id: 4,
    imgSrc: "/Images/Tailored Orkes Hosted.svg",
    alt: "Tailored Orkes Hosted",
    heading: "Tailored Orkes Hosted",
    label:
      "Let Orkes do the DevOps heavy lifting with your choice of cloud provider and region. Including a dedicated VPC, Private Links, VPC Peering, and more.",
  },
  {
    id: 5,
    imgSrc: "/Images/Cluster Expansion.svg",
    alt: "Cluster Expansion",
    heading: "Cluster Expansion",
    label:
      "Pick and choose the right type of cluster for your usage and easily expand to accommodate high levels of growth with non-shared address space clusters.",
  },
];

const ExpertSupportHub = [
  {
    id: 1,
    imgSrc: "/Customer-Care_Thumbnail.jpg",
    alt: "Customer-Care_Thumbnail",
    heading: "Enterprise Customer Support",
    link: "",
    label:
      "Get the help you need when you need it. Access to our team of experts to assist in getting up and running, answering questions your pressing questions, and more all within our SLAs.",
  },
  {
    id: 2,
    imgSrc: "/New-Slack_Login.jpg",
    alt: "New-Slack_Login",
    heading: "Conductor Slack Community",
    link: "",
    label: `<p class="font-light">
        Connect and learn from the active community of Conductor developers, architects and more in our <a class="font-medium text-cyan-500 underline" href="">community slack channel</a> . Post your questions, share use cases and come together at the forefront of workflow orchestration.
      </p>
    `,
  },
  {
    id: 3,
    imgSrc: "/Docs_Screenshot.jpg",
    alt: "Docs_Screenshot",
    heading: "Dedicated Resources",
    link: "",
    label: `<p class="font-light">
        Check out our <a class="font-medium text-cyan-500 underline" href="">Docs</a> for getting started, use case examples, and references to our features and APIs. 
        For more on thought leadership, tutorials, and general product information, head on over to our 
        <a class="font-medium text-cyan-500 underline" href="">Blogs</a> and 
        <a class="font-medium text-cyan-500 underline" href="">YouTube channel</a>.
      </p>
    `,
  },
];

const OrkesCloudFeatures: React.FC = () => {
  return (
    <>
      <MissionCriticalAppBuilder
        title="Focus on building mission critical applications and we’ll handle the rest"
        data={data}
        isCentered={true}
      />

      {/* security posture Section */}
      <section className="pt-28 pb-16">
        <div
          className="security relative h-80 max-lg:h-72 max-md:h-[26rem] flex_between_center max-md:flex-col-reverse border border-gray-100 px-10 py-5 max-md:px-4 rounded-2xl shadow-md overflow-hidden bg-[auto,cover]"
          //   style={{ backgroundImage: `url(${Security_BG})` }}
        >
          <div className="w-3/5 relative max-md:z-10 max-md:w-auto max-md:items-center max-md:text-center flex flex-col justify-center items-start gap-4">
            <h2 className="text-3xl font-medium">
              Industry leading security posture
            </h2>
            <p className="font-light tracking-wide text-gray-800">
              Orkes Cloud upholds the highest standards in security with
              <span className="font-normal text-black">
                {" "}
                encrypted data at rest and in transit
              </span>
              , as well as multi-layer threat vector mitigations, and data
              protection features. Orkes Cloud is SOC II Type 2 certified.
            </p>
          </div>
          <img
            src="/Orkes-Cloud-Page-Assets_Security-BG_artwork.png"
            alt="Security_BG"
            className="absolute w-[70%] inset-auto right-[-15%] max-md:w-full max-md:inset-[-30vw_auto_auto]"
          />
        </div>
      </section>

      {/*Orkes-Cloud hosting options*/}
      <Cloud_Common
        bgImage={Orkes_Cloud_Page_BG_Clouds}
        imgSrc="/Orkes-Cloud-Page-Assets_Hosting_v2.png"
        imgAlt="Orkes-Cloud-Hosting"
        imgWidth="520"
        title="Preferred hosting options"
        description="Choose between an Orkes Hosted environment or a Customer Hosted environment with the option of having all of the compute and data stay on your cloud account and fully aligned with your security and compliance postures."
      />

      {/* All the capabilities need */}
      <ContentCard
        data={EnterpriseCapabilities}
        columns={2}
        headingClassName={"font-medium"}
        heading={""}
      />

      {/*Availability across  */}
      <div className="py-10 max-lg:py-0">
        <Cloud_Common
          bgImage=""
          imgSrc="/Orkes-Cloud-Page-Assets_Global-Availability.png"
          imgAlt="Orkes-Cloud-Global-Availability"
          imgWidth="640"
          title="Availability across the globe"
          description="Orkes Cloud supports multiple regions and zones across the world with up to 99.99% SLA. Choose the right configuration for your needs."
        />
      </div>

      {/* Enterprise support and a community */}
      <section className="p-10 my-16 text-center text-gray-800 bg-stone-100/80 border border-gray-300 rounded-xl shadow-lg max-sm:px-8 ">
        <h1 className="text-4xl font-medium px-28 mb-10 max-lg:px-8 max-md:px-4 max-md:text-3xl">
          Enterprise support and a community of experts at your service
        </h1>

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {ExpertSupportHub.map(({ id, imgSrc, alt, heading, label }) => {
            return (
              <div key={id} className="rounded-xl shadow-md bg-white">
                <img
                  src={imgSrc}
                  alt={alt}
                  className="w-full rounded-t-xl shadow-sm"
                />
                <div className="p-5 text-start">
                  <h2 className="text-lg font-semibold my-2">{heading}</h2>
                  <p
                    className="font-light"
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* started with Orkes Cloud */}
      <OrkesStarterBanner
        bgImage="/Orkes-Cloud-Page-BG_Clouds.png"
        heading="Get started with Orkes Cloud today"
        divClass="text-gray-700"
        headingClass="font-light text-3xl max-md:text-2xl mb-2"
      />
      <Footer />
    </>
  );
};
export default OrkesCloudFeatures;
