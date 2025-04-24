import React from "react";
import { Link } from "react-router";

const Booking = () => {
  return (
    <div>
      <div className="text-center my-[30px] py-18">
        <h1 className="text-[#0F0F0F] lg:text-5xl text-2xl font-bold">
          You have not Booked any appointment yet
        </h1>
        <p className="text-[#0F0F0FCC] text-md my-10 text-center">
          Our platfrom connect you with varified, experienced. lawyers across
          various speciality _ all at ypur convenience.
        </p>
        <Link
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
          to="/"
        >
          Book An Appointment
        </Link>
      </div>
      
    </div>
  );
};

export default Booking;
