import React from "react";
import AuthLayout from "./layout";
import AuthForm from "./AuthForm";
import { BsCheckCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sign_Up: React.FC = () => (
  <AuthLayout>
    <div className="w-full flex justify-around mt-10 mb-12 max-sm:px-8">
      <AuthForm
        type="signup"
        title="Create an account"
        subtitle="SIGN UP"
        linkText="Login now"
        linkTo="/auth-login"
      />
      <div className="flex flex-col items-center justify-center gap-12 text-gray-600 max-lg:hidden">
        <div>
          <h1 className="text-3xl font-medium text-gray-700">
            FREE 14-Day Enterprise Trial
          </h1>
          <p className="font-light text-black mt-3 text-center">
            *No credit card required
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {[
            "All Conductor OSS features",
            "All Enterprise Base features",
            "Enterprise Add-ons",
          ].map((text, index) => (
            <p key={index} className="flex gap-3 items-center font-light">
              <BsCheckCircle size={20} className="text-emerald-400" /> {text}
            </p>
          ))}
        </div>
        <p className="font-light">
          For personal projects, check out our{" "}
          <Link to="/" className="text-blue-600 font-medium">
            Developer Playground
          </Link>
        </p>
      </div>
    </div>
  </AuthLayout>
);

export default Sign_Up;
