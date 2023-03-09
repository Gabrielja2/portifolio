import { useEffect, useState } from "react";
import linkedin from ".././assets/img/nav-icon1.svg";
import github from ".././assets/img/nav-icon2.svg";
import instagram from ".././assets/img/nav-icon3.svg";
import email from ".././assets/img/nav-icon4.svg";
import zap from ".././assets/img/nav-icon5.svg";
import heart from ".././assets/img/heart.svg";
import br from ".././assets/img/br.svg";
import us from ".././assets/img/us.svg";
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

  //PT
  $(function () {
    $(".br").click(function () {
      //Navbar large size
      $(".hello").children().eq(0).text("Olá, Bem-vindo!");
      $(".names").children().eq(0).text("Inicio");
      $(".names").children().eq(1).text("Sobre");
      $(".names").children().eq(2).text("Projetos");
      $(".names").children().eq(3).text("Habilidades");

      //Navbar small size
      $(".names-before").children().eq(0).text("Inicio");
      $(".names-before").children().eq(1).text("Sobre");
      $(".names-before").children().eq(2).text("Projetos");
      $(".names-before").children().eq(3).text("Habilidades");

      //Home
      $(".title-home").children().eq(0).text("Eu sou");

      //About
      $(".title-about").children().eq(0).text("--- Início ---");
      $(".text-about")
        .children()
        .eq(0)
        .text(
          "Olá, meu nome é Gabriel, tenho 31 anos, sou de Volta Redonda/RJ. Sou desenvolvedor fullstack e apaixonado por backend, principalmente desenvolver em Nodejs. Sou muito curioso, amo aprender coisas novas e conhecer pessoas. Há cerca de dois anos iniciei minha transição de carreira para a área de tecnologia e logo cedo descobri essa alegria e satisfação em criar códigos e soluções para problemas reais. Meu compromisso em aprender contínuamente, me permite procurar sempre novas formas de melhorar as minhas competências e conhecimentos, e assim procurar sempre soluções cada vez mais inovadoras."
        );

      //Projects
      $(".tltle-project").children().eq(0).text("--- Projetos ---");

      //Habilidades
      $(".title-skills").children().eq(0).text("--- Habilidades ---");

      //Footer
      $(".txt1-footer").children().eq(0).text("Conecte-se comigo pelo");
      $(".txt1-footer").children().eq(2).text("ou me mande um");
    });
  });

  //EN
  $(function () {
    $(".us").click(function () {
      //Navbar large size
      $(".hello").children().eq(0).text("Hello, Wellcome!");
      $(".names").children().eq(0).text("Home");
      $(".names").children().eq(1).text("About");
      $(".names").children().eq(2).text("Projects");
      $(".names").children().eq(3).text("Skills");

      //Navbar small size
      $(".names-before").children().eq(0).text("Home");
      $(".names-before").children().eq(1).text("About");
      $(".names-before").children().eq(2).text("Projects");
      $(".names-before").children().eq(3).text("Skills");

      //Home
      $(".title-home").children().eq(0).text("I'm a");

      //About
      $(".title-about").children().eq(0).text("--- Home ---");
      $(".text-about")
        .children()
        .eq(0)
        .text(
          "Hello, my name is Gabriel, I'm 31 years old, I'm from Volta Redonda/RJ. I'm a fullstack developer and passionate about backend, mainly developing in Nodejs. I am very curious, I love learning new things and meeting people. About two years ago I started my career transition to the technology area and soon discovered this joy and satisfaction in creating codes and solutions to real problems. My commitment to continuous learning allows me to always look for new ways to improve my skills and knowledge, and thus always look for increasingly innovative solutions."
        );

      //Projects
      $(".tltle-project").children().eq(0).text("--- Projects ---");

      //Habilidades
      $(".title-skills").children().eq(0).text("--- Skills ---");

      //Footer
      $(".txt1-footer").children().eq(0).text("Connect with me on");
      $(".txt1-footer").children().eq(2).text("or send me an");
    });
  });

  return (
    <nav id="Navbar" className="fixed top-0 z-50 w-full">
      <div className="mx-3">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="lenguage hidden md:flex">
              <a href="#navbar" className="br mr-4">
                <img width="27px" src={br} alt="Brazil flag" />
              </a>
              <a href="#navbar" className="us  mr-4">
                <img width="26px" src={us} alt="US flag" />
              </a>
            </div>
            <div className="hello">
              <span className="hello mr-1 text-orange-500 text-2xl">
                Hello, Wellcome!{" "}
              </span>
            </div>
            <div id="mydiv">
              <img
                className="w-7 sm:w-10"
                draggable="true"
                id="draggable-img"
                src={heart}
                alt="heart"
              />
            </div>
          </div>
          <div className="names hidden md:flex">
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
          <div className="names-before ml-3">
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
            <div className="lenguage md:hidden flex pt-1">
              <a href="#navbar" className="br mr-4">
                <img width="27px" src={br} alt="Brazil flag" />
              </a>
              <a href="#navbar" className="us  mr-4">
                <img width="26px" src={us} alt="US flag" />
              </a>
            </div>
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
