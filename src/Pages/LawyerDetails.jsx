import React from "react";
import { FaRegRegistered } from "react-icons/fa";

const LawyerDetails = ({profiles}) => {
    console.log(profiles);
  return (
    <div className="container mx-auto my-10">
      <div className="border border-gray-200 rounded-2xl flex flex-col justify-center text-center bg-[#0F0F0F26] p-20">
        <h1 className="lg:text-4xl text-xl font-bold">
          Lawyers Profile Details
        </h1>
        <p className="text-lg mt-2">
          Our Lawyers are trained professionals who understand the complexities
          of the law. They can interpret laws, rules, and regulations, ensuring
          that you comply with them and are protected from legal issues.
        </p>
      </div>
      <div className="border border-gray-200 p-20 mt-10 rounded-2xl flex gap-20">
        <div>
          <img src="gfgs" alt="dfsf" />
        </div>
        <div>
          <span  className="bg-[#176AE51A] text-[#176AE5] text-sm font-medium p-2 rounded-full">5+ Years Experience</span>
          <h2 className="text-3xl font-bold">Sharafat hussian Binoy</h2>
          <div>
            <p className="text-2xl text-[#0F0F0F99]">criminal expert</p>
            <p className="text-lg flex items-center gap-2 text-[#0F0F0FB3]"><FaRegRegistered></FaRegRegistered> licence no : 122</p>
          </div>
          <p>Availability</p>
          <p>Consultation Fee:</p>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
