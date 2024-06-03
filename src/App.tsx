import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default App;
