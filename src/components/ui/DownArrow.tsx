import downArrowDark from "../../assets/downArrow.svg";
import downArrowWhite from "../../assets/downArrowWhite.svg";

type DownArrowProps = {
  isDarkMode: boolean;
};

function DownArrow({ isDarkMode }: DownArrowProps) {
  return (
    <>
      {isDarkMode ? (
        <img
          src={downArrowWhite}
          alt="Down Arrow Icon"
          className="h-6 w-6 tablet:h-4 tablet:w-4 desktop:h-6 desktop:w-6"
        />
      ) : (
        <img
          src={downArrowDark}
          alt="Down Arrow Icon"
          className="h-6 w-6 tablet:h-4 tablet:w-4 desktop:h-6 desktop:w-6"
        />
      )}
    </>
  );
}

export default DownArrow;
