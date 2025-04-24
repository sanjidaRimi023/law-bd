import React from "react";
import { toast } from "react-toastify";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ConformBooking = ({ bookings, setRefetche }) => {
  if (!bookings) {
    return <div>Error: No booking data provided!</div>;
  }
  const cencelBooking = (id) => {
    // console.log(id);
    const filterBooking = bookings.filter((b) => b.registration_number !== id);
    localStorage.setItem("Bookings", JSON.stringify([...filterBooking]));
    setRefetche(true);
    toast.success("Your Appointment is successfully cenceled");
  };
  const data = bookings.map((booking) => ({
    name: booking.name,
    Fee: booking.fee,
  }));
  console.log(bookings);
  return (
    <div>
      <div className="mx-auto my-10 rounded-xl lg:px-0 lg:p-10 bg-[#FFFFFF] lg:w-[1480px]">
        <BarChart
          width={1440}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="Fee"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <div>
        <h1 className="lg:text-6xl text-3xl lg:mt-20 font-bold text-center mt-10 ">
          My Today Appointments
        </h1>
        <p className="text- my-5 text-center">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      {bookings.map((booking, idx) => (
        <div key={idx}>
          <div className="p-8 bg-white lg:mt-10 m-4 rounded-xl">
            <h1 className="text-2xl font-bold mb-5 text-center lg:text-start">
              {booking.name}
            </h1>
            <div className="lg:flex lg:justify-between text-center">
              <h2 className="text-gray-500">{booking.education}</h2>
              <h2 className="text-gray-500">
                Appointment fee: {booking.fee} Taka + VAT
              </h2>
            </div>

            <button
              onClick={() => cencelBooking(booking.registration_number)}
              className="btn btn-block rounded-[19px] text-red-600 border border-red-600 mt-10"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConformBooking;
