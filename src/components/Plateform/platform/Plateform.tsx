import React from "react";
import Header from "../../Navigation/Header";
import HeroPage_2 from "./HeroPage_2";
import Standard_Section from "../../HomePage/Standard_Section";

type PlateformProps = {};

const Plateform: React.FC<PlateformProps> = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto flex_items_between">
        <HeroPage_2 />

        <Standard_Section />
      </div>
    </>
  );
};
export default Plateform;
