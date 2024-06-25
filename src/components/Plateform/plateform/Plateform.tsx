import React from "react";
import Header from "../../Navigation/Header";
import HeroPage_2 from "./HeroPage_2";

type PlateformProps = {};

const Plateform: React.FC<PlateformProps> = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto flex_items_between">
        <HeroPage_2 />
      </div>
    </>
  );
};
export default Plateform;
