import profile from "../assets/img/profile.jpg";

function Home() {
  return (
    <div
      id="about"
      style={{ background: "#001416" }}
      className="flex flex-col justify-center min-h-screen"
    >
      <div className="text-center">
        <h5
          data-aos="fade-up"
          className="text-3xl my-8 opacity-80 md:text-5xl lg:text-6xl text-orange-500"
        >
          --- About ---
        </h5>
      </div>
      <div className="flex flex-wrap justify-center mx-auto w-6/12">
        <p
          data-aos="fade-left"
          className="text-lg text-white mb-8 text-justify md:text-xl"
        >
          Olá me chamo Gabriel, tenho 31 anos, sou de Volta Redonda - RJ e sou
          apaixonado pelo desenvolvimento back-end, o temido "mundo sem divs e
          cores rsrs", especificamente Node.js, rsrs". Sou muito curioso, amo
          aprender coisas novas e conhecer pessoas. A cerca de dois anos iniciei
          minha transição de carreira para área de tecnologia, logo de cara
          descobri uma nova paixão chamada <i>"Codar"</i>, e através dos
          códigos, criar soluções para problemas reais. Certa vez ouvi uma frase
          numa palestra que me marcou, ela dizia:{" "}
          <i>"Devemos ser apaixonados pelo problema e não pela solução"</i>.
          Desde então venho estudando muito javascript, typescript, react, node
          e python, sempre mantendo o foco e a busca contínua em aperfeiçoar
          meus conhecimentos.
        </p>
        <img
          data-aos="zoom-in-up"
          id="profile-image"
          style={{
            width: "320px",
            height: "350px",
            borderRadius: "75% 20% 25% 71% / 43% 39% 57% 53%",
          }}
          src={profile}
          alt="profile-pic"
          className="m-8 md:m-0"
        />
      </div>
    </div>
  );
}

export default Home;
