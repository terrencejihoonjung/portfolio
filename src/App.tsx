import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home/Home.tsx";
import RootLayout from "./components/RootLayout.tsx";
import { DarkModeContext } from "./context/darkModeContext.tsx";
import { useAnimationControls } from "framer-motion";

const lenis = new Lenis();
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
function scrollToTarget(target: HTMLElement) {
  lenis.scrollTo(target, {
    duration: 2.5,
  });
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mountToast, setMountToast] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <RootLayout
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            scrollToTarget={scrollToTarget}
            mountToast={mountToast}
          />
        }
      >
        <Route
          index
          element={
            <Home
              scrollToTarget={scrollToTarget}
              setMountToast={setMountToast}
              mountToast={mountToast}
            />
          }
        />
      </Route>
    )
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`relative min-h-screen min-w-screen${
        isDarkMode ? `dark` : ``
      }`}
    >
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <RouterProvider router={router} />
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
