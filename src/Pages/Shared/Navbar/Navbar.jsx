import { Link, NavLink } from "react-router";
import Logo from "../../../Components/Logo/Logo";
import useAuth from "../../../Context/useAuth";

const Header = () => {

    const {user,LogOut}=useAuth();
    const handleLogOut =()=>{
        LogOut()
        .then()
        .catch( err =>{
            console.log(err)
        })
    }
    
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/AboutUs">About Us</NavLink></li>
        <li><NavLink to="/Coverage">Coverage</NavLink></li>
    </>

    return (
        <div className="navbar relative z-20 my-3 rounded-2xl bg-base-100 px-2 shadow-sm sm:my-5 sm:px-4">
                <div className="navbar-start min-w-0 flex-1">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" aria-label="Open navigation menu" className="btn btn-ghost btn-sm mr-1 lg:hidden">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-30 mt-3 w-56 rounded-box bg-base-100 p-2 shadow">
                            {links}
                            {user ? (
                                <li><button onClick={handleLogOut}>LogOut</button></li>
                            ) : (
                                <>
                                    <li><NavLink to="/login">LogIn</NavLink></li>
                                    <li><NavLink to="/register">Register</NavLink></li>
                                </>
                            )}
                            <li><NavLink to="/rider">Be a Rider</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/"><Logo></Logo></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                </ul>
                </div>
                <div className="navbar-end hidden flex-1 gap-2 sm:flex">
                    {user ? (
                        <button onClick={handleLogOut} className="btn btn-sm xl:btn-md">LogOut</button>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-sm xl:btn-md">LogIn</Link>
                            <Link to="/register" className="btn btn-sm xl:btn-md">Register</Link>
                        </>
                    )}
                    <Link to="/rider" className="btn btn-primary btn-sm text-black xl:btn-md">Be a Rider</Link>
                </div>
        </div>
    );
};

export default Header;