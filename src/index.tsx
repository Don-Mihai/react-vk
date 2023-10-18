import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import "./reset.scss";
import "./App.scss";
import Friends from "./modules/Friends";
import Posts from "./components/Posts";
import EditProfile from "./Pages/EditProfile";

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
  {
    path: "edit",
    element: <EditProfile />,
  },
]);

root.render(<RouterProvider router={routes} />);
