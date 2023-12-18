import ProjectType from "../Project/types/ProjectType.tsx";
import Cover from "../Cover/Cover.tsx";
import About from "../About/About.tsx";
import Project from "../Project/Project.tsx";
import Contact from "../Contact/Contact.tsx";

import RestaurantReview from "../../assets/RestaurantReview.png";
import Pokedoro from "../../assets/pokedoro.png";

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
    imageURL: RestaurantReview,
  },
  {
    id: 2,
    title: "Pokedoro",
    subtitle: "Studying made Fun with Pokémon",
    description:
      "A new and fun approach to studying using the pomodoro technique integrated with pokémon.",
    technologies: "JavaScript | React.js | Ruby on Rails | SQLite",
    deploymentLink: "",
    githubLink: "https://github.com/terrencejihoonjung/pokedoro",
    imageURL: Pokedoro,
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
