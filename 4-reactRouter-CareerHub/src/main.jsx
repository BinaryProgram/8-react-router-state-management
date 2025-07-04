import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader:() => fetch('../jobs.json')
        // Warning - don't load all data
      },
      {
        path:'/jobs/:id',
        element:<Jobs></Jobs>,
        loader:() => fetch('../jobs.json')
        /*
        Don't load all data. Only load data which one you need. 
        */
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
