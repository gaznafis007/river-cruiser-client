import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

 function Main() {
  return (
    <div className="scroll-smooth">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main