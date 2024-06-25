import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

interface Navdata {
  id: number;
  to: string;
  text: string;
}

type MobileMenuProps = {
  navdata: Navdata[];
  isMobileOpen: boolean;
  handleMobileMenuClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  navdata,
  isMobileOpen,
  handleMobileMenuClose,
}) => {
  return (
    <nav
      className={`h-auto w-full fixed top-24 flex flex-col justify-between bg-white shadow-md   ${
        isMobileOpen
          ? "transition-all translate-x-0 translate-y-0 ease-in duration-300 delay-300"
          : ""
      }`}
    >
      {navdata.map(({ id, text, to }) => (
        <Link
          key={id}
          to={to}
          onClick={handleMobileMenuClose}
          className="cursor-pointer flex justify-between p-5 border-b font-light"
        >
          {text}
          <IoIosArrowDown />
        </Link>
      ))}
    </nav>
  );
};
export default MobileMenu;
