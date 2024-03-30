import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "./utils/constants";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { toggleGptSearchView } from "./utils/gptSlice";
import { changeLanguage } from "./utils/configSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { showGptSearch } = useSelector((state) => state.gptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email } = user;
        dispatch(addUser({ id: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribing the auth updates when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" alt="logo" src={LOGO} />
      <div>
        {user && (
          <div className="flex p-2 justify-between mt-5">
            {showGptSearch && (
              <select
                className="p-2 mr-2 bg-gray-900 text-white rounded-lg font-bold"
                onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleSignOut}
              className="bg-transparent rounded-lg font-bold text-white border border-white p-2 mr-2">
              {/* Welcome {user.name} */}
              Sign Out <PowerSettingsNewIcon />
            </button>
            <button
              onClick={handleGptSearch}
              className="bg-red-900 rounded-lg text-white p-2 font-bold ">
              GPT Search <TravelExploreIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
