import React from "react";
import Header from "../Navigation/Header";
import Microservices from "./microservices/Microservices";

type MicroServices_PageProps = {};

const MicroServices_Page: React.FC<MicroServices_PageProps> = () => {
  return (
    <>
      <Header />
      <div className="">
        <Microservices />
      </div>
    </>
  );
};
export default MicroServices_Page;
