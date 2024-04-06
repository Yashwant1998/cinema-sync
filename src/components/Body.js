import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";
import MovieDemo from "./MovieDemo";

export const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    {
      path: "/movieinfo/:id",
      element: <MovieInfo />,
    },
    {
      path: "/moviedemo",
      element: <MovieDemo />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
