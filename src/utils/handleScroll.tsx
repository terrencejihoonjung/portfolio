function handleScroll(
  e: React.MouseEvent<HTMLButtonElement>,
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  scrollToTarget: (target: HTMLElement) => void
) {
  let ref;

  if (e.currentTarget.textContent === "About") {
    ref = document.getElementById("about") as HTMLElement;
    if (ref) scrollToTarget(ref);
  } else if (e.currentTarget.textContent === "Projects") {
    ref = document.getElementById("project_1") as HTMLElement;
    if (ref) scrollToTarget(ref);
  } else if (e.currentTarget.textContent === "Contact") {
    ref = document.getElementById("contact") as HTMLElement;
    if (ref) scrollToTarget(ref);
  } else if (e.currentTarget.textContent === "TJ") {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (isOpen) setIsOpen(!isOpen);
}

export default handleScroll;
