import { useForm } from "react-hook-form";
import useAuth from "../../Context/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogIn from "../../Components/SocialLogIN/SocialLogIn";
import axios from "axios";


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistration = (data) => {
        console.log(data.photo[0])

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user)

                const photo = data.photo[0];
                const formData = new FormData();
                formData.append("image", photo)

                axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Api}`, formData)
                    .then(res => {

                        console.log("after Image Upload" , res.data.data.url)

                        const User_Profile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }

                        updateUserProfile(User_Profile).then(res => {
                            console.log(res)
                            navigate(location?.state || '/')

                        }).catch(err => {
                            console.log(err)
                        })
                    })



            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(handleRegistration)}>

                <div>
                    <div className="card-body">
                        <p className="text-3xl text-center">Welcome!</p>
                        <p className="text-center">Please Register</p>
                        <fieldset className="fieldset">

                            {/* email.... */}
                            <label className="label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                            {errors.email?.type === 'required' && <p className="text-red-500">email is required</p>}

                            {/* name.... */}
                            <label className="label">Name</label>
                            <input type="text" {...register('name', { required: true })} className="input" placeholder="Your Name" />
                            {errors.name?.type === 'required' && <p className="text-red-500">Name is required</p>}


                            {/* photo... */}
                            <label className="label">Photo</label>

                            <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Email" />
                            {errors.photo?.type === 'required' && <p className="text-red-500">photo is required</p>}

                            {/* password... */}
                            <label className="label">Password</label>
                            <input type="password" {...register('password', { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} className="input" placeholder="Password" />

                            {errors.password?.type === 'minLength' && <p className="text-red-500">
                                password must be in 8 character</p>}

                            {errors.password?.type === 'pattern' && <p className="text-red-500">
                                Requires at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.</p>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register Now!</button>
                        </fieldset>
                        <p>Already Have an Account.<Link to="/login" state={location.state} className="text-blue-500 underline">Login</Link></p>
                    </div>
                </div>

            </form>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register;