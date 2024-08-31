import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
    
      <nav className="py-8">
        <div className="container md:mx-auto flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:py-6 md:pr-1 transition-all duration-300 ease-in-out">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#01AA1B] text-[12px] font-semibold font-nexa"
                : "text-[12px]  font-semibold text-[#444a52] font-nexa"
            }
            style={{ transitionDelay: "100ms" }}>
            WHAT WE'RE BUILDING
          </NavLink>

          <NavLink
            to="/who-we-are"
            className={({ isActive }) =>
              isActive
                ? "text-[#01AA1B] text-[12px]  font-semibold font-nexa"
                : "text-[12px]  font-semibold text-[#444a52] font-nexa"
            }
            style={{ transitionDelay: "200ms" }}>
            WHO WE ARE
          </NavLink>

          <NavLink
            to="/pushing-chefs"
            className={({ isActive }) =>
              isActive
                ? "text-[#01AA1B] text-[12px]  font-semibold font-nexa"
                : "text-[12px]  font-semibold text-[#444a52] font-nexa"
            }
            style={{ transitionDelay: "300ms" }}>
            PUSHING CHEFS
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#01AA1B] text-[12px]  font-semibold font-nexa"
                : "text-[12px]  font-semibold text-[#444a52] font-nexa"
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
