import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  // Handler to toggle dropdown menu visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Handler to set active link and close dropdown
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setDropdownVisible(false);
  };

  return (
    <nav className="py-8">
      <div className="container md:mx-auto flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:py-6 md:pr-1 transition-all duration-300 ease-in-out">
        {/* Conditional rendering of the active link */}
        {activeLink === null ? (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#01AA1B] text-[12px] lg:text-[14x] font-semibold font-averta-"
                  : "text-[12px] lg:text-[14px] font-semibold text-[#444a52] font-averta"
              }
              onClick={() => handleLinkClick("/")}
              style={{ transitionDelay: "100ms" }}
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
              style={{ transitionDelay: "200ms" }}
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
              style={{ transitionDelay: "300ms" }}
            >
              PUSHING CHEFS
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#01AA1B] text-[12px] lg:text-[14px]  font-semibold font-averta"
                  : "text-[12px] lg:text-[14px] font-semibold text-[#444a52] font-averta"
              }
              onClick={() => handleLinkClick("/contact")}
              style={{ transitionDelay: "400ms" }}
            >
              CONTACT
            </NavLink>
          </>
        ) : (
          // Show only the active link
          <div className="flex flex-col items-center">
            <NavLink
              to={activeLink}
              className="text-[#01AA1B] text-[12px] lg:text-[20px] font-semibold font-averta"
            >
              {activeLink === "/" && "WHAT WE'RE BUILDING"}
              {activeLink === "/who-we-are" && "WHO WE ARE"}
              {activeLink === "/pushing-chefs" && "PUSHING CHEFS"}
              {activeLink === "/contact" && "CONTACT"}
            </NavLink>
            {/* Dropdown menu */}
            <button
              className="mt-4 px-4 py-2 bg-[#01AA1B] text-white rounded"
              onClick={toggleDropdown}
            >
              More
            </button>
            {dropdownVisible && (
              <div className="absolute top-full right-0 bg-white shadow-lg mt-2 rounded">
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
            )}
          </div>
        )}
      </div>
      <div className="pt-6 md:pt-0">
        <hr style={{ borderColor: "gray" }} />
      </div>
    </nav>
  );
};

export default Navbar;
