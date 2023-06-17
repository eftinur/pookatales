import { createBrowserRouter } from "react-router-dom";
import BookDetail from "../components/BookDetail";
import Favorites from "../components/Favorites";
import Main from "../layout/Main";
import Home from "../pages/Home";
import ShopPage from "../pages/ShopPage";

export const routes = createBrowserRouter([
  /* react_router config
    step 1: create routes to Navigate
    step 2: provide the routes in RouterProvider
    step 3: create a layout to display content
    */
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/books/:id",
        element: <BookDetail />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);
