import React from "react";
import bannerImg from "../assets/banner-img-1.png";

const Banner = () => {
  return (
    <>
       <div className="relative w-full my-10 rounded-4xl overflow-hidden">
      <img
        src={bannerImg}
        alt="banner"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-5xl font-bold">
          It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally
        </h2>
        <p className="text-white text-md my-2 font-medium">
          Our platform connects you with verified, experienced lawyers across various legal specialties — all at your convenience. Whether it's legal advice, <br /> contract drafting, or urgent representation, book consultations in minutes and receive professional legal support you can trust.
        </p>
      </div>
    </div>
    </>
  );
};

export default Banner;
