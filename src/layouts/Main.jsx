import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Main = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            {/* outlet */}
           <div className="min-h-[calc(100vh-160px)]">
           <Outlet></Outlet>
           </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;