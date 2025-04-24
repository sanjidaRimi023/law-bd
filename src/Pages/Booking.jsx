import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ConformBooking from "../Components/ConformBooking";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("bookings");
    setBookings(data ? JSON.parse(data) : []);
    setRefetch(false);
  }, [refetch]);

  return (
    <div>
      {!bookings?.length ? (
        <div className="text-center my-20 bg-[#FFFFFF] lg:mx-0 mx-4 px-2 py-10 lg:my-20 lg:p-20 rounded-xl">
          <h1 className="text-2xl font-bold my-5">
            You have not booked any Appointment yet
          </h1>
          <p>
            Our platform connects you with verified , experienced doctors across
            various specialties-all at your convenience.
          </p>
          <button className="btn btn-primary my-5">
            <Link to={"/"}>Book An Appointment</Link>
          </button>
        </div>
      ) : (
        <ConformBooking setRefetch={setRefetch} bookings={bookings} />
      )}
    </div>
  );
};

export default Booking;
