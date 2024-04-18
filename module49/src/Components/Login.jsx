import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
const Login = () => {
    const [userInfo, setUserInfo] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleAuth = () => {
        signInWithPopup(auth, provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setUserInfo(user)
        })
        .catch(error => error.message)
    }

    const handleGithubSign = () => {
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(result.user);
            setUserInfo(user)
        })
        .catch(error=>console.log(error))
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{setUserInfo(null)})
        .catch(error=>error.message)
    }
    return (
        <div>
            {
                userInfo ?
                <button onClick={handleSignOut}>Sign Out</button> :
                <>
                    <button onClick={handleGoogleAuth}>Google Login</button>
                    <button onClick={handleGithubSign}>GitHub Login</button>
                </>
            }
            {
                userInfo &&             
                <div>
                    <img src={userInfo.photoURL} alt="" />
                    <h2>{userInfo.displayName}</h2>
                    <h4>{userInfo.email}</h4>
                </div>
            }
        </div>
    );
};

export default Login;