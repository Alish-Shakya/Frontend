import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="md:flex items-center justify-between py-6">
      {/* nav logo */}
      <div className=" m-5 text-2xl md:m-8 flex flex-shrink-0 items-center md:text-4xl font-bold">
        <a href="/"> Shakya.tech</a>
      </div>

      {/* nav link  */}
      <div className="hidden md:flex gap-6 mt-4 md:mt-0">
        {["Home", "About", "Skills", "Contact"].map((link, index) => (
          <a
            key={index}
            href="/"
            className="px-4 py-1 rounded-md transition-colors duration-1000 hover:bg-yellow-300 hover:text-black hover:font-bold"
          >
            {link}
          </a>
        ))}
      </div>

      {/* nav social link */}
      <div className="flex items-center gap-4 ml-5 md:mr-10 text-2xl">
        <a
          href="https://www.Facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-600 transform hover:-translate-y-1 transition duration-300"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="transform hover:-translate-y-1 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-400 transform hover:-translate-y-1 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="InstagramS"
          className="hover:text-red-600 transform hover:-translate-y-1 transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
