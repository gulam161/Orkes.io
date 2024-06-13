import React, { useState } from "react";
import Orkes_Cloud_Hosted from "../assets/Orkes-Cloud-Artwork_Orkes_Hosted.png";
import Orkes_Cloud_Hosted_v3 from "../assets/Orkes-Cloud-Artwork_Orkes-Hosted_v3.png";

type Cloud_DeploymentProps = {};

const Cloud_Deployment: React.FC<Cloud_DeploymentProps> = () => {
  const [active, setActive] = useState(true);

  return (
    <section className="grid grid-cols-2 border border-gray-200 text-gray-700 rounded-xl shadow-md my-20">
      <div className="p-8">
        <div className="border w-4/5 mx-auto grid grid-cols-2 rounded-full">
          {["Orkes Hosted", "Customer Hosted"].map((label, idx) => (
            <button
              key={label}
              className={`py-2 ${
                active === (idx === 0)
                  ? "bg-purple-900 text-white"
                  : "bg-white text-black"
              } rounded-${idx === idx ? "l" : "r"}-full`}
              onClick={() => setActive(idx === 0)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <img
            src={active ? Orkes_Cloud_Hosted : Orkes_Cloud_Hosted_v3}
            alt={`${active ? "Orkes Hosted" : "Customer Hosted"}_Diagram`}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="p-8  bg-gray-100 rounded--xl shadow-lg">
        <h4 className="text-blue-800 text-sm mb-1">ENTERPRISE READY CLOUD</h4>
        <h1 className="text-4xl font-medium mb-4">
          Flexible cloud deployment options with built-in enterprise grade
          security & governance
        </h1>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
          <li className="font-light tracking-wide mb-2">
            Fully managed Orkes Conductor clusters where you want them
          </li>
          <li className="font-light tracking-wide mb-2">
            End to end hosted by Orkes or fully contained in your footprint -
            Azure, AWS, GCP or your private cloud
          </li>
          <li className="font-light tracking-wide mb-2">
            Native and granular access control for workflows, tasks, secrets, AI
            models, prompts and more along with Single Sign On authentication
          </li>
          <li className="font-light tracking-wide mb-2">
            Obtain superior security posture with audit logs for cluster
            actions, AI model interactions and task level activities.
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Cloud_Deployment;
