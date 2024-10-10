import React from "react";
import "./introducing.scss";
import { Image } from "cloudinary-react";
import { image } from "./data.json";
import { images } from "./data2.json";

const Introducing = () => {
  return (
    <div id="Introducing">
      <div className="section1 relative w-full h-[347px] flex items-center justify-center bg-cover bg-center mt-[63px]">
        {/* Content */}
        <div className="relative text-center text-white px-4">
          <div className="flex justify-center mb-4">
            {/* Play Button */}
            <div className="w-[100px] h-[70px] bg-red-600 rounded-lg flex items-center justify-center cursor-pointer">
              <Image
                className=""
                loading="lazy"
                cloudName={image.cloudName}
                publicId={image.youtube.url}
              />
            </div>
          </div>
          <h1 className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Introducing Robotics and AI into the World of Farming
          </h1>
        </div>
      </div>

      {/* part two */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-2 md:gap-[30px] md:ml-[100px] lg:grid-cols-5 h-[175px] mt-[63px] mb-3 items-center justify-center">
        {images.map((images) => (
          <div key={images.id}>
            <Image
              cloudName={images.cloudName}
              publicId={images.publicId}
              loading="lazy"
              className="w-[190px] h-[70px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introducing;
