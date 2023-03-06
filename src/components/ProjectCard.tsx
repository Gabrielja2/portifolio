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
    <div className=" tam flex flex-wrap justify-center mx-auto gap-4 py-8">
      <div data-aos="fade-left" className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Projeto-Blogs-API"
          target="_blank"
          rel="noreferrer"
        >
          <img id="1" src={blogs} alt="blogs" className="img" />
          <span className="text-orange-500">Javascript / React</span>
        </a>
      </div>
      <div data-aos="fade-right" className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Car-shop"
          target="_blank"
          rel="noreferrer"
        >
          <img id="2" src={car} alt="car" className="img" />
          <span className="text-orange-500">Typescript / Node / Mongo</span>
        </a>
      </div>
      <div data-aos="fade-left" className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Delivery-App"
          target="_blank"
          rel="noreferrer"
        >
          <img id="3" src={delivery} alt="delivery" className="img" />
          <span className="text-orange-500">Javascript / React / Node</span>
        </a>
      </div>
      <div data-aos="fade-right" className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Pokedex"
          target="_blank"
          rel="noreferrer"
        >
          <img id="4" src={poke} alt="poke" className="img" />
          <span className="text-orange-500">Javascript / React</span>
        </a>
      </div>
      <div data-aos="fade-left" className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Projeto-Trybesmith"
          target="_blank"
          rel="noreferrer"
        >
          <img id="5" src={smith} alt="smith" className="img" />
          <span className="text-orange-500">Typescript / Node / MySQL</span>
        </a>
      </div>
      <div data-aos="fade-right" className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Projeto-TFC"
          target="_blank"
          rel="noreferrer"
        >
          <img id="6" src={tfc} alt="tfc" className="img" />
          <span className="text-orange-500">Typescript / Node / MySQL</span>
        </a>
      </div>
      <div data-aos="fade-left" className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Project-Trivia"
          target="_blank"
          rel="noreferrer"
        >
          <img id="7" src={trivia} alt="trivia" className="img" />
          <span className="text-orange-500">Javascript / React</span>
        </a>
      </div>
      <div data-aos="fade-right" className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/Tryunfo"
          target="_blank"
          rel="noreferrer"
        >
          <img id="8" src={tryunfo} alt="tryunfo" className="img" />
          <span className="text-orange-500">Javascript / React</span>
        </a>
      </div>
      <div data-aos="fade-left" className="m-4 text-center img">
        <a
          href="https://github.com/Gabrielja2/My-Wallet"
          target="_blank"
          rel="noreferrer"
        >
          <img id="9" src={wallet} alt="wallet" className="img" />
          <span className="text-orange-500">Javascript / React</span>
        </a>
      </div>
    </div>
  );
}
export default ProjectCards;
