import React from "react";
// import Security_BG from "../../../../public/Orkes-Cloud-Page-Assets_Security-BG_v2_B.png";
import Orkes_Cloud_Page_BG_Clouds from "../../../../public/Orkes-Cloud-Page-BG_Clouds.png";

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

const OrkesCloudFeatures: React.FC = () => {
  return (
    <>
      <section className="p-10 my-5 text-center text-gray-800 bg-stone-100/80 border border-gray-300 rounded-xl shadow-lg max-sm:px-8 ">
        <h1 className="text-4xl font-medium px-28 mb-10 max-lg:px-8 max-md:px-4 max-md:text-3xl">
          Focus on building mission critical applications and we’ll handle the
          rest
        </h1>

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {data.map(({ id, imgSrc, alt, heading, label }) => {
            return (
              <div
                key={id}
                className="p-6 text-start bg-white rounded-xl shadow-md "
              >
                <img src={imgSrc} alt={alt} width={70} />
                <h2 className="text-lg font-semibold my-2">{heading}</h2>
                <p className="font-light">{label}</p>
              </div>
            );
          })}
        </div>
      </section>

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
      <section
        className="flex_between_center max-lg:flex-col py-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${Orkes_Cloud_Page_BG_Clouds})` }}
      >
        <img
          src="/Orkes-Cloud-Page-Assets_Hosting_v2.png"
          //   /Orkes-Cloud-Page-Assets_Global-Availability.png
          alt="Orkes-Cloud-Hosting"
          className="w-1/2 max-md:w-full"
        />
        <div className="text-gray-700 max-lg:text-center max-lg:px-20 max-md:px-8">
          <h2 className="text-4xl font-medium mb-4 text-gray-800">
            Prefered hosting options
          </h2>
          <p className="font-light tracking-wide ">
            Choose between an Orkes Hosted environment or a Customer Hosted
            environment with the option of having all of the compute and data
            stay on your cloud account and fully aligned with your security and
            compliance postures.
          </p>
        </div>
      </section>

      {/* All the capabilities need */}

      <section className="p-10 my-14 text-center text-gray-800 bg-stone-100/80 border border-gray-300 rounded-xl shadow-lg max-sm:px-6 ">
        <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 max-sm:gap-8">
          {EnterpriseCapabilities.map(
            ({ id, isStatic, imgSrc, alt, heading, label }) => {
              return isStatic ? (
                <div key={id} className="flex flex-col gap-2 justify-center">
                  <h1 className="text-[32px] font-medium max-md:text-3xl">
                    {heading}
                  </h1>
                  <p className="text-xl font-light">{label}</p>
                </div>
              ) : (
                <div
                  key={id}
                  className="p-5 text-start bg-white rounded-xl shadow-md"
                >
                  <img src={imgSrc} alt={alt} width={70} />
                  <h2 className="text-lg font-semibold my-2">{heading}</h2>
                  <p className="font-light">{label}</p>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/*Availability across  */}
      <section className="flex_between_center max-lg:flex-col py-5 bg-cover bg-center">
        <img
          src="/Orkes-Cloud-Page-Assets_Global-Availability.png"
          alt="Orkes-Cloud-Global-Availability"
          className="max-md:w-full"
          width={640}
        />
        <div className="w-1/2 text-gray-700 max-lg:text-center max-lg:px-20 max-md:px-8">
          <h2 className="text-4xl font-medium mb-4 text-gray-800">
            Availability across the globe
          </h2>
          <p className="font-light tracking-wide ">
            Orkes Cloud supports multiple regions and zones across the world
            with up to 99.99% SLA. Choose the right configuration for your
            needs.
          </p>
        </div>
      </section>
    </>
  );
};
export default OrkesCloudFeatures;
