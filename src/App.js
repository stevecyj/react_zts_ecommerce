import NftPage from "@/pages/NftPage/NftPage";
import MarketplacePage from "@/pages/MarketplacePage";
import Root from "@/routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/marketplace",
    element: <MarketplacePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
