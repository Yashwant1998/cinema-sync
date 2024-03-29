import GptSearchBar from "./GptSearchBar";
import { GptSearchMovieSuggestions } from "./GptSearchMovieSuggestions";
import { BG_URL } from "./utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSearchMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
