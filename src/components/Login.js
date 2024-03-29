import React, { useRef } from "react";
import { useState } from "react";
import { Header } from "./Header";
import { validateData } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { BG_URL } from "./utils/constants";

export const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignIn = () => {
    setSignIn(!isSignIn);
  };
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    const message = validateData(email.current.value, password.current.value);

    setErrorMessage(message);
    console.log(message);
    if (message) return;
    // Sign UP
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //    navigate("../browse");
          // ...
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, displayName, email } = auth.currentUser;
              dispatch(addUser({ id: uid, email: email, name: displayName }));
            })
            .catch((error) => {
              // An error occurred
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "" + errorMessage);
        });
    }
    //Sign In
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential);
          const { uid, displayName, email } = auth.currentUser;
          dispatch(addUser({ id: uid, email: email, name: displayName }));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" alt="" src={BG_URL} />
      </div>

      <div className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="Full Name"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={handleSignIn}
          className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer hover:underline"
          onClick={toggleSignIn}>
          {isSignIn
            ? "New User? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </div>
    </div>
  );
};
