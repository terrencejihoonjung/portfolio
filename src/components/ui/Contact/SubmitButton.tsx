import { useDarkMode } from "../../../context/darkModeContext";
import Reload from "../../../assets/reload.svg";

type SubmitButtonProps = {
  isLoading: boolean;
};

function SubmitButton({ isLoading }: SubmitButtonProps) {
  const { isDarkMode } = useDarkMode();
  return (
    <button
      type="submit"
      className={`${
        isDarkMode ? `bg-background text-text` : `bg-text text-background`
      } ${
        isLoading ? `bg-green-500` : ``
      } flex justify-center items-center w-full tablet:w-1/6 desktop:w-1/6 font-black text-md bg-slate-100 px-12 py-3 rounded-2xl hover:bg-green-500 hover:shadow-2xl hover:-translate-y-1 transition ease-in-out duration-200`}
    >
      {!isLoading && <span>Submit</span>}
      {isLoading && <img src={Reload} alt="reload" className="animate-spin" />}
    </button>
  );
}

export default SubmitButton;
