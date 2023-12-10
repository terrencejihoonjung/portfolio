import { useRef } from "react";
import { motion, useInView, MotionConfig } from "framer-motion";
import Turtle from "../../assets/turtle.svg";
import DownArrow from "../../assets/downArrow.svg";

const cover = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const text = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

function Cover() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MotionConfig transition={{ duration: 2.5, ease: "backInOut" }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : {}}
        variants={cover}
        className="relative min-h-screen flex flex-col justify-around items-center"
      >
        <div></div>

        <div className="flex flex-col justify-center items-center">
          <motion.h2
            variants={text}
            className="font-lato text-text font-black text-base tablet:text-base desktop:text-lg"
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
            <h1 className="font-lato text-text font-black text-2xl tablet:text-4xl desktop:text-5xl">
              Terrence Jung
            </h1>
          </motion.div>
          <motion.p
            variants={text}
            className="font-lato text-text text-center font-black text-xs tablet:text-base desktop:text-lg"
          >
            I'm a Full Stack Developer who enjoys learning and creating cool
            projects.
          </motion.p>
        </div>

        <motion.button
          variants={text}
          whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
          whileTap={{ scale: 0.5, transition: { duration: 0.25 } }}
          className="flex flex-col items-center"
        >
          <p className="font-lato text-text font-black text-md tablet:text-sm desktop:text-md">
            About Me
          </p>

          <img
            src={DownArrow}
            alt="Down Arrow Icon"
            className="h-6 w-6 tablet:h-4 tablet:w-4 desktop:h-6 desktop:w-6"
          />
        </motion.button>
      </motion.div>
    </MotionConfig>
  );
}

export default Cover;
