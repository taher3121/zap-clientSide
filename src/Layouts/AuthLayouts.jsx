import { Link, Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";
import authImg from "../assets/authImage.png"
const AuthLayouts = () => {
    
    
    
    return (
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <Link to="/"><Logo></Logo></Link>
            <div className="mt-5 flex min-h-[calc(100svh-7rem)] flex-col items-center gap-8 py-6 lg:flex-row lg:gap-12 lg:py-10">
                <div className="w-full min-w-0 lg:flex-1">
                    <Outlet></Outlet>
                </div>
                <div className="hidden w-full min-w-0 lg:block lg:flex-1">
                    <img src={authImg} alt="" className="mx-auto h-auto max-h-[70vh] w-full object-contain" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayouts;