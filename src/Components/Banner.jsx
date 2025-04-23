import React from "react";
import bannerImg from "../assets/banner-img-1.png";

const Banner = () => {
  return (
    <>
       <div className="relative w-full my-10 rounded-3xl overflow-hidden">
      <img
        src={bannerImg}
        alt="banner"
        className="object-cover min-h-[500px]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white lg:w-[990px] mb-4 lg:text-5xl text-2xl font-bold">
          It avoids subjective claims or exaggeration that might raise red flags legally
        </h2>
        <p className="text-white text-md my-2 lg:w-[900px] font-medium">
          Our platform connects you with verified, experienced lawyers across various legal specialties — all at your convenience. Whether it's legal advice, contract drafting, or urgent representation, book consultations in minutes and receive professional legal support you can trust.
        </p>
      </div>
    </div>
    </>
  );
};

export default Banner;
