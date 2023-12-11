import Cover from "../Cover/Cover.tsx";
import About from "../About/About.tsx";
import Project from "../Project/Project.tsx";

type HomeProps = {
  scrollToTarget: (target: HTMLElement) => void;
};

function Home({ scrollToTarget }: HomeProps) {
  return (
    <main className={"absolute inset-0 z-0 flex flex-col"}>
      <Cover scrollToTarget={scrollToTarget} />
      <About scrollToTarget={scrollToTarget} />
      <Project />
    </main>
  );
}

export default Home;
