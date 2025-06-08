import React from "react";
import Header from "../Navigation/Header";
import HeroSection from "./HeroSection";
import Orchestration_Platform from "./Orchestration_Platform";
import Grid_Section from "./Grid_Section";
import Standard_Section from "./Standard_Section";
import Distributed from "./Distributed";
import Empower_Securely from "./Empower_Securely";
import Debug from "./Debug";
import Cloud_Deployment from "./Cloud_Deployment";
import Orkes_Community from "./Orkes_Community";
import Conductor_Clusters from "./Conductor_Clusters";
import Footer from "../Footer";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto flex_items_between max-xl:w-11/12">
        <HeroSection />
        <Orchestration_Platform />
        <Grid_Section />
        <Standard_Section />
        <Distributed />
        <Empower_Securely />
        <Debug />
        <Cloud_Deployment />
        <Orkes_Community />
        <Conductor_Clusters />
        <Footer />
      </div>
    </>
  );
};
export default Home;
