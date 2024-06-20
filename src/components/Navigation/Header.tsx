import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/orkes-logo.svg";
import Plateform from "../Plateform/layout";
import UseCases from "../Usecases/layout";
import Developers from "../Developers";
import { IoMdClose, IoMdMenu } from "react-icons/io";

import MobileMenu from "./MobileMenu";

type HeaderProps = {};

const navItems = [
  { id: 1, to: "", text: "Platform" },
  { id: 2, to: "", text: "Use Cases" },
  { id: 3, to: "", text: "Developers" },
  { id: 4, to: "", text: "Customers" },
  { id: 5, to: "", text: "Pricing" },
];

const Header: React.FC<HeaderProps> = () => {
  const [isMobileOpen, toggleMobileOpen] = useState<boolean>(false);
  const [activePath, setActivePath] = useState("");

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMobileMenuClose = () => toggleMobileOpen(false);
  return (
    <nav className="w-full h-24 flex items-center sticky top-0 z-50 bg-white shadow-md shadow-gray-300">
      <header className="w-4/5 mx-auto flex_between_center">
        <div className=" w-[60%] flex_between_center font-light">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              width={130}
              className="relative cursor-pointer z-50 "
            />
          </Link>
          <div className="w-[75%] flex_between_center">
            {navItems.map(({ id, text }) => (
              <div
                key={id}
                onMouseOver={() => setHoveredItem(text)}
                onMouseOut={() => setHoveredItem(null)}
                // className="relative"
              >
                <Link to="" className="hover:underline">
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
        <div className="w-[30%] flex_between_center gap-4 capitalize text-sm">
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

        {/* <section
          // md:block sm:block
          className="hidden cursor-pointer"
          onClick={() => toggleMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <IoMdClose className="text-base relative z-50" />
          ) : (
            <IoMdMenu className="text-lg relative z-50" />
          )}
        </section> */}
      </header>
      {
        // <MobileMenu
        //   isMobileOpen={isMobileOpen}
        //   navdata={navItems}
        //   handleMobileMenuClose={handleMobileMenuClose}
        // />
      }
    </nav>
  );
};
export default Header;
