import React, { ReactNode } from "react";
import Orkes_Logo from "../../assets/Logo/orkes-logo.svg";
import Login_Background from "../../assets/login-background.png";
import AuthFooter from "./AuthFooter";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <section className="bg-white mt-1">
    <div className="flex flex-col items-center">
      <img src={Orkes_Logo} alt="Orkes Logo" width={240} className="my-6" />
      <h1 className="text-4xl font-medium text-center">Orkes Cloud Platform</h1>
    </div>

    {/* Main form */}
    <div
      className="relative w-full h-[50vh] bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${Login_Background})` }}
    >
      {children}
      {/* Footer */}
      <AuthFooter />
    </div>
  </section>
);

export default AuthLayout;
