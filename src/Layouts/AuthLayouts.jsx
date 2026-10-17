import { Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";
import authImg from "../assets/authImage.png"
const AuthLayouts = () => {
    
    
    
    return (
        <div className="mx-auto max-w-11/12">
            <Logo></Logo>
            <div className="flex justify-center mt-5">
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
                <div className="flex-1">
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayouts;