import { useEffect, useState } from "react";
import linkedin from ".././assets/img/nav-icon1.svg";
import github from ".././assets/img/nav-icon2.svg";
import instagram from ".././assets/img/nav-icon3.svg";
import email from ".././assets/img/nav-icon4.svg";
import zap from ".././assets/img/nav-icon5.svg";
import heart from ".././assets/img/heart.svg";
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
    <nav id="Navbar" className="fixed top-0 z-50 w-full">
      <div className="mx-3">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <span className="mr-1 text-orange-500 text-xl">
              Hello, Wellcome!{" "}
            </span>
            <div id="mydiv">
              <img
                draggable="true"
                id="draggable-img"
                src={heart}
                alt="heart"
                width="28px"
              />
            </div>
          </div>
          <div className="hidden md:flex">
            <a
              href="#home"
              className="font-bold text-white opacity-80 hover:text-orange-500"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-bold text-white opacity-80 ml-3 hover:text-orange-500"
            >
              About
            </a>
            <a
              href="#projects"
              className="font-bold text-white opacity-80 ml-3 hover:text-orange-500"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="font-bold text-white opacity-80 ml-3 hover:text-orange-500"
            >
              Skills
            </a>
          </div>
          <div className="hidden md:flex">
            <a
              href="https://www.linkedin.com/in/gabriel-pereira-antunes/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://github.com/Gabrielja2"
              target="_blank"
              className="ml-3"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a
              href="https://www.instagram.com/gabrielja2antunes/"
              target="_blank"
              className="ml-3"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="mailto:gabrielja2antunes@gmail.com"
              className="ml-3 opacity-70"
              rel="noreferrer"
            >
              <img width="28px" src={email} alt="send-email" />
            </a>
            <a
              target="_blank"
              href="https://wa.me/5524999092052?text=sua%20mensagem"
              className="ml-3 opacity-70"
              rel="noreferrer"
            >
              <img width="28px" src={zap} alt="send-email" />
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-orange-500 focus:outline-none focus:text-white"
              onClick={handleToggle}
            >
              {showLinks ? (
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M4 4 L20 20" stroke="#ff5e00" strokeWidth="2" />
                  <path d="M20 4 L4 20" stroke="#ff5e00" strokeWidth="2" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fill="#ff5e00"
                    fillRule="evenodd"
                    d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 8h18V6H3v2z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {showLinks && (
        <div className="md:hidden flex justify-between">
          <div className="ml-3">
            <a
              href="#home"
              className="text-white opacity-80 hover:text-orange-500 block"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white opacity-80 hover:text-orange-500 block"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white opacity-80 hover:text-orange-500 block"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-white opacity-80 hover:text-orange-500 block"
            >
              Skills
            </a>
          </div>
          <div className="mr-2">
            <a
              href="https://www.linkedin.com/in/gabriel-pereira-antunes/"
              target="_blank"
              className="block"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://github.com/Gabrielja2"
              target="_blank"
              className="block"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a
              href="https://www.instagram.com/gabrielja2antunes/"
              target="_blank"
              className="block"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="mailto:gabrielja2antunes@gmail.com"
              className="block opacity-70"
              rel="noreferrer"
            >
              <img width="27px" src={email} alt="send-email" />
            </a>
            <a
              target="_blank"
              href="https://wa.me/5524999092052?text=sua%20mensagem"
              className="block opacity-70"
              rel="noreferrer"
            >
              <img width="28px" src={zap} alt="send-email" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
