import { useForm } from "react-hook-form";
import useAuth from "../../Context/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogIn from "../../Components/SocialLogIN/SocialLogIn";


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleSignIn = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
        .then(result=> {
            console.log(result.user)
            navigate(location?.state || '/');

        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(handleSignIn)}>

                
                    <div className="card-body">
                        <p className="text-3xl text-center">Welcome!</p>
                        <p className="text-center">Please LogIn</p>
                        
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                            {errors.email?.type === 'required' && <p className="text-red-500">email is required</p>}

                            <label className="label">Password</label>
                            <input type="password" {...register('password', { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} className="input" placeholder="Password" />

                            {errors.password?.type === 'minLength' && <p className="text-red-500">
                                password must be in 8 character</p>}

                            {errors.password?.type === 'pattern' && <p className="text-red-500">
                                Requires at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.</p>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        <p>New to here. <Link to="/register" state={location.state} className="text-blue-500 underline">Register</Link></p>
                    </div>
                
                                    
            </form>
            <SocialLogIn></SocialLogIn>
            
        </div>
    );
};

export default Login;