import ProjectCards from "./ProjectCard";

function Projects() {
  return (
    <div
      id="projects"
      style={{ background: "#000e13" }}
      className="flex flex-col justify-center min-h-screen py-8"
    >
      <div className="text-center">
        <h5
          data-aos="fade-up"
          className="text-3xl py-8 opacity-80 md:text-5xl lg:text-6xl text-orange-500"
        >
          --- Projects ---
        </h5>
      </div>
      <ProjectCards />
    </div>
  );
}
export default Projects;
