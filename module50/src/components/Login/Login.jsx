import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [sucess, setSucess] = useState('');
    const [errorState, setErrorState] = useState('');
    const [passwordState, setPasswordState] = useState(false);
    const emailRef = useRef(null);
    const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    const handleData = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSucess('');
        setErrorState('')

        if(password.length <6){
            setErrorState('Password should be at least 6 characters');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setErrorState('Your password must have a uppercase character');
            return;
        }
        else if(!pattern.test(email)){
            setErrorState('Your email is not valid');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user.emailVerified){
                setSucess('User Logged In Successfully');
            }
            else{
                alert('Please verify your email')
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorState(errorMessage)
        });
    }
    const handleForgotPassword = (e) => {
        const email =  emailRef.current.value;
        if(!email){
            setErrorState('Please add a email');
            return;
        }
        else if(!pattern){
            setErrorState('Please add valid email');
            return
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(()=>{})
            .catch(error=>setErrorState(error))
        }
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="w-1/4">
                    {
                        errorState && <p className="text-red-500 text-center">{errorState}</p>
                    }
                    {
                        sucess && <p className="text-green-500 text-center">{sucess}</p>
                    }
                <div className="card w-full shadow-2xl bg-base-100">
                <form onSubmit={handleData} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" ref={emailRef} className="input input-bordered" required name="email" required/>
                    </div>
                    <div className="form-control flex">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={passwordState ? 'text' : 'password'} placeholder="password" className="input input-bordered" name="password" required />
                        <span onClick={()=> setPasswordState(!passwordState)}>
                        {
                            passwordState ?  <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                        }
                        </span>
                    
                    <label className="label">
                        <a href="#" onClick={handleForgotPassword} className="label-text-alt link link-hover">Forgot password?</a>
                    </label>

                    <div className="flex gap-2">
                        <input type="checkbox" name="terms" id="terms" />
                        Accept our terms and conditions
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <span>Don't have an account? <Link to={'/heroRegister'}>Click Here</Link></span>
                    </div>
                </form>
                </div>
            </div>
            </div>
    </div>
    );
};

export default Login;