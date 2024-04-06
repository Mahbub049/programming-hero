import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/Authprovider";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const {signInUser, signInGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then((result)=>{
            e.target.reset();
            navigate('/')

        })
        .catch(error=>console.log(error))
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="mb-7 text-center">New to this website? <Link className="link link-info" to={'/register'}>Register Now!</Link></p>
                <a onClick={handleGoogleSignIn} className="btn btn-primary w-1/4 ml-8 mb-8">Google</a>
                </div>
            </div>
            </div>
    );
};

export default Login;