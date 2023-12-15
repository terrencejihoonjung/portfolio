import { useDarkMode } from "../../context/darkModeContext.tsx";
import DownArrow from "../../components/ui/DownArrow.tsx";
import RightArrow from "../../components/ui/RightArrow.tsx";
import RestaurantReview from "../../assets/RestaurantReview.png";
import { motion } from "framer-motion";

type ProjectProps = {
  scrollToTarget: (target: HTMLElement) => void;
};

function Project({ scrollToTarget }: ProjectProps) {
  const { isDarkMode } = useDarkMode();

  function handleScroll() {
    const ref = document.getElementById("contact") as HTMLElement | null;
    if (ref) scrollToTarget(ref);
  }

  return (
    <>
      <div
        id="projects"
        className={`${
          isDarkMode ? `bg-text text-background` : `bg-background text-text`
        } relative min-h-screen min-w-screen flex flex-col justify-center items-center`}
      >
        <div className="flex flex-col space-y-12 items-center desktop:space-y-0 desktop:flex-row h-2/3 w-full">
          <div className="px-12 flex flex-col basis-1/3 justify-center items-center">
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
                Restaurant Review web application where users can write detailed
                reviews for restaurants of their choice.
              </p>
              <span className="text-sm tablet:text-md desktop:text-md font-bold tracking-wide">
                TypeScript | React.js | Express.js | PostreSQL | AWS
              </span>
              <button className="hidden tablet:flex space-x-3 text-md border w-64 desktop:w-36 justify-center items-center bg-text text-background py-2 rounded-xl">
                <RightArrow isDarkMode={isDarkMode} />
                <span>View Site</span>
              </button>
            </div>
          </div>

          <div className="px-12 flex flex-col basis-3/4 justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <img src={RestaurantReview} />
            </div>
          </div>
          <span className="flex tablet:hidden w-full px-12">
            <button className=" text-md border w-full justify-center items-center bg-text text-background py-2 rounded-xl">
              <RightArrow isDarkMode={isDarkMode} />
              <span>View Site</span>
            </button>
          </span>
        </div>

        <button
          onClick={handleScroll}
          className="absolute mb-14 desktop:mb-24 bottom-0"
        >
          <DownArrow isDarkMode={isDarkMode} />
        </button>
      </div>
    </>
  );
}

export default Project;
