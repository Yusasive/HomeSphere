import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Set active link when clicked and hide dropdown
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setDropdownVisible(false);
  };

  return (
    <nav className="py-4 relative bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Active link or logo */}
        <div className="flex items-center">
          {activeLink === null ? (
            <NavLink
              to="/"
              className="text-[#01AA1B] text-lg font-bold font-averta"
              onClick={() => handleLinkClick("/")}
            >
              WHAT WE'RE BUILDING
            </NavLink>
          ) : (
            <NavLink
              to={activeLink}
              className="text-[#01AA1B] text-lg font-bold font-averta"
            >
              {activeLink === "/" && "WHAT WE'RE BUILDING"}
              {activeLink === "/who-we-are" && "WHO WE ARE"}
              {activeLink === "/pushing-chefs" && "PUSHING CHEFS"}
              {activeLink === "/contact" && "CONTACT"}
            </NavLink>
          )}
        </div>

        {/* Dropdown button for mobile */}
        <button
          className="block md:hidden px-4 py-2 bg-[#01AA1B] text-white rounded"
          onClick={toggleDropdown}
        >
          Menu
        </button>

        {/* Dropdown links */}
        <div
          className={`absolute top-full right-0 bg-white shadow-lg mt-2 rounded z-10 transition-all duration-300 ease-in-out ${
            dropdownVisible ? "block" : "hidden"
          } md:hidden`}
        >
          <NavLink
            to="/"
            className="block px-4 py-2 text-[#444a52] hover:bg-gray-100"
            onClick={() => handleLinkClick("/")}
          >
            WHAT WE'RE BUILDING
          </NavLink>
          <NavLink
            to="/who-we-are"
            className="block px-4 py-2 text-[#444a52] hover:bg-gray-100"
            onClick={() => handleLinkClick("/who-we-are")}
          >
            WHO WE ARE
          </NavLink>
          <NavLink
            to="/pushing-chefs"
            className="block px-4 py-2 text-[#444a52] hover:bg-gray-100"
            onClick={() => handleLinkClick("/pushing-chefs")}
          >
            PUSHING CHEFS
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-2 text-[#444a52] hover:bg-gray-100"
            onClick={() => handleLinkClick("/contact")}
          >
            CONTACT
          </NavLink>
        </div>

        {/* Full Navbar on desktop */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#01AA1B] text-[12px] lg:text-[14px] font-semibold font-averta"
                : "text-[12px] lg:text-[14px] font-semibold text-[#444a52] font-averta"
            }
            onClick={() => handleLinkClick("/")}
          >
            WHAT WE'RE BUILDING
          </NavLink>
          <NavLink
            to="/who-we-are"
            className={({ isActive }) =>
              isActive
                ? "text-[#01AA1B] text-[12px] lg:text-[14px] font-semibold font-averta"
                : "text-[12px] lg:text-[14px] font-semibold text-[#444a52] font-averta"
            }
            onClick={() => handleLinkClick("/who-we-are")}
          >
            WHO WE ARE
          </NavLink>
          <NavLink
            to="/pushing-chefs"
            className={({ isActive }) =>
              isActive
                ? "text-[#01AA1B] text-[12px] lg:text-[14px] font-semibold font-averta"
                : "text-[12px] lg:text-[14px] font-semibold text-[#444a52] font-averta"
            }
            onClick={() => handleLinkClick("/pushing-chefs")}
          >
            PUSHING CHEFS
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#01AA1B] text-[12px] lg:text-[14px] font-semibold font-averta"
                : "text-[12px] lg:text-[14px] font-semibold text-[#444a52] font-averta"
            }
            onClick={() => handleLinkClick("/contact")}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
