import { useDarkMode } from "../../context/darkModeContext.tsx";
import DownArrow from "../../components/ui/DownArrow.tsx";
import RightArrow from "../../components/ui/RightArrow.tsx";
import RestaurantReview from "../../assets/RestaurantReview.png";

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
        } relative h-screen w-screen flex flex-col justify-center items-center`}
      >
        <div className="flex h-2/3 w-full">
          <div className="px-12 flex flex-col basis-1/3 justify-center items-center">
            <div className="space-y-4 font-lato flex flex-col justify-center w-full h-3/5">
              <h1 className="text-lg font-bold">Restaurant Review</h1>
              <h2 className="text-2xl font-bold leading-tight">
                Make Friends, Share Restaurant Reviews
              </h2>
              <p className="text-md font-regular">
                Restaurant Review web application where users can write detailed
                reviews for restaurants of their choice.
              </p>
              <span className="text-md font-bold tracking-wide">
                TypeScript | React.js | Express.js | PostreSQL | AWS
              </span>
              <button className="space-x-3 text-md flex border w-36 justify-center items-center bg-text text-background py-2 rounded-xl">
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
        </div>

        <button onClick={handleScroll} className="mt-8">
          <DownArrow isDarkMode={isDarkMode} />
        </button>
      </div>
    </>
  );
}

export default Project;
