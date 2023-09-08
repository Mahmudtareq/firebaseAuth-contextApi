import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
