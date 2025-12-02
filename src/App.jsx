import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import JoinUs from "./Pages/JoinUs/JoinUs";
import Event from "./Pages/Event/Event";
import Admin from "./Pages/Admin/Admin";
import Committee from "./Pages/Committee/Committee";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HallOfFame from "./Pages/HallOfFame/HallOfFame";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "join-us",
          element: <JoinUs />,
        },
        {
          path: "event",
          element: <Event />,
        },
        {
          path: "committee",
          element: <Committee />,
        },
        {
          path: "hall-of-fame",
          element: <HallOfFame />,
        },
      ],
    },
    {
      path: "admin",
      element: <Admin />,
    },
  ]);

  return (
    <>
      <HelmetProvider>
          <RouterProvider router={router} />
          <ToastContainer />
      </HelmetProvider>
    </>
  );
}
