import { RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { router } from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
