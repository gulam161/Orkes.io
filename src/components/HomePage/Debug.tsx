import React from "react";
import MorningTool from "../../assets/Monitoring-Tools.png";

type DebugProps = {};

const Debug: React.FC<DebugProps> = () => {
  return (
    <section className="grid grid-cols-2 border border-gray-200 text-gray-700 rounded-xl shadow-md my-32">
      <div className="p-8  bg-gray-100 rounded-l-xl shadow-lg">
        <h4 className="text-[#2daa86] text-sm mb-1">OBSERVE AND OPTIMIZE</h4>
        <h1 className="text-4xl font-medium mb-4">
          Scale to the billions, debug in minutes, observe everything
        </h1>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
          <li className="font-light tracking-wide mb-2">
            Handle that hockey-stick growth or rapid usage peaks with no action
            from your side
          </li>
          <li className="font-light tracking-wide mb-2">
            Run a few workflows, a few billion or anything in between - Orkes
            Conductor just scales
          </li>
          <li className="font-light tracking-wide mb-2">
            Zoom in instantly on hard to find issues across millions of
            distributed executions
          </li>
          <li className="font-light tracking-wide mb-2">
            Identify pressure points and establish SLAs in your distributed
            application landscape with in-depth metrics
          </li>
        </ul>
      </div>
      <div
        className="bg-cover bg-center rounded-r-xl"
        style={{
          backgroundImage: `url(${MorningTool})`,
        }}
      >
        {/* <div className="mt-8 text-center">
          <img src={MorningTool} alt="" className="mx-auto" />
        </div> */}
      </div>
    </section>
  );
};
export default Debug;
