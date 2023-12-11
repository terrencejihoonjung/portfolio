import TechIcon from "../../components/ui/TechnologyIcon.tsx";
import DownArrow from "../../assets/downArrow.svg";
import { technologies, tools, learning } from "../../data/aboutIcons.tsx";
import { motion } from "framer-motion";

type AboutProps = {
  scrollToTarget: (target: HTMLElement) => void;
};

function About({ scrollToTarget }: AboutProps) {
  function handleScroll() {
    const ref = document.getElementById("projects") as HTMLElement | null;
    if (ref) scrollToTarget(ref);
  }

  return (
    <div
      id="about"
      className="relative min-h-screen flex flex-col justify-around items-center"
    >
      <div></div>
      <div className="flex flex-col w-6/7 tablet:w-5/6 desktop:w-3/4">
        <span className="flex items-center px-8">
          <h1 className="font-lato text-xl tablet:text-2xl desktop:text-3xl font-bold">
            About Me
          </h1>
          <div className="flex grow ml-4 border border-text"></div>
        </span>

        <div className="flex space-y-4 tablet:space-y-4 desktop:space-y-0 desktop:space-x-8 flex-col desktop:flex-row">
          <div className="basis-2/5 rounded-2xl font-lato text-base tablet:text-md desktop:text-md font-regular space-y-8 p-8">
            <p>
              I’m a passionate coder/problem-solver/creative who loves to bring
              all kinds of ideas to life.
            </p>
            <p>
              After graduating from Duke University with a B.S. in computer
              science and Flatiron School Coding Bootcamp, I dedicated myself to
              continuing my journey in Software Development.
            </p>
            <p>
              With the ever-growing technology in software, I aim to build upon
              and support my knowledge of languages, frameworks, and tooling so
              that I can create performative, user-friendly web applications.
            </p>
            <p>
              When I’m not doing code-related work, you can find me in a dance
              studio or producing music. Oh, and of course, playing with my dog.
            </p>
          </div>
          <div className="basis-3/5 rounded-2xl p-8 flex flex-col space-y-8 desktop:justify-between">
            <div className="space-y-4">
              <h2 className="font-lato font-bold text-lg">Technologies</h2>
              <div className="grid grid-rows-3 grid-cols-4 tablet:grid-cols-8 desktop:grid-cols-8 tablet:grid-rows-2 desktop:grid-rows-2 gap-2">
                {technologies.map((tech) => {
                  return (
                    <TechIcon
                      key={tech}
                      icon={`src/assets/${tech}.png`}
                      tech={tech}
                    />
                  );
                })}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="font-lato font-bold text-lg">Tools/Services</h2>
              <div className="grid grid-rows-2 grid-cols-4 tablet:grid-cols-8 desktop:grid-cols-8 tablet:grid-rows-1 desktop:grid-rows-1 gap-2">
                {tools.map((tool) => {
                  return (
                    <TechIcon
                      key={tool}
                      icon={`src/assets/${tool}.png`}
                      tech={tool}
                    />
                  );
                })}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="font-lato font-bold text-lg">
                Currently Practicing/Learning
              </h2>
              <div className="grid grid-rows-2 grid-cols-4 tablet:grid-cols-8 desktop:grid-cols-8 tablet:grid-rows-1 desktop:grid-rows-1 gap-2">
                {learning.map((learn) => {
                  return (
                    <TechIcon
                      key={learn}
                      icon={`src/assets/${learn}.png`}
                      tech={learn}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleScroll} className="flex flex-col items-center">
        <p className="font-lato text-text font-black text-md tablet:text-sm desktop:text-md">
          Projects
        </p>

        <img
          src={DownArrow}
          alt="Down Arrow Icon"
          className="h-6 w-6 tablet:h-4 tablet:w-4 desktop:h-6 desktop:w-6"
        />
      </button>
    </div>
  );
}

export default About;
