import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
// import { BsChevronDown } from "react-icons/bs";
interface Navdata {
  id: number;
  to: string;
  text: string;
}

type MobileMenuProps = {
  navdata: Navdata[];
  isMobileOpen: boolean;
  handleMobileMenuClose: () => void;
  hoveredItem: string | null;
  Plateform: React.FC;
  UseCases: React.FC;
  Developers: React.FC;
  children: React.ReactNode;
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  navdata,
  isMobileOpen,
  handleMobileMenuClose,
  hoveredItem,
  Plateform,
  UseCases,
  Developers,
  children,
}) => {
  // const [show, setShow] = useState<boolean | null>();
  const [activeLink, setActiveLink] = useState<number | String>();

  const handleClick = (id: number) => {
    setActiveLink(activeLink === id ? String : id);
    // handleMobileMenuClose();
  };
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
          // onClick={handleMobileMenuClose}
          onClick={() => handleClick(id)}
          className="cursor-pointer flex justify-between p-5 border-b font-light"
        >
          <h1>{text}</h1>
          {(text === "Platform" && <Plateform />) ||
          (text === "Use Cases" && <UseCases />) ||
          (text === "Developers" && <Developers />) ? (
            <IoIosArrowDown
              className={`transition-transform ${
                activeLink === id ? "transform rotate-180" : ""
              }`}
            />
          ) : (
            ""
          )}
        </Link>
      ))}
      <div className="max-xl:hidden max-md:block w-full">{children}</div>
    </nav>
  );
};
export default MobileMenu;
