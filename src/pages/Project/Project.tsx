import { useDarkMode } from "../../context/darkModeContext.tsx";
import { text, container } from "../../data/aboutVariants.tsx";
import DownArrow from "../../components/ui/DownArrow.tsx";
import RightArrow from "../../components/ui/RightArrow.tsx";
import RestaurantReview from "../../assets/RestaurantReview.png";
import { motion, useInView, MotionConfig } from "framer-motion";
import { useRef } from "react";
import GitHub from "../../assets/Git.png";

type ProjectProps = {
  scrollToTarget: (target: HTMLElement) => void;
  projectId: number;
};

function Project({ scrollToTarget, projectId }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const nextScrollRef: string =
    projectId < 3 ? `project_${projectId + 1}` : `contact`;

  function handleScroll() {
    const ref = document.getElementById(nextScrollRef) as HTMLElement | null;
    if (ref) scrollToTarget(ref);
  }

  return (
    <>
      <motion.div
        id={`project_${projectId}`}
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : {}}
        className={`${
          isDarkMode ? `bg-text text-background` : `bg-background text-text`
        } relative min-h-screen min-w-screen flex flex-col justify-center items-center`}
      >
        <MotionConfig transition={{ duration: 2.5, ease: "backInOut" }}>
          <div className="flex flex-col space-y-12 items-center desktop:space-y-0 desktop:flex-row h-2/3 w-full">
            <motion.div
              variants={text}
              className="px-12 flex flex-col basis-1/3 justify-center items-center"
            >
              <div className="space-y-4 font-lato flex flex-col justify-center items-start tablet:items-center desktop:items-start w-full h-3/5">
                <div className="bg-gradient-to-r from-fuchsia-500 to-yelp-red text-transparent bg-clip-text flex flex-col items-start tablet:flex-row tablet:items-center desktop:items-start desktop:flex-col">
                  <h1 className="text-lg tablet:text-md desktop:text-lg font-black">
                    Restaurant Review
                  </h1>
                  <p className="hidden tablet:block desktop:hidden text-md tablet:text-md font-black">
                    &nbsp; - &nbsp;
                  </p>
                  <h2 className="text-xl tablet:text-md desktop:text-2xl font-black leading-tight">
                    Make Friends, Share Restaurant Reviews
                  </h2>
                </div>

                <p className="text-md font-regular">
                  Restaurant Review web application where users can write
                  detailed reviews for restaurants of their choice.
                </p>
                <span className="text-sm tablet:text-md desktop:text-md font-bold tracking-wide">
                  TypeScript | React.js | Express.js | PostreSQL | AWS
                </span>
                <span className="w-full space-x-4 justify-center items-center hidden desktop:flex">
                  <button
                    className={`${
                      isDarkMode
                        ? `text-text bg-background`
                        : `bg-text text-background `
                    } basis-1/2 hover:bg-green-500 transition ease-in-out duration-200 tablet:flex space-x-3 text-md justify-center items-center py-2 rounded-xl`}
                  >
                    <RightArrow isDarkMode={isDarkMode} />
                    <span>View Site</span>
                  </button>
                  <button
                    className={`${
                      isDarkMode
                        ? `text-text bg-background`
                        : `bg-text text-background`
                    } basis-1/2 hover:bg-green-500 transition ease-in-out duration-200 tablet:flex space-x-3 text-md justify-center items-center py-2 rounded-xl`}
                  >
                    <img
                      src={GitHub}
                      className={`h-6 w-6 ${isDarkMode ? "" : `invert`}`}
                    />
                    <span>GitHub</span>
                  </button>
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={text}
              className="px-12 flex flex-col basis-3/4 justify-center items-center"
            >
              <div className="flex flex-col justify-center items-center w-full h-full">
                <motion.img
                  whileHover={{ scale: 1.01, transition: { duration: 0.125 } }}
                  transition={{
                    opacity: { duration: 2.5, ease: "backInOut" },
                    y: { duration: 2.5, ease: "backInOut" },
                  }}
                  src={RestaurantReview}
                />
              </div>
            </motion.div>

            <span className="flex justify-center items-center desktop:hidden w-full px-12 space-x-4 ">
              <button
                className={`${
                  isDarkMode
                    ? `text-text bg-background`
                    : `bg-text text-background`
                } flex space-x-3 basis-1/2 hover:bg-green-500 transition ease-in-out duration-200 text-md justify-center items-center py-2 rounded-xl`}
              >
                <RightArrow isDarkMode={isDarkMode} />
                <span>View Site</span>
              </button>
              <button
                className={`${
                  isDarkMode
                    ? `text-text bg-background`
                    : `bg-text text-background`
                } flex basis-1/2 space-x-3 hover:bg-green-500 transition ease-in-out duration-200 text-md justify-center items-center py-2 rounded-xl`}
              >
                <img
                  src={GitHub}
                  className={`h-6 w-6 ${isDarkMode ? "" : `invert`}`}
                />
                <span>GitHub</span>
              </button>
            </span>
          </div>

          <motion.button
            onClick={handleScroll}
            variants={text}
            whileHover={{ scale: 1.05, transition: { duration: 0.125 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.125 } }}
            transition={{
              opacity: { duration: 2.5, ease: "backInOut" },
              y: { duration: 2.5, ease: "backInOut" },
            }}
            className="absolute mb-14 desktop:mb-24 bottom-0"
          >
            <DownArrow isDarkMode={isDarkMode} />
          </motion.button>
        </MotionConfig>
      </motion.div>
    </>
  );
}

export default Project;
