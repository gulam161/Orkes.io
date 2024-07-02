import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Plateform from "./components/Plateform/platform/Plateform";
import Cloud from "./components/Plateform/cloud/Cloud";
import Conductor_OSS from "./components/Plateform/conductor/Conductor_OSS";
import Microservices from "./components/Usecases/microservices/Microservices";
import Event_Architecture from "./components/Usecases/eventarchiteture/Event_Architecture";
import AI_Chaining from "./components/Usecases/ai-chaining/AI_Chaining";
import Workflow from "./components/Usecases/workflow/Workflow";
import Login from "./components/Auth/Login";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plateform" element={<Plateform />} />
      <Route path="/cloud" element={<Cloud />} />
      <Route path="/conductor-oss-vs-orkes" element={<Conductor_OSS />} />
      <Route
        path="/microservices-and-api-orchestration"
        element={<Microservices />}
      />
      <Route
        path="/event-driven-architecture"
        element={<Event_Architecture />}
      />
      <Route path="/ai-and-llm-chaining" element={<AI_Chaining />} />
      <Route path="/human-workflow-orchestration" element={<Workflow />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
