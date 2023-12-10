import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home/Home.tsx";
import RootLayout from "./components/RootLayout.tsx";

const lenis = new Lenis();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout scrollToTarget={scrollToTarget} />}>
      <Route index element={<Home scrollToTarget={scrollToTarget} />} />
    </Route>
  )
);

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

function scrollToTarget(target: HTMLElement) {
  lenis.scrollTo(target);
}

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative min-h-screen min-w-screen mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
