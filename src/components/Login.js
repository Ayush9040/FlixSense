import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState(null);
    const navigate = useNavigate();


    const email = useRef(null);
    const password = useRef(null);

    const handleSignInToggle = () => {
        setIsSignIn(!isSignIn);
    }

    const handleFormSubmit = () => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErrMsg(message);

        if(message) return;

        // Sign In /Sign Up Logic

        if(!isSignIn) {
            // Sign up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                navigate('/browse');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorCode + "-" + errorMessage);
                // ..
            });
        }
        else 
        {
            // SignIn Logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/browse');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorCode + "-" + errorMessage);
            });

        }


    }

    return (
        <div className="">
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_medium.jpg" alt="bg-image" />
            </div>

            <form className="absolute p-8 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded -lg" onSubmit={(e) => { e.preventDefault(); }}>
            <h1 className="text-3xl p-1 font-bold">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignIn && 
                    <input type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700" />

                }
                <input ref={email} type="email" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700" />
                <input ref={password} type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700" />
                <p className="text-red-700 text-lg py-2 font-bold">{errMsg}</p>
                <button className="p-2 my-4  w-full bg-red-800 rounded-sm" onClick={handleFormSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p>New to FlixSense ? <span className="cursor-pointer" onClick={handleSignInToggle}>{isSignIn ? "Sign Up" : "Sign In"}</span></p>
            </form>
            
        </div>
    )
}

export default Login;