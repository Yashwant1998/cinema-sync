import React, { useRef } from "react";
import { useState } from "react";
import { Header } from "./Header";
import { validateData } from "./utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./utils/firebase";

export const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignIn = () => {
    setSignIn(!isSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "" + errorMessage);
          // ..
        });
    } else {
      //
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          alt=""
          // src="https://media.istockphoto.com/id/1161463815/photo/digital-contents-concept-gui.jpg?s=2048x2048&w=is&k=20&c=UZgsSO9WT3FmZXxObxCWIGc4ZjBxakNnldO_V4XgSuQ="
          src="https://media.istockphoto.com/id/1391013277/vector/realistic-film-stripe-wave-on-blue-background-with-place-for-text-modern-3d-isometric-film.jpg?s=612x612&w=0&k=20&c=HjOQAt6S-ZNh69WRF91LyBPEsVel3Ct0AawbPj8MQBM="
        />
      </div>
      <form className="w-3/12 rounded-lg absolute p-12 bg-opacity-95 bg-white my-36 mx-auto right-0 left-0 text-blue-950">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="Full Name"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-blue-200 text-black"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-2 my-4 w-full bg-blue-200 text-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-blue-200 text-black"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          type="submit"
          onClick={handleSignIn}
          className="p-4 my-6 bg-blue-950 w-full rounded-lg text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignIn}>
          {isSignIn
            ? "New User? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
