import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import TransactionsPage from "./pages/TransactionsPage";
import CategoriesPage from "./pages/CategoriesPage";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import CategoryDetails from "./pages/CategoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <TransactionsPage /> },
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/categories/:CategoryId", element: <CategoryDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
