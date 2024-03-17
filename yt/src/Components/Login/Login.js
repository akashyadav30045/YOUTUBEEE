
import React, { useRef, useState } from "react";
import { checkValidData } from "./LoginValidate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  signInWithPopup, GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./FireBase";
import { useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();

const Login = () => {
  // const navigate = useNavigate()

  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  // Email Login Singup Logic
  const handleButtonClick = () => {
    // Validate the form data
    // checkValidData;

    const Message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(Message);

    if (Message) return;
    // Signup Logic
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);

          // ..c
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  // Guest Login
  const GoogleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        seterrorMessage(errorMessage);

        // ...
      });
 
  };

  const GuestLogin = () => {
    const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    // Signed in..

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorMessage)
    // ...
  });
  }

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <img
        className="absolute h-full w-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBViiaSUr7Z3SrBkfZ4SUi8KuzJq8sBnnHnw&usqp=CAU"
        alt=""
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12  bg-black mt-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 "
      >
        <h1 className="font-bold text-3xl py-3">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder=" Full Name "
            className="p-4 my-2  w-full rounded-lg bg-gray-500 "
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Addresss"
          className="p-4 my-2 w-full rounded-md bg-gray-500"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full rounded-lg bg-slate-500"
        />

        <p className="text-red-500 font-bold text-lg py-2 my-[-2px] ">
          {errorMessage}
        </p>
        <button
          className="p-4 my-2 rounded-lg bg-red-700 w-full "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex">
          <button onClick={GuestLogin} className="p-4 mr-2  rounded-lg bg-green-700 w-[50%]  ">
            Login As Guest
          </button>

          <button
            onClick={GoogleLogin}
            className="p-4 rounded-lg bg-red-700 w-[50%] "
          >
            Google
          </button>
        </div>

        <p className="p-4 my-1 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Streamix? Sign Up Now"
            : "Already registered? Sign In Now.. "}
        </p>
      </form>
    </div>
  );
};

export default Login;
