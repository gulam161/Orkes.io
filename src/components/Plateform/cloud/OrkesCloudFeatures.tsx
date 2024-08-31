import React from "react";
import Security_BG from "../../../../public/Orkes-Cloud-Page-Assets_Security-BG_v2_B.png";
import bg from "../../../../public/Orkes-Cloud-Page-Assets_Security-BG_artwork.png";

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
          className="h-80 px-10 py-5 overflow-hidden flex justify-between items-center max-md:flex-col-reverse rounded-2xl bg-cover shadow-md"
          style={{ backgroundImage: `url(${Security_BG})` }}
        >
          <div className="w-3/5 flex flex-col justify-center items-start gap-4">
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
            src={bg}
            alt="Security_BG"
            className="absolute w-[60%] inset-auto right-[0%] contain-size"
          />
        </div>
      </section>
    </>
  );
};
export default OrkesCloudFeatures;
