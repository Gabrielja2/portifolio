import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div
      id="skills"
      style={{ background: "#000507" }}
      className="flex flex-col justify-center min-h-screen"
    >
      <div className="text-center mt-4">
        <h5
          data-aos="fade-up"
          className="text-3xl my-8 opacity-80 md:text-5xl lg:text-6xl text-orange-500"
        >
          --- Skills ---
        </h5>
      </div>
      <SkillCard />
    </div>
  );
}

export default Skills;
