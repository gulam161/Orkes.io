import React from "react";
import Header from "../../Navigation/Header";
import HeroPage_2 from "./HeroPage_2";
import Standard_Section from "../../HomePage/Standard_Section";
import Workflow_engine from "./Workflow_engine";
import ConductorWorks from "./ConductorWorks";
import Orkes_Integrations from "./Orkes_Integrations";
import Timeline from "./Timeline";
import Priced_Scale from "./Priced_Scale";

type PlateformProps = {};

const Plateform: React.FC<PlateformProps> = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
        <HeroPage_2 />
        <Standard_Section />
        <Workflow_engine />
      </div>
      <ConductorWorks />
      <Orkes_Integrations />
      <Timeline />
      <Priced_Scale />
    </>
  );
};
export default Plateform;
