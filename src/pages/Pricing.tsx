import React from "react";
import Footers from "../components/Footer";
import Navbar from "../components/Navbar";
import FooterLeft from "../components/FooterLeft";

const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row px-8 pt-2 md:pt-0">
      <div className="lg:w-[50%] relative lg:fixed h-full">
        <img
          className="md:ml-8  w-full h-[34rem] md:w-full md:h-full bg-[#f5f4f0] rounded-lg lg:rounded-none"
          src="https://th.bing.com/th/id/OIP.voVmH_P-WhYnjVZYb-WUhwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Home"
        />
      </div>
      <div className="lg:w-[45%] lg:ml-[55%] mt-8 lg:mt-0 md:px-10">
        <Navbar />
        <h1 className="text-[36px] lg:text-[66px] font-black font-averta text-[#444a52]">
          Pricing
        </h1>
        <p className="mt-4 text-[18px] lg:text-[22px] font-nexa text-[#444a52]">
          Quid turpius quam sapientis vitam ex insipientium sermone pendere? Et
          non ex maxima parte de tota iudicabis? Videamus igitur sententias
          eorum, tum ad verba redeamus. Quae sequuntur igitur?
        </p>
        <p className="mt-4 text-[18px] lg:text-[22px] font-nexa text-[#444a52]">
          Ne tum quidem te respicies et cogitabis sibi quemque natum esse et
          suis voluptatibus? Et nunc quidem quod eam tuetur, ut de vite
          potissimum loquar, est id extrinsecus.
        </p>
        <p className="mt-4 text-[18px] lg:text-[22px] font-nexa text-[#444a52]">
          Videamus igitur sententias eorum?
        </p>
        <div className="space-y-6 my-12">
          <hr className=" border-gray-600" />
          <Footers />
        </div>
      </div>
    </div>
  );
};

const PageLayout = () => {
  return (
    <div className="flex flex-col md:flex-row  bg-[#f5f4f0]">
      {/* Footer (Sidebar) */}
      <FooterLeft />

      {/* Main Content */}
      <MainContent />
    </div>
  );
};

export default PageLayout;
