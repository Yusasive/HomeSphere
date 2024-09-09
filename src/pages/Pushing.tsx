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
          src="https://res.cloudinary.com/ddxssowqb/image/upload/v1725362446/autism-day-awareness-collage-style-with-people_j6zred.jpg"
          alt="Home"
        />
      </div>
      <div className="lg:w-[41%] lg:ml-[60%] px-5 mt-8 lg:mt-0 md:pl-10 flex flex-col justify-between">
        <div>
        <div className="hidden lg:flex">
            <DesktopBar />
          </div>
  
          <h1 className="text-[34px] lg:text-[55px] font-black font-averta text-[#444a52]">
            Pushing Chefs
          </h1>
          <p className="mt-4 text-[17px] lg:text-[19px] font-averta text-[#444a52]">
            We know you make a lot of amazing food content on your social
            platforms like instagram, tiktok and others. We also know that most
            times, the best reward you get from the contents you worked so hard
            to make are “likes and comments” with a very small amount of people
            actually coming to your DMs to buy.
          </p>
          <p className="mt-4 text-[17px] lg:text-[19px] font-averta text-[#444a52]">
            With Pusheat, you can now sell the content(s) of your posts with
            ease. Our platform transforms your recipes, food items, groceries
            and food creations into irresistible deals for your followers.
          </p>
          <p className="mt-16 text-[17px] lg:text-[19px] decoration-[#01AA1B] underline decoration-wavy  font-averta text-[#444a52]">
            Here are 3 reasons you’ll love Pusheat.
          </p>

          <ul className="mt-4 text-[17px] lg:text-[19px] font-averta text-[#444a52]">
            <li className="list-disc list-inside">
              <b> A normal order on Pusheat is a bulk order:</b> Every order on
              Pusheat is a bulk order, guaranteeing at least two customers
              before you cook. This ensures optimal efficiency and helps you
              maximize your profits. Single orders are also available on special
              requests.
            </li>
            <li className="list-disc list-inside">
              <b> Get paid before you cook:</b> The risk of cooking and waiting
              for customers can be very high. With Pusheat, you receive full
              payment from your customers before you even start cooking. Enjoy
              peace of mind and focus on creating delicious meals.
            </li>
            <li className="list-disc list-inside">
              <b>Cook and sell on your terms:</b> Say goodbye to the stress of
              managing inventory, kitchen/store hours, and catalog availability.
              With Pusheat, you're in complete control. Post and cook when it
              suits you, and sell your culinary creations or products at your
              own pace.
            </li>
          </ul>
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
