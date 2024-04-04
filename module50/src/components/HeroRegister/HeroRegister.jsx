import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeroRegister = () => {
    const [sucess, setSucess] = useState('');
    const [errorState, setErrorState] = useState('');
    const [passwordState, setPasswordState] = useState(false);
    const handleData = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const acceptted = e.target.terms.checked;
        console.log(email, password, acceptted)
        console.log(name);
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
        else if(!acceptted){
            setErrorState('You have to check the terms and conditions');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setSucess('User Created Successfully')
            updateProfile(user, {
                displayName: name,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
            })
            .then(()=>{ 
                console.log(user)
            })
            .catch((error)=>{})
            sendEmailVerification(user)
            .then(()=>{})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorState(errorMessage)
        });
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
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered" required/>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required name="email" required/>
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
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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
                            <span>Already have an account? <Link to={'/login'}>Log In</Link></span>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default HeroRegister;