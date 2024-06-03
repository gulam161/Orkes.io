import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/orkes-logo.svg";

type HeaderProps = {};

// const navItems = [
//   { id: 1, to: "home", text: "Home" },
//   { id: 2, to: "about", text: "About" },
//   { id: 3, to: "skill", text: "Skills" },
//   { id: 4, to: "portfolio", text: "Portfolio" },
//   { id: 5, to: "contact", text: "Contact" },
// ];

const Header: React.FC<HeaderProps> = () => {
  return (
    <nav className="w-full h-24 flex items-center sticky top-0 z-50 bg-white shadow-md shadow-gray-300">
      <header className="w-4/5 mx-auto flex_between_center">
        <div className="w-1/2 flex_between_center font-light">
          <Link to="home">
            <img
              src={logo}
              alt="logo"
              width={130}
              className="relative cursor-pointer z-50 "
            />
          </Link>
          <Link to="">Platform</Link>
          <Link to="">Use Cases </Link>
          <Link to="">Developers </Link>
          <Link to="">Customers</Link>
        </div>
        <div className="flex_between_center gap-4 capitalize text-sm">
          <Link to="" className="button border-[#13afe4]">
            Try Free
          </Link>
          <Link
            to=""
            className="button text-gray-100  border-[#13afe4] bg-[#13afe4]"
          >
            Login
          </Link>
        </div>
      </header>
    </nav>
  );
};
export default Header;
