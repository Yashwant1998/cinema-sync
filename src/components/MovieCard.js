import React from "react";
import { IMG_CDN } from "./utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, movie }) => {
  const navigate = useNavigate();
  if (!posterPath) return;

  const handleNavigation = () => {
    if (movie.id) navigate("/movieinfo/" + movie.id);
  };

  return (
    <div className="w-36 md:w-48 pr-4" onClick={handleNavigation}>
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
