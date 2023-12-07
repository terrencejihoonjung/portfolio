import Turtle from "../../assets/turtle.svg";
import DownArrow from "../../assets/downArrow.svg";

function Cover() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-around items-center">
        <div></div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-lato text-text font-black text-base tablet:text-base desktop:text-lg">
            Hi! My name is
          </h2>
          <div className="relative flex items-center justify-center">
            <img
              src={Turtle}
              alt="Turtle Icon"
              className="absolute top-0 left-0 -mt-1 h-6 w-6 tablet:h-14 tablet:w-14 tablet:-mt-3.5 desktop:h-20 desktop:w-20 desktop:-mt-4"
            />
            <h1 className="font-lato text-text font-black text-2xl tablet:text-4xl desktop:text-5xl">
              Terrence Jung
            </h1>
          </div>
          <p className="font-lato text-text text-center font-black text-xs tablet:text-base desktop:text-lg">
            I'm a Full Stack Developer who enjoys learning and creating cool
            projects.
          </p>
        </div>

        <button className="flex flex-col items-center">
          <p className="font-lato text-text font-black text-md tablet:text-sm desktop:text-md">
            About Me
          </p>

          <img
            src={DownArrow}
            alt="Down Arrow Icon"
            className="h-6 w-6 tablet:h-4 tablet:w-4 desktop:h-6 desktop:w-6"
          />
        </button>
      </div>
    </>
  );
}

export default Cover;
