import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Users from "./components/Users/Users.jsx";
import Contact from "./components/Contact/Contact.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

// const router = createBrowserRouter([
//   {path:'/',
//     element:<div>Welcome To react router</div>
//   },
//   {
//     path:'/about',
//     element:<div>Learn about react router</div>
//   },
//   {
//     path:'/contact',
//     element:<div>Contact with us</div>
//   }
// ])

// nested router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // handle react router error
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      // react  loader
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      // Dynamic Route with params and load single user data
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
