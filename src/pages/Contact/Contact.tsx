import { useDarkMode } from "../../context/darkModeContext.tsx";
import { useState, useRef } from "react";
import { text } from "../../data/aboutVariants.tsx";
import { motion, useInView } from "framer-motion";
import sendEmail from "../../utils/sendEmail.tsx";
import SocialMedia from "../../components/ui/Contact/SocialMedia.tsx";
import ErrorMessage from "../../components/ui/Contact/ErrorMessage.tsx";
import SubmitButton from "../../components/ui/Contact/SubmitButton.tsx";

type ContactProps = {
  mountToast: boolean;
  setMountToast: React.Dispatch<React.SetStateAction<boolean>>;
};

function Contact({ setMountToast }: ContactProps) {
  const { isDarkMode } = useDarkMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null!);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      id="contact"
      variants={text}
      initial="hidden"
      animate={isInView ? "show" : {}}
      className={`${
        isDarkMode ? `bg-text text-background` : `bg-background text-text`
      } relative min-h-screen flex justify-center items-center`}
    >
      <motion.div
        variants={text}
        transition={{ duration: 2, ease: "backInOut" }}
        className="flex flex-col w-4/5 desktop:w-3/5 h-1/2 space-y-8"
      >
        <span className="flex justify-between items-center">
          <h1 className="font-lato font-black text-xl tablet:text-4xl desktop:text-4xl">
            Let's Talk
          </h1>
          <SocialMedia screenType={"tablet/desktop"} />
        </span>

        <form
          id="contact-form"
          className="font-lato flex flex-col items-start space-y-14 tablet:space-y-36 desktop:space-y-36"
          ref={form}
          onSubmit={(e) =>
            sendEmail(
              e,
              name,
              email,
              message,
              setError,
              setIsLoading,
              setName,
              setEmail,
              setMessage,
              setMountToast,
              form.current
            )
          }
        >
          <span className="flex w-full justify-between flex-col space-y-14 tablet:space-y-0 desktop:space-y-0 tablet:flex-row desktop:flex-row">
            <div className="space-y-4 basis-2/5 flex flex-col">
              <label className="font-black text-lg" htmlFor="user_name">
                Name
              </label>
              <input
                id="user_name"
                placeholder="Enter your name"
                className={`${
                  isDarkMode ? `bg-text` : `bg-background`
                } font-regular text-md border-b outline-none pb-3`}
                type="text"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="space-y-4 basis-2/5 flex flex-col">
              <label className="font-black text-lg" htmlFor="user_email">
                Email
              </label>
              <input
                id="user_email"
                className={`${
                  isDarkMode ? `bg-text` : `bg-background`
                } font-regular text-md border-b outline-none pb-3`}
                placeholder="Enter your email address"
                type="email"
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </span>

          <span className="flex flex-col w-full space-y-4">
            <label className="font-black text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message here..."
              className={`${
                isDarkMode ? `bg-text` : `bg-background`
              } font-regular text-md border-b outline-none max-h-96`}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <ErrorMessage error={error} />
          </span>

          <SubmitButton isLoading={isLoading} />
        </form>

        <SocialMedia screenType={"mobile"} />
      </motion.div>
    </motion.div>
  );
}

export default Contact;
