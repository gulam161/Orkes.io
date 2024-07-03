import React, { ReactNode } from "react";
import Orkes_Logo from "../../assets/Logo/orkes-logo.svg";
import Login_Background from "../../assets/login-background.png";
import Login from "./Login";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section className="bg-white flex flex-col items-center mt-1">
      <img src={Orkes_Logo} alt="Orkes Logo" width={240} className="my-6" />
      <h1 className="text-4xl font-medium">Orkes Cloud Platform</h1>
      <div
        className="relative w-full h-[40vh] flex flex-wrap bg-contain bg-no-repeat items-center justify-center"
        style={{
          backgroundImage: `url(${Login_Background})`,
        }}
      >
        <Login />
      </div>
    </section>
  );
};

export default AuthLayout;
