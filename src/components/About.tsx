import profile from "../assets/img/profile.jpg";

function About() {
  return (
    <div
      id="about"
      style={{ background: "#001416" }}
      className="flex flex-col justify-center min-h-screen py-8"
    >
      <div className="text-center">
        <h5
          data-aos="fade-up"
          className="text-3xl pb-24 opacity-80 md:text-5xl lg:text-6xl text-orange-500"
        >
          --- About ---
        </h5>
      </div>
      <div className="flex flex-wrap justify-center mx-auto sm:w-2/4 w-3/4">
        <p
          data-aos="fade-left"
          className="text-lg text-white mb-8 text-justify md:text-xl"
        >
          Hello, my name is Gabriel, I'm 31 years old, I'm from Volta
          Redonda/RJ. I'm a fullstack developer and passionate about the
          backend, mainly developing in Nodejs. I am very curious and I love
          learning new things and meeting people. About two years ago I started
          my career transition to the technology area and early on I discovered
          this joy and satisfaction in creating codes and through them creating
          solutions to real problems. My commitment to continuous learning
          allows me to always look for new ways to improve my skills and
          knowledge, and thus always look for increasingly innovative solutions.
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
          className="py-8 m-8 md:m-0"
        />
      </div>
    </div>
  );
}

export default About;
