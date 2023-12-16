import Cover from "../Cover/Cover.tsx";
import About from "../About/About.tsx";
import Project from "../Project/Project.tsx";
import Contact from "../Contact/Contact.tsx";

type HomeProps = {
  scrollToTarget: (target: HTMLElement) => void;
};

function Home({ scrollToTarget }: HomeProps) {
  return (
    <main className="relative h-full w-full inset-0 z-0 flex flex-col">
      <Cover scrollToTarget={scrollToTarget} />
      <About scrollToTarget={scrollToTarget} />
      <Project projectId={1} scrollToTarget={scrollToTarget} />
      <Project projectId={2} scrollToTarget={scrollToTarget} />
      <Project projectId={3} scrollToTarget={scrollToTarget} />
      <Contact />
    </main>
  );
}

export default Home;
