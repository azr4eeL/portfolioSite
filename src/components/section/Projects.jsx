import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Product Management System",
    desc: "Collaborated with a group to make this Product Management System that will be used by one of my groupmates for his coffee business. The entire front was made and designed by me, including the logo",
    tech: ["Laravel", "CSS", "Bootstrap", "TailwindCSS", "PHP", "MySql"],
    image: "/portfolioSite/assets/projectCover/teambangan.png",
    url: "https://github.com/JohnRox00/mini-project-two.git",
  },
  {
    title: "User Management System",
    desc: "This Project was built with a new feature of Laravel. The Laravel Breeze and React which offers the best of both worlds. Inertiajs bridges the gap between your Laravel application and your modern React frontend, allowing you to build full-fledged, modern frontends using React while leveraging Laravel routes and controllers for routing, data hydration, and authentication — all within a single code repository. With this approach, you can enjoy the full power of both Laravel and React without crippling the capabilities of either tool. This Project was made for my Capstone Presentation, and for my future plans, though I consider this a bit incomplete, I still managed to succesfully make my admin, welcome, and homepages within a week.",
    tech: ["Laravel-Breeze", "TailwindCSS", "Reactjs", "MySql"],
    image: "/portfolioSite/assets/projectCover/triestes.png",
    url: "https://github.com/jero09sd/Breeze-React-LaravelStandAlone",
  },
  {
    title: "BiliBili clone",
    desc: "This was the project I made, during my time at the Bootcamp, I created a copy of the BiliBili website, a video streaming website that originate from China and was released Globally a few years ago.",
    tech: ["HTML", "CSS", "Bootstrap"],
    image: "/portfolioSite/assets/projectCover/BiliBili.png",
    url: "https://jero09sd.github.io/mini_project-1/",
  },
];

export const Projects = () => {
  const [current, setCurrent] = useState(0);
  const handleClick = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      {" "}
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Feactured Projects
          </h2>

          <div className="relative p-6 border rounded-xl border-white/10 transition-all duration-300 mx-auto cursor-pointer select-none">
            <img
              onClick={handleClick}
              title="Click to see next project"
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-auto mx-auto mb-4 rounded"
            />
            <h3 className="text-xl font-bold">{projects[current].title}</h3>
            <p className="text-gray-400 mb-3">{projects[current].desc}</p>
            <a
              href={projects[current].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300"
            >
              View Project ➟{" "}
            </a>
            <div className="flex justify-center flex-wrap gap-2">
              {projects[current].tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
