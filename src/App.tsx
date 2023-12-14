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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <RootLayout
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            scrollToTarget={scrollToTarget}
          />
        }
      >
        <Route index element={<Home scrollToTarget={scrollToTarget} />} />
      </Route>
    )
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`relative min-h-screen min-w-screen mx-auto ${
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
