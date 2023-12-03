import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Moon from "./assets/moon.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full min-w-full mx-auto p-4">
        <header>
          <nav className="flex flex-col px-4 py-2 tablet:px-8 desktop:px-8">
            <div className="flex justify-between">
              <h1>TJ</h1>
              <span className="mobile:hidden font-lato text-text font-bold tablet:flex desktop:flex tablet:items-center tablet:space-x-8 desktop:items-center desktop:space-x-16">
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
                <button>
                  <img src={Moon} alt="Dark Mode Icon" className="h-5 w-5" />
                </button>
              </span>
            </div>

            <div className="pt-3 border-b border-text"></div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
