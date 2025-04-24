import React from "react";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = ['#0088FE', '#FFBB28', '#00C49F', '#FF8042', 'red', 'orange'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
          ${x + width / 2},${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
          ${x + width},${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ConformBooking = ({ bookings, setRefetch }) => {
  if (!bookings) {
    return <div>Error: No booking data provided!</div>;
  }

  const cancelBooking = (id) => {
    const filterBooking = bookings.filter(b => b.LicenseNumber !== id);
    localStorage.setItem("bookings", JSON.stringify(filterBooking));
    setRefetch(true);
    toast.success("Your Appointment is successfully canceled");
  };


  const data = bookings.map(booking => ({
    name: booking.Name, 
    Fee: parseInt(booking.Fee), 
  }));

  return (
    <div>
      <div className="container mx-auto my-10 rounded-xl lg:px-0 lg:p-10 bg-[#FFFFFF] lg:w-[1480px]">
       <ResponsiveContainer width="100%" height={300}>
       <BarChart
          width={1280}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="Fee"
            shape={<TriangleBar />}
            label={{ position: "top", fill: "#000", fontSize: 14 }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
       </ResponsiveContainer>
      </div>

      <div>
        <h1 className="lg:text-6xl text-3xl lg:mt-20 font-bold text-center mt-10">
          My Today Appointments
        </h1>
        <p className="text-center my-5">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      {bookings.map((booking, idx) => (
        <div key={idx} className="p-8 bg-white lg:mt-10 m-4 border border-gray-300 rounded-xl">
          <h1 className="text-2xl font-bold mb-5 text-center lg:text-start">
            {booking.Name}
          </h1>
          <div className="lg:flex lg:justify-between text-center">
            <h2 className="text-gray-500">{booking.Speciality}</h2>
            <h2 className="text-gray-500">
              Appointment fee: {booking.Fee} Taka + VAT
            </h2>
          </div>
          <hr className="border-t-2 border-dashed border-gray-300 w-full mt-4" />
          <button
            onClick={() => cancelBooking(booking.LicenseNumber)}
            className="btn btn-block rounded-[19px] text-red-600 border border-red-600 mt-10"
          >
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default ConformBooking;
