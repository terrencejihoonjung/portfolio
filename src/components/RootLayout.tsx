import { Outlet } from "react-router-dom";
import { useAnimationControls } from "framer-motion";
import Menu from "./ui/Menu.tsx";
import NavBar from "./NavBar.tsx";

type RootLayoutProps = {
  scrollToTarget: (target: HTMLElement) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function RootLayout({ scrollToTarget, isOpen, setIsOpen }: RootLayoutProps) {
  const controls = useAnimationControls();

  function handleMenuAnimation() {
    if (isOpen) {
      controls.start("hidden");
    } else {
      controls.start("show");
    }
  }

  return (
    <>
      <NavBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToTarget={scrollToTarget}
        handleMenuAnimation={handleMenuAnimation}
      />
      {isOpen ? (
        <Menu
          controls={controls}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          scrollToTarget={scrollToTarget}
        />
      ) : null}
      <Outlet />
    </>
  );
}

export default RootLayout;
