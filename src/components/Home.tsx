import home from "../assets/img/home.jpg";
import "./Home.css";

function Home() {
  return (
    <div
      id="home"
      className="bg-cover h-screen"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div id="frase" className="flex justify-center items-center h-full">
        <h1
          className="font-bold text-white mb-4 opacity-80 mr-3"
          style={{ fontSize: "5vw" }}
        >
          I'm a
        </h1>
        <div className="flex ">
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            F
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            u
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            l
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            l
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            -
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            S
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            t
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            a
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            c
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500 mr-3"
            style={{ fontSize: "5vw" }}
          >
            k
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            D
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 letter hover:text-orange-500"
            style={{ fontSize: "5vw" }}
          >
            e
          </h1>
          <h1
            className="font-bold text-white mb-4 opacity-80 hover:text-orange-500 letter"
            style={{ fontSize: "5vw" }}
          >
            v
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
