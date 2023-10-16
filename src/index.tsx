import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import "./reset.scss";
import "./App.scss";
import Friends from "./modules/Friends";
import Posts from "./components/Posts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "posts",
    element: <Posts />,
  },
]);

root.render(<RouterProvider router={routes} />);
