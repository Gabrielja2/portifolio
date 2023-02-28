import { useEffect, useState } from "react";
import linkedin from ".././assets/img/nav-icon1.svg";
import github from ".././assets/img/nav-icon2.svg";
import instagram from ".././assets/img/nav-icon3.svg";
import "./Navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  function handleToggle() {
    setShowLinks(!showLinks);
  }

  useEffect(() => {
    scrollFunction();
  }, []);

  function scrollFunction() {
    const element = document.querySelector("#Navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        element?.classList.add("scrolled");
      } else {
        element?.classList.remove("scrolled");
      }
    });
  }

  return (
    <nav id="Navbar" className="fixed top-0 z-50 w-full bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href=" " className="text-orange-500 rounded font-bold text-xl">
              Hello, Wellcome!{" "}
            </a>
            <img
              alt=""
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="28"
            ></img>
          </div>
          <div className="hidden md:flex">
            <a
              href="#home"
              className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Skills
            </a>
          </div>
          <div className="hidden md:flex">
            <a
              href="https://www.linkedin.com/in/gabriel-pereira-antunes/"
              target="_blank"
              className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://github.com/Gabrielja2"
              target="_blank"
              className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a
              href="https://www.instagram.com/gabrielja2antunes/"
              target="_blank"
              className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-orange-500 focus:outline-none focus:text-white"
              aria-label="Toggle menu"
              onClick={handleToggle}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 8h18V6H3v2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showLinks && (
        <div className="md:hidden flex justify-between">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-gray-300 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="https://www.linkedin.com/in/gabriel-pereira-antunes/"
              target="_blank"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://github.com/Gabrielja2"
              target="_blank"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a
              href="https://www.instagram.com/gabrielja2antunes/"
              target="_blank"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
