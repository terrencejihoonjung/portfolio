import { useRef } from "react";
import { motion, useInView, MotionConfig } from "framer-motion";
import { cover, text } from "../../data/coverVariants.tsx";
import { useDarkMode } from "../../context/darkModeContext.tsx";

import DownArrow from "../../components/ui/DownArrow.tsx";
import Turtle from "../../assets/turtle.svg";

type CoverProps = {
  scrollToTarget: (target: HTMLElement) => void;
};

function Cover({ scrollToTarget }: CoverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();
  const isInView = useInView(ref, { once: true });

  function handleScroll() {
    const ref = document.getElementById("about") as HTMLElement | null;
    if (ref) scrollToTarget(ref);
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : {}}
      variants={cover}
      className={`${
        isDarkMode ? `bg-text text-background` : `bg-background text-text`
      } relative min-h-screen flex flex-col justify-around items-center`}
    >
      <MotionConfig transition={{ duration: 2, ease: "backInOut" }}>
        <div></div>

        <div className="flex flex-col justify-center items-center">
          <motion.h2
            variants={text}
            className="font-lato font-black text-base tablet:text-base desktop:text-lg"
          >
            Hi! My name is
          </motion.h2>
          <motion.div
            variants={text}
            className="relative flex items-center justify-center"
          >
            <img
              src={Turtle}
              alt="Turtle Icon"
              className="absolute top-0 left-0 -mt-1 h-6 w-6 tablet:h-14 tablet:w-14 tablet:-mt-3.5 desktop:h-20 desktop:w-20 desktop:-mt-4"
            />
            <h1 className="font-lato font-black text-2xl tablet:text-4xl desktop:text-5xl">
              Terrence Jung
            </h1>
          </motion.div>
          <motion.p
            variants={text}
            className="font-lato text-center font-black text-xs tablet:text-base desktop:text-lg"
          >
            I'm a Full Stack Developer who enjoys learning and creating cool
            projects.
          </motion.p>
        </div>
      </MotionConfig>

      <motion.button
        onClick={handleScroll}
        variants={text}
        whileHover={{ scale: 1.05, transition: { duration: 0.05 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}
        transition={{
          opacity: { duration: 2, ease: "backInOut" },
          y: { duration: 2, ease: "backInOut" },
        }}
        className="flex flex-col items-center"
      >
        <p className="font-lato font-black text-md tablet:text-sm desktop:text-md">
          About Me
        </p>

        <DownArrow isDarkMode={isDarkMode} />
      </motion.button>
    </motion.div>
  );
}

export default Cover;
