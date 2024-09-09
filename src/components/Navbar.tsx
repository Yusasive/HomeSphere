import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const location = useLocation(); // Get the current location

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Close dropdown when a link is clicked
  const handleLinkClick = () => {
    setDropdownVisible(false);
  };

  // Get the active link based on the current path
  const getActiveLinkText = (path: string) => {
    switch (path) {
      case "/":
        return "WHAT WE'RE BUILDING";
      case "/who-we-are":
        return "WHO WE ARE";
      case "/pushing-chefs":
        return "PUSHING CHEFS";
      case "/contact":
        return "CONTACT";
      default:
        return "WHAT WE'RE BUILDING";
    }
  };

  const activeLinkText = getActiveLinkText(location.pathname);

  return (
    <nav className="py-4 relative bg-white shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Display the active link */}
        <div className="flex items-center">
          <NavLink
            to={location.pathname} // Active link based on current route
            className="text-[#01AA1B] text-lg font-bold font-averta mr-4" 
          >
            {activeLinkText}
          </NavLink>
        </div>

        {/* Dropdown button for mobile */}
        <button
          className="block md:hidden px-4 py-2 bg-[#01AA1B] text-white rounded right-0"
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
            onClick={handleLinkClick}
          >
            WHAT WE'RE BUILDING
          </NavLink>
          <NavLink
            to="/who-we-are"
            className="block px-4 py-2 text-[#444a52] hover:bg-gray-100"
            onClick={handleLinkClick}
          >
            WHO WE ARE
          </NavLink>
          <NavLink
            to="/pushing-chefs"
            className="block px-4 py-2 text-[#444a52] hover:bg-gray-100"
            onClick={handleLinkClick}
          >
            PUSHING CHEFS
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-2 text-[#444a52] hover:bg-gray-100"
            onClick={handleLinkClick}
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
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
