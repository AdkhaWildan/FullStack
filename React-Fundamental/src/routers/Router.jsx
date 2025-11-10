import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Index";
import About from "../pages/About";
import Blog from "../pages/Blog";
import IdPages from "../pages/IdPages";

import { posts, postById } from "../apis/loader";

import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <IdPages />,
        loader: postById,
      },
    ],
  },
]);
