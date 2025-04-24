import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../Components/Navbar";

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto">
      <Navbar></Navbar>
      </div>
      <div className="flex flex-col items-center justify-center h-[80vh] 
      text-center p-8 bg-gray-100">
        
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </>
  );
};

export default Errorpage;
