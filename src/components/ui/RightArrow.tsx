import RightArrowBlack from "../../assets/RightArrowBlack.svg";
import RightArrowWhite from "../../assets/RightArrowWhite.svg";

type RightArrowProps = {
  isDarkMode: boolean;
};

function RightArrow({ isDarkMode }: RightArrowProps) {
  return (
    <>
      {isDarkMode ? (
        <img
          src={RightArrowBlack}
          alt="Right Arrow Icon"
          className="hidden desktop:block desktop:h-4 desktop:w-4"
        />
      ) : (
        <img
          src={RightArrowWhite}
          alt="Right Arrow Icon"
          className="hidden desktop:block desktop:h-4 desktop:w-4"
        />
      )}
    </>
  );
}

export default RightArrow;
