import React from "react";
import Header from "./Navigation/Header";
import HeroSection from "./HeroSection";
import Orchestration_Platform from "./Orchestration_Platform";
import Grid_Section from "./Grid_Section";
import Standard_Section from "./Standard_Section";
import Distributed from "./Distributed";
import Empower_Securely from "./Empower_Securely";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto flex_items_between">
        <HeroSection />
        <Orchestration_Platform />
        <Grid_Section />
        <Standard_Section />
        <Distributed />
        <Empower_Securely />
      </div>
    </>
  );
};
export default Home;
