import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import Booking from '../Pages/Booking'
import Blog from '../Pages/Blog'
import ErrorPage from "../Pages/Errorpage"
import Home from "../Pages/Home"
import Errorpage from "../Pages/Errorpage";

const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      errorElement: ErrorPage,
      children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path : '/booking',
          element : <Booking></Booking>
        },
        {
          path : '/errorpage',
          element : <Errorpage></Errorpage>
        }
      ]
    }
  ])

  export default router