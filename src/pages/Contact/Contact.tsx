import { useDarkMode } from "../../context/darkModeContext.tsx";
import { emailPattern } from "../../data/emailValidation.tsx";
import { useState, useRef } from "react";
import { text } from "../../data/aboutVariants.tsx";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

import GitHubSocial from "../../assets/githubSocial.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";
import Medium from "../../assets/medium.svg";

function Contact() {
  const { isDarkMode } = useDarkMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null!);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setSpinner(true);
    e.preventDefault();

    if (name === "" || email === "" || message == "") {
      setError("Please fill in empty fields");
      setSpinner(false);
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      setSpinner(false);
      return;
    }

    emailjs
      .sendForm(
        "service_x8gt1e2",
        "template_24lxhbc",
        form.current,
        "eV4Gvm8PTN3zhlfFC"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setMessage("");
          setError("");

          console.log("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSpinner(false);
  };

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
        transition={{ duration: 2.5, ease: "backInOut" }}
        className="flex flex-col w-4/5 desktop:w-3/5 h-1/2 space-y-8"
      >
        <span className="flex justify-between items-center">
          <h1 className="font-lato font-black text-xl tablet:text-4xl desktop:text-4xl">
            Let's Talk
          </h1>
          <span className="hidden tablet:flex desktop:flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
              href="https://github.com/terrencejihoonjung"
            >
              <img src={GitHubSocial} className="w-14 h-14" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
              href="https://www.linkedin.com/in/terrencejung/"
            >
              <img src={LinkedIn} className="w-14 h-14" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
              href="https://twitter.com/terrence_jung"
            >
              <img src={Twitter} className="w-14 h-14" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
              href="https://medium.com/@terrencejung"
            >
              <img src={Medium} className="w-14 h-14" />
            </motion.a>
          </span>
        </span>

        <form
          id="contact-form"
          className="font-lato flex flex-col items-start space-y-14 tablet:space-y-36 desktop:space-y-36"
          ref={form}
          onSubmit={sendEmail}
        >
          <span className="flex w-full justify-between flex-col space-y-14 tablet:space-y-0 desktop:space-y-0 tablet:flex-row desktop:flex-row">
            <div className="space-y-4 basis-2/5 flex flex-col">
              <label className="font-black text-lg" htmlFor="user_name">
                Name
              </label>
              <input
                id="user_name"
                placeholder="Enter your name"
                className="font-regular text-md border-b outline-none pb-3"
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
                className="font-regular text-md border-b outline-none pb-3"
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
              className="font-regular text-md border-b outline-none max-h-96"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <div
              className={`${error ? `` : `invisible`} flex w-fit text-red-400 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </span>

          <button
            type="submit"
            className={`flex justify-center items-center w-full tablet:w-1/6 desktop:w-1/6 font-black text-md bg-slate-100 px-12 py-3 rounded-2xl hover:bg-green-500 hover:shadow-2xl hover:-translate-y-1 transition ease-in-out duration-200`}
          >
            <svg
              className={`${
                spinner ? `visible animate-spin text-text` : `hidden`
              } h-5 w-5 mr-3`}
              viewBox="0 0 24 24"
            />
            {spinner ? "" : "Submit"}
          </button>
        </form>

        <span className="flex w-full justify-between tablet:hidden space-x-4">
          <motion.a
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            href="https://github.com/terrencejihoonjung"
          >
            <img src={GitHubSocial} className="w-12 h-12" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            href="https://www.linkedin.com/in/terrencejung/"
          >
            <img src={LinkedIn} className="w-12 h-12" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            href="https://twitter.com/terrence_jung"
          >
            <img src={Twitter} className="w-12 h-12" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            href="https://medium.com/@terrencejung"
          >
            <img src={Medium} className="w-12 h-12" />
          </motion.a>
        </span>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
