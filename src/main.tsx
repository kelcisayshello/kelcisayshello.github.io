import React from 'react'
import Home from "./routes/Home";
import Resume from './routes/Resume';
import Showcase from './routes/Showcase';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "showcase",
    element: <Showcase />,
  },
  {
    path: "resume",
    element: <Resume />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)