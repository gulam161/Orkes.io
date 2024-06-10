import React from "react";

type DebugProps = {};

const Debug: React.FC<DebugProps> = () => {
  return (
    <section className="grid grid-cols-2 border border-gray-200 text-gray-700 rounded-xl shadow-md my-32">
      <div className="p-8 bg-gray-100 rounded-l-xl shadow-lg">
        <h4 className="text-[#189ed3] text-base mb-1">10X YOUR VELOCITY</h4>
        <h1 className="text-4xl font-medium mb-4">
          Supercharge coding, scaling and observing distributed systems
        </h1>
        <p className="font-light tracking-wide mb-10">
          Orkes Conductor is the fastest way to build and modernize all your
          applications. Model your business logic as intuitively as you would in
          a whiteboard, code the components in the language and framework of
          your choice, run them at scale with no additional setups and observe
          across your distributed landscape - with enterprise grade security and
          manageability baked-in.
        </p>
      </div>
      <div className="p-8">
        {/* <div className="border w-4/5 mx-auto grid grid-cols-2 rounded-full"></div> */}
        <div className="mt-8 text-center">
          <img src="" alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};
export default Debug;
