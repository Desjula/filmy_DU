import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Articles } from "./components/articles";
import { Home } from "./components/home";
import { Reviews } from "./components/reviews";
import { Movies } from "./components/movies";
import { Menu } from "./components/menu";
import { Movie } from "./components/movie";

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "movies",
        element: <Movies />,
        children: [
          {
            path: "/movies/:id",
            element: <Movie />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
