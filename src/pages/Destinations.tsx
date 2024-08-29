import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footers from "../components/Footer";
import Navbar from "../components/Navbar";
import FooterLeft from "../components/FooterLeft";

const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row px-8 md:pl-16 pt-2 md:pt-0">
      <div className="w-full md:w-[75%] lg:w-[50%] relative lg:fixed h-[34rem] md:h-96">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus
          interval={4000}
          transitionTime={500}>
          <div className="h-[34rem] md:h-full">
            <img
              src="https://th.bing.com/th?id=OIP.nyLAzWYdvc-wb9ntq1cU7QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&cb=13&pid=3.1&rm=2"
              alt="Image1"
              className="w-full h-full object-cover bg-[#f5f4f0]"
            />
          </div>
          <div className="h-[34rem] md:h-full">
            <img
              src="https://th.bing.com/th/id/OIP.8SXzYjtNYalr9QJRQRNvZgHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7"
              alt="Image2"
              className="w-full h-full object-cover bg-[#f5f4f0]"
            />
          </div>
          <div className="h-[34rem] md:h-full">
            <img
              src="https://th.bing.com/th/id/OIP.voVmH_P-WhYnjVZYb-WUhwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7"
              alt="Image3"
              className="w-full h-full object-cover bg-[#f5f4f0]"
            />
          </div>
        </Carousel>
      </div>
      <div className="lg:w-[45%] lg:ml-[55%] mt-8 lg:mt-0 md:px-10">
        <Navbar />
        <h1 className="text-[36px] lg:text-[66px] font-black font-averta text-[#444a52]">
          Destination
        </h1>
        <div className="font-nexa">
          {" "}
          <p className="mt-4 text-[18px] lg:text-[22px] text-[#444a52] font-normal">
            Quid turpius quam sapientis vitam ex insipientium sermone pendere?
            Et non ex maxima parte de tota iudicabis? Videamus igitur sententias
            eorum, tum ad verba redeamus. Quae sequuntur igitur?
          </p>
        </div>

        <div className="flex flex-row mt-4 border px-8 py-5 border-[#444a52] justify-between text-[18px] lg:text-[22px] font-nexa text-[#444a52]">
          <p className="font-bold">Paris</p> <p>June 16 - 21</p>
        </div>

        <div className="flex flex-row mt-4 border px-8 py-5 border-[#444a52] justify-between text-[18px] lg:text-[22px] font-nexa text-[#444a52]">
          <p className="font-bold">Milan</p> <p>July 23 - 28</p>
        </div>
        <div className="flex flex-row mt-4 border px-8 py-5 border-[#444a52] justify-between text-[18px] lg:text-[22px] font-nexa text-[#444a52]">
          <p className="font-bold">Vienna</p> <p>August 8- 18</p>
        </div>

        <div className="flex flex-row mt-4 border px-8 py-5 border-[#444a52] justify-between text-[18px] lg:text-[22px] font-nexa text-[#444a52]">
          <p className="font-bold">Amsterdam</p> <p>September 16 - 21</p>
        </div>

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
    <div className="flex flex-col md:flex-row bg-[#f5f4f0]">
      {/* Footer (Sidebar) */}
      <FooterLeft />

      {/* Main Content */}
      <MainContent />
    </div>
  );
};

export default PageLayout;
