import Cover from "../Cover/Cover.tsx";
import About from "../About/About.tsx";
import Project from "../Project/Project.tsx";

function Home() {
  return (
    <div className="flex flex-col">
      <Cover />
      <About />
      <Project />
    </div>
  );
}

export default Home;
