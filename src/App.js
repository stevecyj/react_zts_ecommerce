import NftPage from "@/pages/NftPage/NftPage";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
