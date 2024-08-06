import React from "react";
import Header from "../../Navigation/Header";
import HeroPage_2 from "./HeroPage_2";
import Standard_Section from "../../HomePage/Standard_Section";
import Workflow_engine from "./Workflow_engine";
import ConductorWorks from "./ConductorWorks";

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
    </>
  );
};
export default Plateform;
