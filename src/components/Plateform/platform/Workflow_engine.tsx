import React from "react";
import Platform_Page_Workflow_left from "../../../assets/Platform-Page-_Workflow-engine-left-p-800.png";
import Platform_Page_Workflow_right from "../../../assets/Platform-Page-_Workflow-engine-right-p-800.png";

type Workflow_engineProps = {};

const Workflow_engine: React.FC<Workflow_engineProps> = () => {
  return (
    <section className="mx-auto my-12 flex w-[100%] h-[350px] rounded-xl grid_shaddow bg-gray-100 relative overflow-hidden max-sm:h-auto">
      <img
        src={Platform_Page_Workflow_left}
        alt={Platform_Page_Workflow_left}
        className="absolute w-[320px] top-auto bottom-auto left-[-5%] right-auto max-lg:left-[-14%] max-md:hidden"
      />

      <div className="text-center flex flex-col justify-center gap-4 relative z-10 px-40 tracking-wide max-lg:px-28 max-md:px-8 max-sm:p-12">
        <h1 className="text-3xl font-medium">What is a workflow engine?</h1>
        <p className="font-light text-gray-700">
          A workflow engine takes business logic and processes and simplifies
          them into individual blocks or “tasks.” From there each of these tasks
          can become autonomous microservices/ serverless/ APIs and can be
          individually scaled without affecting the entire application.
        </p>
        <p className="font-light text-gray-700">
          By utilizing a workflow engine, developers can focus on building
          mission critical applications rather than the mechanics of service
          communication, flow durability, and failure handling.
        </p>
      </div>
      <img
        width={100}
        src={Platform_Page_Workflow_right}
        alt={Platform_Page_Workflow_right}
        className="absolute w-[320px] top-auto bottom-auto right-[-5%] left-auto max-lg:right-[-14%] max-md:hidden"
      />
    </section>
  );
};
export default Workflow_engine;
