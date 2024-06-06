import React from "react";
import Header from "./Navigation/Header";
import HeroSection from "./HeroSection";
import Orchestration_Platform from "./Orchestration_Platform";
import Grid_Section from "./Grid_Section";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto flex_items_between">
        <HeroSection />
        <Orchestration_Platform />
        <Grid_Section />
      </div>
    </>
  );
};
export default Home;
