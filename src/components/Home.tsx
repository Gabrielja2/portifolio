import home from "../assets/img/home.jpg";
import "./Home.css";
import { useTypewriter } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: [
      "Back-end Developer.",
      "",
      "Front-end Developer.",
      "Full-stack Developer.",
    ],
    loop: true,
  });
  return (
    <div
      id="home"
      className="bg-cover h-screen"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div
        id="frase"
        className="flex justify-center items-center mx-auto my-64"
      >
        <h1
          className="font-bold text-white mb-4 mr-3"
          style={{ fontSize: "5vw" }}
        >
          I'm a
        </h1>
        <h1
          className="font-bold text-orange-500 mb-4 mr-3"
          style={{ fontSize: "5vw" }}
        >
          {text}
        </h1>
      </div>
    </div>
  );
}

export default Home;
