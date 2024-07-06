import React from "react";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

type AuthButtonProps = {
  type: String;
  onClick: () => void;
};

const AuthButton: React.FC<AuthButtonProps> = ({ type, onClick }) => {
  const icon =
    type === "google" ? (
      <FaGoogle size={22} />
    ) : (
      <MdOutlineMailOutline size={22} />
    );

  const text =
    type === "google" ? "Continue With Google" : "Continue With Email";

  return (
    <button
      onClick={onClick}
      className="flex gap-2 border-2 border-[#1976d2] py-2 rounded-full items-center px-4 mb-1"
    >
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default AuthButton;
