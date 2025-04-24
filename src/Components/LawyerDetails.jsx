import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { FaRegRegistered } from "react-icons/fa";
import { BsInfoSquare } from "react-icons/bs";
import { toast } from "sonner";

const LawyerDetails = () => {
  const lawyers = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  

  useEffect(() => {
    const saveBooking = localStorage.getItem("bookings");
    setBookings(saveBooking ? JSON.parse(saveBooking) : []);
  }, []);

  const lawyer = lawyers?.find((l) => l.id === parseInt(id));

  if (!lawyer) {
    return <div className="text-center mt-10">Lawyer not found.</div>;
  }

  const {
    Image,
    Name,
    Experience,
    Speciality,
    LicenseNumber,
    Available,
    Fee,
    Availability,
  } = lawyer;
console.log(bookings);
  const handleBooking = () => {
    if (bookings !== null && bookings.length > 0) {
      const alrdyBook = bookings.find((b) => b.id == id);
      console.log(alrdyBook);
      if (alrdyBook) {
        toast.error("Already booked");
        return;
      }
      localStorage.setItem("bookings", JSON.stringify([...bookings, lawyer]));
      toast.success("Booking done");
    } else {
      localStorage.setItem("bookings", JSON.stringify([lawyer]));
    }
    navigate("/booking");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
      {/* Lawyer's Profile */}
      <div className="border border-gray-200 rounded-2xl text-center bg-[#0F0F0F26] p-6 sm:p-10 lg:p-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Lawyer's Profile Details
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mt-2 text-gray-600">
          Our lawyers are trained professionals who understand the complexities
          of the law. They can interpret laws, rules, and regulations to ensure
          you’re protected.
        </p>
      </div>

      {/* Lawyer Details */}
      <div className="border border-gray-200 p-6 sm:p-10 lg:p-16 mt-10 rounded-2xl flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <div className="flex-shrink-0">
          <img
            src={Image}
            alt={Name}
            className="w-full max-w-[308px] h-auto lg:w-[308px] lg:h-[308px] rounded-xl object-cover"
          />
        </div>

        <div className="text-center lg:text-left">
          <span className="bg-[#176AE51A] text-[#176AE5] text-sm font-medium py-1 px-3 rounded-full">
            {Experience}
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold mt-3">{Name}</h2>
          <p className="text-lg text-[#0F0F0F99] mt-1">{Speciality}</p>
          <p className="text-base flex justify-center lg:justify-start items-center gap-2 text-[#0F0F0FB3] mt-2">
            <FaRegRegistered /> License No: {LicenseNumber}
          </p>

          <p className="text-base mt-4">
            Availability: <span className="font-semibold">{Available}</span>
          </p>
          <p className="text-base">
            Consultation Fee:{" "}
            <span className="font-semibold text-green-600">{Fee}</span>
          </p>

          {/* Available Days */}
          <div className="text-base mt-4">
            <p className="mb-2 font-medium">Available Days:</p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {Availability.map((day, index) => (
                <span
                  key={index}
                  className="bg-[#FFA0001A] text-[#FFA000] border border-yellow-300 px-3 py-1 rounded-2xl text-sm font-medium"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Button */}
      <div className="border border-gray-200 p-6 sm:p-10 lg:p-16 mt-10 rounded-2xl">
        <h1 className="text-2xl font-bold text-center">Book an Appointment</h1>
        <hr className="border-t-2 border-dashed border-gray-300 w-full my-2" />
        <div className="flex justify-between items-center my-4">
          <span className="text-xl font-semibold">Availability</span>
          <span className="border text-[#09982F] font-semibold bg-[#09982F33] rounded-full px-3 py-2">
            {Available}
          </span>
        </div>
        <hr className="border-t-2 border-dashed border-gray-300 w-full my-2" />
        <div className="flex gap-4 items-center mt-8 rounded-2xl p-2 text-[#FFA000] bg-[#FFA0001A] ">
          <BsInfoSquare />
          <span>
            Due to high volume, appointments are currently for today only.
          </span>
        </div>
        <button
          onClick={handleBooking}
          className="btn btn-block bg-[#0EA106] mt-8 rounded-full text-white font-bold"
        >
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default LawyerDetails;
