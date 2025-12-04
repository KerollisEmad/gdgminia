import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";


export default function Layout() {
  return <>
        <ScrollToTop />
        <Navbar />  
        <Outlet />
        <Footer />
  </>
}
