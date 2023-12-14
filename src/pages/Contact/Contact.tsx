import { useDarkMode } from "../../context/darkModeContext.tsx";

function Contact() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      id="contact"
      className={`${
        isDarkMode ? `bg-text text-background` : `bg-background text-text`
      } relative min-h-screen flex flex-col justify-center items-center`}
    >
      hi
    </div>
  );
}

export default Contact;
