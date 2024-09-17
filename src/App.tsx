import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Plateform_page from "./components/Plateform/platform/Page";
import CloudPage from "./components/Plateform/cloud/CloudPage";
import Conductor_OSS_page from "./components/Plateform/conductor/Conductor_Page";
import Microservices from "./components/Usecases/microservices/Microservices";
import Event_Architecture from "./components/Usecases/eventarchiteture/Event_Architecture";
import AI_Chaining from "./components/Usecases/ai-chaining/AI_Chaining";
import Workflow from "./components/Usecases/workflow/Workflow";
import Login from "./components/Auth/Login";
import Sign_Up from "./components/Auth/Sign-Up";
import Talk_To_An_Expert from "./components/Talk-To-An-Expert";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plateform" element={<Plateform_page />} />
      <Route path="/cloud" element={<CloudPage />} />
      <Route path="/conductor-oss-vs-orkes" element={<Conductor_OSS_page />} />
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
      <Route path="/auth-login" element={<Login />} />
      <Route path="/sign-up" element={<Sign_Up />} />
      <Route path="/talk-to-an-expert" element={<Talk_To_An_Expert />} />
    </Routes>
  );
};
export default App;
