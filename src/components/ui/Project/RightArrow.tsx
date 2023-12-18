import RightArrowDark from "../../../assets/rightArrowBlack";

type RightArrowProps = {
  isDarkMode: boolean;
};

function RightArrow({ isDarkMode }: RightArrowProps) {
  return (
    <>
      {isDarkMode ? (
        <img
          src={RightArrowDark}
          alt="Right Arrow Icon"
          className="hidden desktop:block desktop:h-6 desktop:w-6"
        />
      ) : (
        <img
          src={""}
          alt="Right Arrow Icon"
          className="hidden desktop:block desktop:h-4 desktop:w-4"
        />
      )}
    </>
  );
}

export default RightArrow;
