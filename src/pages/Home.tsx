import React from "react";
import Footers from "../components/Footer";
import Navbar from "../components/Navbar";
import FooterLeft from "../components/FooterLeft";

const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row px-2 lg:px-8 pt-2 md:pt-0 min-h-screen">
      {/* Video Section */}
      <div className="lg:w-[55.5%] relative lg:fixed h-[34rem] md:h-screen md:ml-8">
        <video
          className="w-full h-full object-cover bg-[#f5f4f0] rounded-lg md:rounded-none shadow-lg shadow-[#f5f4f0]"
          src="https://res.cloudinary.com/ddxssowqb/video/upload/v1725138194/sample_vid_2_y6q8xo.mp4"
          controls
          autoPlay
          loop
          muted
        />
      </div>

      {/* Text Content and Footer */}
      <div className="lg:w-[41%] px-5 lg:ml-[60%] mt-8 lg:mt-0 md:pl-10 flex flex-col justify-between">
        <div>
          <Navbar />
          <h1 className="text-[34px] lg:text-[50px] font-black font-averta text-[#444a52]">
            What We're Building
          </h1>
          <p
            className="mt-4 text-[17px] lg:text-[18px] text-[#444a52] font-medium font-averta"
            style={{ fontFamily: "Averta, sans-serif" }}>
            We are building a social food deals app that allows you to buy
            freshly-made meals, recipes, groceries, and other food-related items
            directly from online chefs and food content creators.
          </p>
          <p
            className="mt-4 text-[17px] lg:text-[18px] text-[#444a52] font-medium font-averta"
            style={{ fontFamily: "Averta, sans-serif" }}>
            We’re like the TikTok that lets you buy the burger, falafel, or
            spoons set posted online by chefs and content creators at a deal
            price.
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
