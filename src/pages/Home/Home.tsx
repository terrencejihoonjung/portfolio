import ProjectType from "../Project/types/ProjectType.tsx";
import Cover from "../Cover/Cover.tsx";
import About from "../About/About.tsx";
import Project from "../Project/Project.tsx";
import Contact from "../Contact/Contact.tsx";

import GitHub from "../../assets/Git.png";

type HomeProps = {
  scrollToTarget: (target: HTMLElement) => void;
  mountToast: boolean;
  setMountToast: React.Dispatch<React.SetStateAction<boolean>>;
};

const projectData: ProjectType[] = [
  {
    id: 1,
    title: "Restaurant Review",
    subtitle: "Make Friends, Share Restaurant Reviews",
    description:
      "Restaurant Review web application where users can write detailed reviews for restaurants of their choice.",
    technologies: "TypeScript | React.js | Express.js | PostreSQL | AWS",
    deploymentLink: "",
    githubLink: "https://github.com/terrencejihoonjung/yelp-clone",
    imageURL: GitHub,
  },
];

function Home({ scrollToTarget, mountToast, setMountToast }: HomeProps) {
  return (
    <main className="relative h-full w-full inset-0 z-0 flex flex-col">
      <Cover scrollToTarget={scrollToTarget} />
      <About scrollToTarget={scrollToTarget} />
      {projectData.map((project) => {
        return (
          <Project
            key={project.id}
            scrollToTarget={scrollToTarget}
            project={project}
          />
        );
      })}

      <Contact mountToast={mountToast} setMountToast={setMountToast} />
    </main>
  );
}

export default Home;
