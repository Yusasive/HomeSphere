import React from "react";
import Footers from "../components/Footer";
import Navbar from "../components/Navbar";
import FooterLeft from "../components/FooterLeft";
import DesktopBar from "../components/DesktopBar";

const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row px-2 lg:px-8 pt-2 md:pt-0 min-h-screen">
      
      <div className="lg:w-[56%] relative lg:fixed h-full">
      <div className="flex lg:hidden">
            {" "}
            <Navbar />
          </div>
        <img
          className="md:ml-8 w-full h-[34rem] md:w-full md:h-full bg-[#f5f4f0] rounded-lg lg:rounded-none"
          src="https://res.cloudinary.com/ddxssowqb/image/upload/v1725362424/delicious-sushi-table_xsw5ns.jpg"
          alt="Home"
        />
      </div>
      <div className="lg:w-[41%] lg:ml-[60%] px-5 mt-8 lg:mt-0 md:pl-10 flex flex-col justify-between">
        <div>
        <div className="hidden lg:flex">
            <DesktopBar />
          </div>
          <h1 className="text-[34px] lg:text-[55px] font-black font-averta text-[#444a52]">
            Contact
          </h1>
          <p className="mt-4 text-[17px] lg:text-[19px] font-averta text-[#444a52]">
            Quid turpius quam sapientis vitam ex insipientium sermone pendere? Et
            non ex maxima parte de tota iudicabis? Videamus igitur sententias
            eorum, tum ad verba redeamus. Quae sequuntur igitur?
          </p>
          <p className="mt-4 text-[17px] lg:text-[19px] font-averta text-[#444a52]">
            Ne tum quidem te respicies et cogitabis sibi quemque natum esse et
            suis voluptatibus? Et nunc quidem quod eam tuetur, ut de vite
            potissimum loquar, est id extrinsecus.
          </p>
          <p className="mt-4 text-[17px] lg:text-[19px] font-averta text-[#444a52]">
            Videamus igitur sententias eorum?
          </p>
        </div>
        <div className="mt-auto">
          <hr className="border-gray-600 my-10" />
          <Footers />
        </div>
      </div>
    </div>
  );
};

const PageLayout = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#f5f4f0]">
      {/* Footer (Sidebar) */}
      <FooterLeft />

      {/* Main Content */}
      <MainContent />
    </div>
  );
};

export default PageLayout;
