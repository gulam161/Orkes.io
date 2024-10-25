import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/orkes-logo.svg";
import Plateform from "../Plateform/layout";
import UseCases from "../Usecases/layout";
import Developers from "../developer/layout";
import { IoMdClose, IoMdMenu } from "react-icons/io";

import MobileMenu from "./MobileMenu";

type HeaderProps = {};

const navItems = [
  { id: 1, text: "Platform" },
  { id: 2, text: "Use Cases" },
  { id: 3, text: "Developers" },
  { id: 4, text: "Customers" },
  { id: 5, text: "Pricing" },
];

const Header: React.FC<HeaderProps> = () => {
  const [isMobileOpen, toggleMobileOpen] = useState<boolean>(false);
  // const [activePath, setActivePath] = useState("");

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMobileMenuClose = () => toggleMobileOpen(false);

  return (
    <nav className="w-full h-24 flex items-center sticky top-0 z-50 bg-white shadow-md shadow-gray-300">
      <header className="w-4/5 max-xl:w-11/12 mx-auto flex_between_center">
        <div className=" w-[60%] flex items-center gap-7 font-light">
          <Link to="/" className="outline-none">
            <img
              src={logo}
              alt="logo"
              width={130}
              className="relative cursor-pointer z-50 "
            />
          </Link>
          <div className="w-2/3 flex_between_center max-lg:hidden">
            {navItems.map(({ id, text }) => (
              <div
                key={id}
                onMouseEnter={() => setHoveredItem(text)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link to="#" className="text-[15px] py-4 hover:underline">
                  {text}
                </Link>
                {hoveredItem === text && (
                  <div className="absolute top-auto bottom-[25px] w-full bg-white shadow-lg z-50">
                    {text === "Platform" && <Plateform />}
                    {text === "Use Cases" && <UseCases />}
                    {text === "Developers" && <Developers />}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%] flex_between_center gap-4 capitalize text-sm max-lg:w-2/6 max-md:hidden">
          <Link to="/sign-up" className="button border-[#13afe4] text-gray-600">
            Get Started
          </Link>
          <Link
            to="/auth-login"
            target="_blank"
            className="button text-gray-100 border-[#13afe4] bg-[#13afe4]"
          >
            Login
          </Link>
        </div>
        <section
          className="hidden cursor-pointer max-lg:block"
          onClick={() => toggleMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <IoMdClose className="text-base relative z-50" />
          ) : (
            <IoMdMenu className="text-lg relative z-50" />
          )}
        </section>
      </header>
      {isMobileOpen && (
        <MobileMenu
          isMobileOpen={isMobileOpen}
          navdata={navItems}
          handleMobileMenuClose={handleMobileMenuClose}
          hoveredItem={hoveredItem}
          Plateform={Plateform}
          UseCases={UseCases}
          Developers={Developers}
        ></MobileMenu>
      )}
    </nav>
  );
};
export default Header;
