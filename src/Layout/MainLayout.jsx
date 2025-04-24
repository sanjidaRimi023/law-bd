import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70">
        <span className="loading text-blue-600 loading-bars loading-xl"></span>
      </div>
      ) : (
        <>
          <div className="container mx-auto">
            <Navbar />
          </div>
          <hr className="border border-gray-300 w-full" />
          <div className="mx-auto px-4 md:px-12">
            <Outlet />
          </div>

          <Footer />
          <Toaster richColors={true} />
        </>
      )}
    </>
  );
};

export default MainLayout;
