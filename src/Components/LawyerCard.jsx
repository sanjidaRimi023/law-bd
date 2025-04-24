import React from "react";
import { Link } from "react-router";
import { FaRegRegistered } from "react-icons/fa";

const LawyerCard = ({ profile }) => {
  const {
    Image,
    id,
    Name,
    Speciality,
    Experience,
    LicenseNumber,
    Available,
  } = profile;

  return (
    <div className="bg-[#ffffff] border border-[#C4C4C4] rounded-xl shadow-md lg:flex justify-between gap-10 space-y-3 p-5 items-center">
      <img
        className="w-[180px] h-[180px] rounded-xl object-cover"
        src={Image}
        alt="Profile picture"
      />
      <div className="flex-1">
        <div className="flex gap-3">
          <span className="bg-[#09982F1A] text-[#09982F] text-sm font-medium p-2 rounded-full">
            {Available}
          </span>
          <span className="bg-[#176AE51A] text-[#176AE5] text-sm font-medium p-2 rounded-full">
            {Experience}
          </span>
        </div>
        <h1 className="text-3xl font-bold">{Name}</h1>
        <p className="text-2xl text-[#0F0F0F99]">{Speciality}</p>
        <p className="text-md flex items-center gap-2 text-[#0F0F0FB3]"><FaRegRegistered></FaRegRegistered> {LicenseNumber}</p>
        <Link to={`/lawyerdetails/${id}`}>
        <button className="btn btn-block text-[#176AE5]  hover:bg-[#176AE5] hover:text-white my-2 rounded-full text-lg bg-[#abc1e133]">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LawyerCard;
