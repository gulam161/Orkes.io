import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaSlack } from "react-icons/fa";
interface Navdata {
  id: number;
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
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  navdata,
  isMobileOpen,
  handleMobileMenuClose,
  hoveredItem,
  Plateform,
  UseCases,
  Developers,
}) => {
  const [show, setShow] = useState<boolean | null>(false);
  const [activeLink, setActiveLink] = useState<number | String>();

  const handleClick = (id: number) => {
    setActiveLink(activeLink === id ? String : id);
    // setshow(activeLink === id && renderComponent(text));
    setShow(!show);
    // handleMobileMenuClose();
  };

  const renderComponent = (text: String) => {
    switch (text) {
      case "Platform":
        return <Plateform />;
      case "Use Cases":
        return <UseCases />;
      case "Developers":
        return <Developers />;
      default:
        return null;
    }
  };

  return (
    <nav
      className={`h-auto w-full fixed top-24 flex flex-col justify-between bg-white shadow-md   ${
        isMobileOpen
          ? "transition-all translate-x-0 translate-y-0 ease-in duration-300 delay-300"
          : ""
      }`}
    >
      {navdata.map(({ id, text }) => (
        <>
          <div
            key={id}
            onClick={() => handleClick(id)}
            className="cursor-pointer flex justify-between p-5 border-b font-light"
          >
            <h1>{text}</h1>
            {["Platform", "Use Cases", "Developers"].includes(text) && (
              <IoIosArrowDown
                className={`transition-transform ${
                  activeLink === id ? "transform rotate-180" : ""
                }`}
              />
            )}
          </div>
          {activeLink === id && renderComponent(text)}
        </>
      ))}
      <div className="p-4 max-xl:hidden max-md:flex max-md:gap-4 text-sm max-sm:flex-col">
        <Link to="" className="button border-[#13afe4] text-gray-600">
          Try Free
        </Link>
        <Link
          to=""
          className="button text-gray-100  border-[#13afe4] bg-[#13afe4] flex items-center gap-1 justify-center"
        >
          <FaSlack size={20} /> Join Comunity
        </Link>
      </div>
    </nav>
  );
};
export default MobileMenu;
