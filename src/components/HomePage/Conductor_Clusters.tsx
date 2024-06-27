import React from "react";
import { Link } from "react-router-dom";
import Orkes_Cloud_Artwork from "../../assets/Orkes-Cloud_Artwork.png";
import Playground_Illustration from "../../assets/Playground-Illustration.png";

type Conductor_ClustersProps = {};

const Conductor_Clusters: React.FC<Conductor_ClustersProps> = () => {
  return (
    <section className="flex border border-gray-200 p-8 text-gray-700 rounded-xl shadow-md my-20 max-lg:flex-col">
      <div className="w-1/2 flex_between_center flex-col gap-6 px-10 text-center border-r max-lg:w-full max-lg:border-b max-lg:border-r-0 max-lg:pb-8 max-lg:mb-8">
        <img
          src={Playground_Illustration}
          alt="Playground_Illustration"
          width={300}
        />
        <p className="text-xl font-light">
          Use our FREE developer sandbox to try out Orkes Conductor
        </p>
        <div className="mb-2">
          <Link
            to=""
            className="capitalize text-sm button px-9 border-[#ed5668]"
          >
            Try It Free
          </Link>
        </div>
      </div>
      {/* <div className="bg-gray-200 w-[1px]"></div> */}
      <div className="w-1/2 flex_between_center flex-col gap-6 px-10 text-center max-lg:w-full">
        <img src={Orkes_Cloud_Artwork} alt="Orkes_Cloud_Artwork" width={300} />
        <p className="text-xl font-light">
          Orkes Cloud provides fully managed & enterprise-ready Conductor
          clusters
        </p>
        <div className="flex gap-4 capitalize text-sm">
          <Link to="" className="button border-[#ed5668]">
            Start Free Trail
          </Link>
          <Link
            to=""
            className="button px-2 text-white border-[#ed5668] bg-[#ed5668]"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Conductor_Clusters;
