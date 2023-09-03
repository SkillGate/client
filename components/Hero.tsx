"use client";

import Image from "next/image";
import { CustomButton } from ".";
import { imageUrl } from "@/constants";

const Hero = () => {
  const handleScroll = () => {
    console.log("Hii!");
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Empowering Dreams, Building Careers!</h1>

        <p className="hero__subtitle">Discover Your Next Opportunity!</p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container pt-5">
        <div className="hero__image">
          <Image src={imageUrl[1].url} alt={imageUrl[1].alt} fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
