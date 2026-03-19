import React from "react";
import "../../index.css";

const RightBanner = () => {
  return (
    <>
      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img
          className="w-[300px] h-[300px] lgl:w-[600px] lgl:h-[500px] z-10"
          src=""
          alt="bannerImg"
        />
        <div className="absolute bottom-0 mr-10 ml-10 w-[500px] h-[400px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    </>
  );
};

export default RightBanner;
