import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import Booking from "../Pages/Booking";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Errorpage from "../Pages/Errorpage";
import LawyerDetails from "../Pages/LawyerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
        loader: () => fetch("/profile.json"),
        hydrateFallbackElement: (
          <div className="fixed inset-0 flex items-center justify-center">
            <span className="loading text-blue-600 loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/booking",
        element: <Booking />,
        loader: () => fetch("/profile.json"),
        hydrateFallbackElement: (
          <div className="fixed inset-0 flex items-center justify-center">
            <span className="loading text-blue-600 loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/lawyerdetails/:id",
        element: <LawyerDetails />,
        loader: () => fetch("/profile.json"),
        hydrateFallbackElement: (
          <div className="fixed inset-0 flex items-center justify-center">
            <span className="loading text-blue-600 loading-bars loading-xl"></span>
          </div>
        ),
      },
    ],
  },
]);

export default router;
