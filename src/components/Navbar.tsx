import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
    
      <nav className="py-8">
        <div className="container md:mx-auto flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:py-6 md:pr-16 transition-all duration-300 ease-in-out">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#c03b2b] text-sm font-semibold font-nexa"
                : "text-sm font-semibold text-[#444a52] font-nexa"
            }
            style={{ transitionDelay: "100ms" }}>
            WHO WE ARE
          </NavLink>

          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              isActive
                ? "text-[#c03b2b] text-sm font-semibold font-nexa"
                : "text-sm font-semibold text-[#444a52] font-nexa"
            }
            style={{ transitionDelay: "200ms" }}>
            DESTINATIONS
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-[#c03b2b] text-sm font-semibold font-nexa"
                : "text-sm font-semibold text-[#444a52] font-nexa"
            }
            style={{ transitionDelay: "300ms" }}>
            PRICING
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#c03b2b] text-sm font-semibold font-nexa"
                : "text-sm font-semibold text-[#444a52] font-nexa"
            }
            style={{ transitionDelay: "400ms" }}>
            CONTACT
          </NavLink>
        </div>
        <div className="pt-6 md:pt-0">
          <hr style={{ borderColor: "gray" }} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
