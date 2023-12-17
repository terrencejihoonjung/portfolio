import { Outlet } from "react-router-dom";
import { useAnimationControls, AnimationControls } from "framer-motion";
import Menu from "./ui/Menu.tsx";
import NavBar from "./NavBar.tsx";

type RootLayoutProps = {
  scrollToTarget: (target: HTMLElement) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  mountToast: boolean;
};

function RootLayout({
  scrollToTarget,
  isOpen,
  setIsOpen,
  isModalOpen,
  setIsModalOpen,
  mountToast,
}: RootLayoutProps) {
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
        controls={controls}
        setIsOpen={setIsOpen}
        scrollToTarget={scrollToTarget}
        handleMenuAnimation={handleMenuAnimation}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        mountToast={mountToast}
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
