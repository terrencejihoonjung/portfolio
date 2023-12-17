import emailjs from "@emailjs/browser";
import { emailPattern } from "../data/emailValidation.tsx";

function sendEmail(
  e: React.FormEvent<HTMLFormElement>,
  name: string,
  email: string,
  message: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setMountToast: React.Dispatch<React.SetStateAction<boolean>>,
  form: HTMLFormElement
): void {
  e.preventDefault();
  setIsLoading(true);

  if (name === "" || email === "" || message == "") {
    setError("Please fill in empty fields");
    setIsLoading(false);
    return;
  }

  if (!emailPattern.test(email)) {
    setError("Please enter a valid email address");
    setIsLoading(false);
    return;
  }

  emailjs
    .sendForm("service_x8gt1e2", "template_24lxhbc", form, "eV4Gvm8PTN3zhlfFC")
    .then(
      (result) => {
        setName("");
        setEmail("");
        setMessage("");
        setError("");

        setIsLoading(false);
        setMountToast(true);
        setTimeout(() => setMountToast(false), 4000);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export default sendEmail;
