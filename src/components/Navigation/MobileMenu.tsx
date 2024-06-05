import React from "react";
import { Link } from "react-router-dom";

interface Navdata {
  id: number;
  to: string;
  text: string;
}

type MobileMenuProps = {
  navdata: Navdata[];
  handleMobileMenuClose: () => void;
  isMobileOpen: boolean;
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  navdata,
  handleMobileMenuClose,
  isMobileOpen,
}) => {
  return (
    <nav className="h-screen w-full  fixed top-0 z-10">
      <div
        // md:w-1/2 md:right-0 flex flex-col justify-center md:items-center sm:items-center md:gap-y-5 sm:gap-y-9 md:font-semibold sm:font-semibold md:text-lg sm:text-xl
        className="absolute bottom-0 w-full lg:block"
      >
        {navdata.map(({ id, text }) => (
          <div
            key={id}
            onClick={handleMobileMenuClose}
            className="cursor-pointer"
            // className="w-full py-2  m-1 bg-slate-400 text-center "
          >
            {text}
          </div>
        ))}
      </div>
    </nav>
  );
};
export default MobileMenu;
