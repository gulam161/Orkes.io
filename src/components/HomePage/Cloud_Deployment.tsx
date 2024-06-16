import React from "react";
import CommonSection from "./CommonSection";
import Orkes_Cloud_Hosted from "../../assets/Orkes-Cloud-Artwork_Orkes_Hosted.png";
import Orkes_Cloud_Hosted_v3 from "../../assets/Orkes-Cloud-Artwork_Orkes-Hosted_v3.png";

const Cloud_Deployment: React.FC = () => {
  return (
    <CommonSection
      heading="Flexible cloud deployment options with built-in enterprise grade security & governance"
      subheading="ENTERPRISE READY CLOUD"
      description=""
      buttons={["Orkes Hosted", "Customer Hosted"]}
      images={[Orkes_Cloud_Hosted, Orkes_Cloud_Hosted_v3]}
      listItems={[
        "Fully managed Orkes Conductor clusters where you want them",
        "End to end hosted by Orkes or fully contained in your footprint - Azure, AWS, GCP or your private cloud",
        "Native and granular access control for workflows, tasks, secrets, AI models, prompts and more along with Single Sign On authentication",
        "Obtain superior security posture with audit logs for cluster actions, AI model interactions and task level activities.",
      ]}
      isReverse
    />
  );
};

export default Cloud_Deployment;
