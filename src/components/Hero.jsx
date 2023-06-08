import React from "react";
import bg from "../assets/bgImg.png";
import mobileScreen from '../assets/twoMobileScreen.png'
const Hero = () => {
  return (
    <div className="w-full h-[619px] relative">
      <img src={bg} alt="" />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-4 text-white  ">
        <p className="font-bold text-2xl">Food app</p>
              <h1 className="text-5xl font-bold text-center leading-snug" >Why stay hungry when <br></br> you can order form Bella Onojie</h1>
              <p className="text-xl font-medium">Download the bella onoje’s food app now on</p>
              <div className="flex items-center gap-10 mt-4">
                  <button className="w-[236px] flex items-center justify-center h-[68px] bg-[#FA4A0C] rounded-full font-bold text-white text-xl">Playstore</button>
                  <button className="w-[236px] flex items-center justify-center h-[68px] border border-white hover:bg-white transition-colors hover:text-black rounded-full font-bold text-white text-xl">App Store</button>
              </div>
          </div>
          <div className="flex h-full items-center flex-col justify-center -mt-72 z-50">
        <img src={mobileScreen} alt="" />
      </div>
    </div>
  );
};

export default Hero;
