import React from "react";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

type Sign_UpProps = {};

const Sign_Up: React.FC<Sign_UpProps> = () => {
  return (
    <section className="">
      <div className="w-full bg-stone-50 rounded-2xl border shadow-sm dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 text-center">
          <h1 className="text-6xl font-light leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Welcome back!
          </h1>
          <h2 className="text-xl font-bold pt-8">Login</h2>
          <div className="flex flex-col gap-4">
            <button className="flex gap-2 border-2 border-[#1976d2] py-2 rounded-full items-center px-4">
              <FaGoogle size={22} />
              <p>Contiue With Google</p>
            </button>
            <button className="flex gap-2 border-2 border-[#1976d2] py-2 rounded-full items-center px-4 ">
              <MdOutlineMailOutline size={22} />
              <p>Contiue With Email</p>
            </button>
          </div>
          <div className="flex_between_center">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <div className="mx-2 font-light text-gray-600">Or</div>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          <p className="font-light dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/Sign_Up"
              className="font-medium text-blue-400 text-primary-600 hover:text-blue-500 dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Sign_Up;
