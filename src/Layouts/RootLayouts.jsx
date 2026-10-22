import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const RootLayouts = () => {
    return (
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default RootLayouts;