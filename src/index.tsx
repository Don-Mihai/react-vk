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
import {store} from './redux/store';
import { Provider } from 'react-redux'
import Gallery from "./Pages/Gallery";
import VideoGallery from "./Pages/VideoGallery";

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
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "video-gallery",
    element: <VideoGallery />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
