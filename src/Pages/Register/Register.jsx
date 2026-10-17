import { useForm } from "react-hook-form";
import useAuth from "../../Context/useAuth";


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {registerUser} = useAuth();

    const handleRegistration = (data) => {
        console.log(data)
        registerUser(data.email, data.password)
        .then(result=> {
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)}>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
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
                            <button className="btn btn-neutral mt-4">Register Now!</button>
                        </fieldset>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Register;