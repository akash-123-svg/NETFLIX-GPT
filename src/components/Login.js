import { useState,useRef } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef (null);
    const password = useRef (null);

    const handleButtonClick = () => {
       // validate the form data
       const msg = CheckValidData(email.current.value,password.current.value);
       setErrorMessage(msg);
       if(msg) return;

       if(!isSignInForm){
          // Sign Up logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
    // ...
     })
      .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode + ':' + errorMessage);
        });
     }
      else {
          // Sign In logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + ':' + errorMessage);
          });
     }

  };

    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
          <Header />
          <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo">
            </img>
          </div>
          <form onSubmit={(e) => e.preventDefault()}
          className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
            {!isSignInForm && (
            <input 
            ref={name} 
            type="text" 
            placeholder="Full Name" 
            className="p-4 my-4 w-full bg-gray-700" />
            )}
            <input
            ref={email} 
            type="text" placeholder="Email Address" 
            className="p-4 my-4 w-full bg-gray-700" />
            <input 
            ref={password}
            type="password" placeholder="Password" 
            className="p-4 my-4 w-full  bg-gray-700" />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" 
             onClick={handleButtonClick}>
              {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
             {isSignInForm ? "New to Netflix? Sign Up Now." : "Already registered? Sign In Now."}
            </p>
          </form>
        </div>
    )
};

export default Login;
