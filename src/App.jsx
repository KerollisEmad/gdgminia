import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import JoinUs from "./Pages/JoinUs/JoinUs";
import Event from "./Pages/Event/Event";
import Admin from "./Pages/Admin/Admin";
import Committee from "./Pages/Committee/Committee";
import HallOfFame from "./Pages/HallOfFame/HallOfFame";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="join-us" element={<JoinUs />} />
            <Route path="event" element={<Event />} />
            <Route path="committee" element={<Committee />} />
            <Route path="hall-of-fame" element={<HallOfFame />} />
          </Route>
          <Route path="admin" element={<Admin />} />
        </Routes>
      </HashRouter>
      <ToastContainer />
    </HelmetProvider>
  );
}
