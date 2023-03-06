import css from "../assets/img/css3.svg";
import html from "../assets/img/html.svg";
import js from "../assets/img/js.svg";
import ts from "../assets/img/ts.svg";
import react from "../assets/img/react.svg";
import redux from "../assets/img/redux.svg";
import node from "../assets/img/node.svg";
import py from "../assets/img/py.svg";
import pg from "../assets/img/pg.svg";
import mysql from "../assets/img/mysql.svg";
import "./SkillCard.css";

function SkillCard() {
  return (
    <div className="tam flex flex-wrap justify-center m-auto gap-4">
      <div className="m-4 text-center img">
        <a
          className="flex justify-center"
          href="https://icons8.com.br/license"
          target="_blank"
          rel="noreferrer"
        >
          <img data-aos="fade-right" id="3" src={js} alt="js" className="js" />
        </a>
      </div>
      <div className="m-4 text-center img">
        <a
          className="flex justify-center"
          href="https://icons8.com.br/license"
          target="_blank"
          rel="noreferrer"
        >
          <img
            data-aos="fade-left"
            id="1"
            src={css}
            alt="css"
            className="css"
          />
        </a>
      </div>
      <div className="m-4 text-center img">
        <a
          className="flex justify-center"
          href="https://icons8.com.br/license"
          target="_blank"
          rel="noreferrer"
        >
          <img
            data-aos="fade-right"
            id="2"
            src={html}
            alt="html"
            className="html"
          />
        </a>
      </div>
      <div className="m-4 text-center img">
        <a
          className="flex justify-center"
          href="https://icons8.com.br/license"
          target="_blank"
          rel="noreferrer"
        >
          <img data-aos="fade-left" id="4" src={ts} alt="ts" className="ts" />
        </a>
      </div>
      <div className="m-4 text-center img">
        <a
          className="flex justify-center"
          href="https://icons8.com.br/license"
          target="_blank"
          rel="noreferrer"
        >
          <img
            data-aos="fade-right"
            id="5"
            src={react}
            alt="react"
            className="react"
          />
        </a>
      </div>
      <div className="m-4 text-center img">
        <a
          className="flex justify-center"
          href="https://icons8.com.br/license"
          target="_blank"
          rel="noreferrer"
        >
          <img data-aos="fade-left" id="7" src={pg} alt="pg" className="pg" />
        </a>
      </div>
      <div className="m-4 text-center img">
        <a
          className="flex justify-center"
          href="https://icons8.com.br/license"
          target="_blank"
          rel="noreferrer"
        >
          <img
            data-aos="fade-right"
            id="8"
            src={mysql}
            alt="mysql"
            className="mysql"
          />
        </a>
      </div>
      <div className="m-4 text-center img">
        <a
          className="flex justify-center"
          href="https://icons8.com.br/license"
          target="_blank"
          rel="noreferrer"
        >
          <img
            data-aos="fade-left"
            id="6"
            src={redux}
            alt="redux"
            className="redux"
          />
        </a>
      </div>
      <div className="m-4 text-center img">
        <a
          className="flex justify-center"
          href="https://icons8.com.br/license"
          target="_blank"
          rel="noreferrer"
        >
          <img
            data-aos="fade-right"
            id="9"
            src={node}
            alt="node"
            className="node"
          />
        </a>
      </div>
      <div className="m-4 text-center img">
        <a
          className="flex justify-center"
          href="https://icons8.com.br/license"
          target="_blank"
          rel="noreferrer"
        >
          <img data-aos="fade-left" id="10" src={py} alt="py" className="py" />
        </a>
      </div>
    </div>
  );
}
export default SkillCard;
