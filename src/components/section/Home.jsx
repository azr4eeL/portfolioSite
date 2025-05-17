import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('/assets/projectCover/navLogo.png')",
      }}
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 py-10">
          <h1 className="text-5xl md:text-7xl fond-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Jerwyn
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-5xl mx-auto">
            I'm a passionate Web Developer and Graphic Designer dedicated to
            crafting intuitive, responsive, and visually engaging digital
            experiences. I enjoy solving problems through clean code and
            creative design. Always eager to take on new challenges, collaborate
            with others, and continuously improve through training and hands-on
            projects.I’m also open to taking on Virtual Assistant roles where I
            can apply my organizational skills and adaptability. I'm always
            eager to learn, grow, and take on new challenges and trainings.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 276, 0.4)] "
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-cyan-800/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 276, 0.4)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
