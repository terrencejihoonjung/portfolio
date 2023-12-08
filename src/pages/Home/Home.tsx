import Cover from "../Cover/Cover.tsx";
import About from "../About/About.tsx";
import Project from "../Project/Project.tsx";

function Home() {
  return (
    <main className="absolute inset-0 z-0 flex flex-col">
      <Cover />
      <About />
      <Project />
    </main>
  );
}

export default Home;
