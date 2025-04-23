import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import Booking from '../Pages/Booking'
import Blog from '../Pages/Blog'
import Home from "../Pages/Home"
import Errorpage from "../Pages/Errorpage";

const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          index: true,
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('/profile.json')
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
          loader: () => fetch('/profile.json')
        },
        {
          path : '/booking',
          element : <Booking></Booking>,
          loader: () => fetch('/profile.json')
        },
      ]
    }
  ])

  export default router