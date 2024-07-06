import React from "react";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

interface AuthFormProps {
  type: string;
  title: string;
  subtitle: string;
  linkText: string;
  linkTo: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  title,
  subtitle,
  linkText,
  linkTo,
}) => (
  <div className="w-[420px] mt-8">
    <div className="flex flex-col gap-6 max-w-[415px] px-16 max-sm:px-7 max-sm:pb-8 bg-stone-50 min-h-[460px] rounded-2xl border text-center shadow-sm dark:border dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-3xl font-light leading-tight tracking-tight text-gray-900 pt-9">
        {title}
      </h1>
      <h2 className="text-2xl font-semibold my-4">{subtitle}</h2>
      <div className="flex flex-col gap-4 items-center">
        <button className="flex gap-2 border-2 border-[#1976d2] py-2 rounded-full items-center px-4 mb-1">
          <FaGoogle size={22} />
          <p>Continue With Google</p>
        </button>
        <button className="flex gap-2 border-2 border-[#1976d2] py-2 rounded-full items-center px-4 mb-1">
          <MdOutlineMailOutline size={22} />
          <p>Continue With Email</p>
        </button>
      </div>
      <div className="flex_between_center mt-4">
        <div className="flex-1 h-[1px] bg-gray-200"></div>
        <div className="mx-2 font-light text-gray-600">Or</div>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
      </div>
      <p className="font-light dark:text-gray-400">
        {type === "login" ? "Don’t have an account yet?" : "Have an account?"}{" "}
        <Link
          to={linkTo}
          className="font-medium text-blue-400 text-primary-600 hover:text-blue-500 dark:text-primary-500"
        >
          {linkText}
        </Link>
      </p>
    </div>
    <p className="text-[10px] text-center mt-4">
      By providing your email address or using a single sign-on provider to
      create an account or login, you agree to our{" "}
      <Link to="/" className="text-blue-500 font-medium">
        Terms of Service
      </Link>{" "}
      and that you have reviewed our{" "}
      <Link to="/" className="text-blue-500 font-medium">
        Privacy Policy
      </Link>{" "}
      and Legal Notices{" "}
      <Link to="/" className="text-blue-500 font-medium">
        Legal Notices
      </Link>
      .
    </p>
  </div>
);

export default AuthForm;
