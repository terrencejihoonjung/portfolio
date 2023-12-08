import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import RootLayout from "./components/RootLayout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <div className="relative min-h-screen min-w-screen mx-auto p-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
