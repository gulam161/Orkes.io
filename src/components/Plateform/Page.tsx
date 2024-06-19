import React from "react";
import Plateform from "./plateform/Plateform";
import Cloud from "./cloud/Cloud";
import Conductor_OSS from "./conductor/Conductor_OSS";

import { Routes, Route } from "react-router-dom";
type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Plateform />} />
        <Route path="/" element={<Cloud />} />
        <Route path="/" element={<Conductor_OSS />} />
      </Routes>
    </>
  );
};
export default Page;
