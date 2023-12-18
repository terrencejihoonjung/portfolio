type DownArrowProps = {
  isDarkMode: boolean;
};

function DownArrow({ isDarkMode }: DownArrowProps) {
  return (
    <>
      {isDarkMode ? (
        <img
          src={""}
          alt="Down Arrow Icon"
          className="h-6 w-6 tablet:h-4 tablet:w-4 desktop:h-6 desktop:w-6"
        />
      ) : (
        <img
          src={""}
          alt="Down Arrow Icon"
          className="h-6 w-6 tablet:h-4 tablet:w-4 desktop:h-6 desktop:w-6"
        />
      )}
    </>
  );
}

export default DownArrow;
