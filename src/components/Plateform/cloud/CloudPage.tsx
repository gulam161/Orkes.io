import React from "react";
import Header from "../../Navigation/Header";
import OrkesCloudFeatures from "./OrkesCloudFeatures";

type CloudPageProps = {};

const CloudPage: React.FC<CloudPageProps> = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto flex_items_between max-lg:w-11/12">
        <OrkesCloudFeatures />
      </div>
    </>
  );
};
export default CloudPage;
