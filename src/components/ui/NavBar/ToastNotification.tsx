import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../../../context/darkModeContext";

type ToastNotificationProps = {
  mountToast: boolean;
};

function ToastNotification({ mountToast }: ToastNotificationProps) {
  const { isDarkMode } = useDarkMode();
  return (
    <AnimatePresence>
      {mountToast && (
        <motion.div
          initial={{ opacity: 0, transform: "translateX(100vw)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          exit={{ opacity: 0, transform: "translateX(100vw)" }}
          transition={{ ease: "easeInOut", duration: 1.25 }}
          className={`${
            isDarkMode ? `text-background` : `text-text`
          } flex justify-center items-center absolute z-20 bg-green-500  px-8 py-2 right-0 w-fit h-fit mt-20 tablet:mt-toast mr-8 rounded-xl`}
        >
          Email Sent!
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ToastNotification;
