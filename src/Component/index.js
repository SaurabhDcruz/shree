import React from "react";
import homeimg from "../Image/homeimg.png";

const BackgroundImageDiv = () => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={<img src={homeimg} alt="" />}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white text-2xl">Your Text Here</h1>
      </div>
    </div>
  );
};

export default BackgroundImageDiv;
