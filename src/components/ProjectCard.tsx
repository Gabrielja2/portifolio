import blogs from "../assets/img/projects/blogs.jpg";
import car from "../assets/img/projects/car.png";
import delivery from "../assets/img/projects/delivery.png";
import poke from "../assets/img/projects/poke.png";
import smith from "../assets/img/projects/shop.jpg";
import tfc from "../assets/img/projects/tfc.png";
import trivia from "../assets/img/projects/trivia.png";
import tryunfo from "../assets/img/projects/tryunfo.png";
import wallet from "../assets/img/projects/wallet.png";
import "./ProjectCards.css";

function ProjectCards() {
  return (
    <div
      data-aos="zoom-in-up"
      className=" tam flex flex-wrap justify-center mx-auto gap-4"
    >
      <div className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/My-Wallet"
          target="_blank"
          rel="noreferrer"
        >
          <img id="1" src={blogs} alt="blogs" className="img" />
        </a>
        <span className="text-orange-500">Javascript / React</span>
      </div>
      <div className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Car-shop"
          target="_blank"
          rel="noreferrer"
        >
          <img id="2" src={car} alt="car" className="img" />
        </a>
        <span className="text-orange-500">Typescript / Node / Mongo</span>
      </div>
      <div className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Delivery-App"
          target="_blank"
          rel="noreferrer"
        >
          <img id="3" src={delivery} alt="delivery" className="img" />
        </a>
        <span className="text-orange-500">Javascript / React / Node</span>
      </div>
      <div className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Pokedex"
          target="_blank"
          rel="noreferrer"
        >
          <img id="4" src={poke} alt="poke" className="img" />
        </a>
        <span className="text-orange-500">Javascript / React</span>
      </div>
      <div className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Projeto-Trybesmith"
          target="_blank"
          rel="noreferrer"
        >
          <img id="5" src={smith} alt="smith" className="img" />
        </a>
        <span className="text-orange-500">Typescript / Node / MySQL</span>
      </div>
      <div className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Projeto-TFC"
          target="_blank"
          rel="noreferrer"
        >
          <img id="6" src={tfc} alt="tfc" className="img" />
        </a>
        <span className="text-orange-500">Typescript / Node / MySQL</span>
      </div>
      <div className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Project-Trivia"
          target="_blank"
          rel="noreferrer"
        >
          <img id="7" src={trivia} alt="trivia" className="img" />
        </a>
        <span className="text-orange-500">Javascript / React</span>
      </div>
      <div className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Tryunfo"
          target="_blank"
          rel="noreferrer"
        >
          <img id="8" src={tryunfo} alt="tryunfo" className="img" />
        </a>
        <span className="text-orange-500">Javascript / React</span>
      </div>
      <div className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/My-Wallet"
          target="_blank"
          rel="noreferrer"
        >
          <img id="9" src={wallet} alt="wallet" className="img" />
        </a>
        <span className="text-orange-500">Javascript / React</span>
      </div>
    </div>
  );
}
export default ProjectCards;
