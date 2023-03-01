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
          Olá me chamo Gabriel, tenho 31 anos, sou de Volta Redonda - RJ. Sou
          apaixonado pelo desenvolvimento back-end, principalmente desenvolver
          com Nodejs. Sou muito curioso, amo aprender coisas novas e conhecer
          pessoas. A cerca de dois anos iniciei minha transição de carreira para
          área de tecnologia, logo de cara descobri uma nova paixão chamada{" "}
          <i>"Codar"</i>, e pode criar soluções para problemas reais. Certa vez
          ouvi uma frase numa palestra que dizia:{" "}
          <i>"Devemos ser apaixonados pelo problema e não pela solução"</i>.
          Assim, buscando sempre soluções cada vez mais inovadoras. E desde
          então venho estudando bastante, javascript, typescript, react, node e
          python. Meu compromisso em aprender continuamente me permite sempre
          buscar novas maneiras de aprimorar minhas habilidades e conhecimentos.
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
