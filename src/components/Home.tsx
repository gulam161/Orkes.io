import React from "react";
import Header from "./Navigation/Header";
import HeroSection from "./HeroSection";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto flex_items_between">
        <HeroSection />
        {/* <HeroSection /> */}
      </div>
    </>
  );
};
export default Home;
