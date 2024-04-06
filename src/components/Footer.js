import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer class="bg-black p-5 text-white font-bold grid text-center content-center h-20 rounded">
      <div>
        <p> Made with ❤ by Yashwant Kumar ! </p>
        <p>
          Connect with me{" "}
          <Link
            target="_blank"
            to={"https://www.instagram.com/yashwant_motwani/"}>
            <span className="text-white lg:text-2xl text-xl md:text-2xl">
              {" "}
              <InstagramIcon />
            </span>
          </Link>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/yashwant-kumar-6a9aa5160/"}>
            <span className="text-white lg:text-2xl text-xl md:text-2xl">
              {" "}
              <LinkedInIcon />
            </span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
