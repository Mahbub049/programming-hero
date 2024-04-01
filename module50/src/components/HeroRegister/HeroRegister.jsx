import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
const HeroRegister = () => {
    const [sucess, setSucess] = useState('');
    const [errorState, setErrorState] = useState('');
    const handleData = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setSucess('');
        setErrorState('')

        if(password.length <6){
            setErrorState('Password should be at least 6 characters');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setSucess('User Created Successfully')
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
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required name="email" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default HeroRegister;