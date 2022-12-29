import NftPage from "@/pages/NftPage";
import DropPage from "@/pages/DropPage";
import Phillips86ersPage from "@/pages/Phillips86ersPage";
import MarketplacePage from "@/pages/MarketplacePage";
import MainLayout from "@/Layouts/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "nft",
        element: <NftPage />,
      },
      {
        path: "marketplace",
        element: <MarketplacePage />,
      },
      {
        path: "drop",
        element: <DropPage />,
      },
      {
        path: "phillips-86ers",
        element: <Phillips86ersPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
