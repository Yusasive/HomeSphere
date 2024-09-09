import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footers from "../components/Footer";
import Navbar from "../components/Navbar";
import FooterLeft from "../components/FooterLeft";

const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row px-1 md:px-8 md:pl-16 pt-2 md:pt-0 min-h-screen">
      <div className="w-full lg:w-[56%] relative lg:fixed h-[34rem] md:h-96">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus
          interval={4000}
          transitionTime={500}>
          <div className="h-[34rem] md:h-full">
            <img
              src="https://res.cloudinary.com/ddxssowqb/image/upload/v1725881681/IMG-20240907-WA0019_sbxovk.jpg"
              alt="Image1"
              className="w-full h-full object-cover bg-[#f5f4f0]"
            />
          </div>
          <div className="h-[34rem] md:h-full">
            <img
              src="https://res.cloudinary.com/ddxssowqb/image/upload/v1725881672/IMG-20240907-WA0017_rbqrqp.jpg"
              alt="Image2"
              className="w-full h-full object-cover bg-[#f5f4f0]"
            />
          </div>
          <div className="h-[34rem] md:h-full">
            <img
              src="https://res.cloudinary.com/ddxssowqb/image/upload/v1725881666/IMG-20240907-WA0015_p1yfiu.jpg"
              alt="Image3"
              className="w-full h-full object-cover bg-[#f5f4f0]"
            />
          </div>
        </Carousel>
      </div>
      <div className="lg:w-[42%] lg:ml-[59%] px-5 mt-8 lg:mt-0 md:pl-10 flex flex-col justify-between">
        <div>
          <Navbar />
          <h1 className="text-[34px] lg:text-[55px] font-black font-averta text-[#444a52]">
            Who We Are
          </h1>
          <div className="font-averta">
            <p className="mt-4 text-[17px] lg:text-[19px] text-[#444a52] font-medium">
              Meet the Push Force, a quirky bunch of food lovers, tech geeks,
              and creative minds, united by our love for all things food and our
              passion for solving the world's hunger pangs.
            </p>
            <p className="mt-4 text-[17px] lg:text-[19px] text-[#444a52] font-medium">
              We might be lost in a Scrabble match or binge-watching the latest
              anime, but rest assured, our minds are always working on
              innovative ways to make your food experience more delicious and
              convenient. So, whether you're a foodie, a techie, or just someone
              who's tired of the same old meal routine, we're here to satisfy
              your cravings and tickle your taste buds
            </p>
          </div>
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
