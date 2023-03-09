import "./Home.css";
import { useTypewriter } from "react-simple-typewriter";

function Home() {
  const [textEn] = useTypewriter({
    words: [
      "Back-end Developer.",
      "",
      "Front-end Developer.",
      "Full-stack Developer.",
    ],
    loop: true,
  });

  const [textPt] = useTypewriter({
    words: [
      "Desenvolvedor Back-end.",
      "",
      "Desenvolvedor Front-end.",
      "Desenvolvedor Full-stack.",
    ],
    loop: true,
  });
  let element = document.querySelector(".im");

  return (
    <div id="home" className="flex justify-center h-screen">
      <div id="frase" className="title-home flex justify-center items-center">
        <h1
          className="im font-bold text-white mr-3"
          style={{ fontSize: "5vw" }}
        >
          I'm a
        </h1>
        <h1
          className="font-bold text-orange-500 mr-3"
          style={{ fontSize: "5vw" }}
        >
          {element?.textContent === "I'm a" ? textEn : textPt}
        </h1>
      </div>
    </div>
  );
}

export default Home;
