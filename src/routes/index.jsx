import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Sectors from "../Pages/Sectors";
import SectorDetails from "../Pages/SectorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sectors",
        element: <Sectors />,
      },
      {
        path: "/sectorDetails/:id",
        element: <SectorDetails />,
      },
    ],
  },
]);
