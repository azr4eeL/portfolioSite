import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const webDevSkills = [
    "Reactjs",
    "TailwindCSS",
    "Bootstrap",
    "HTML",
    "CSS",
    "PHP",
    "Laravel-Breeze",
  ];
  const graphicDesigningSkills = [
    "AdobePhotoshop",
    "AdobeIllustrator",
    "Canva",
  ];
  const otherSkills = [
    "Microsoft Word",
    "Microsoft Excel",
    "Powerpoint",
    "Data Analisys",
    "Data Annotation",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      {" "}
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me{" "}
          </h2>

          <div className="rounded-xl p-8 border-white/10 ">
            <p className="text-gray-300 mb-6">
              I'm a passionate Web Developer and Graphic Designer who is curious
              and eager to learn new things. I'm also very interested in trying
              a Virtual Assistant role, where I can gain valuable experience
              from my clients while delivering quality results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {webDevSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Graphic Designing</h3>
                <div className="flex flex-wrap gap-2">
                  {graphicDesigningSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Information Technology</strong> - Goodwill Technical
                  Skills and Computer College (2018-2020)
                </li>
                <li>
                  <strong>Full Stack Web Development</strong> - KODEGO Bootcamp
                  (2022-2023)
                </li>
                <li>
                  {" "}
                  Relevant Coursework: Graphic Designing, Web Development,
                  Networking, Software and Hardware Troubleshooting...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🗃️ Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Data Annotation Specialist (2020 - 2022)
                  </h4>
                  <p>
                    cleaning and labeling datasets for machine learning
                    projects.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Data Annotation Specialist (2023 - Present)
                  </h4>
                  <p>
                    working independently, and consistently deliver precise,
                    high-quality annotations—even under tight deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
