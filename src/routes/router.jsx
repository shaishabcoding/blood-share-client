import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/signInUp/Login";
import Register from "../pages/signInUp/Register";
// import PrivateRoute from "./PrivateRoute";
import Error from "../pages/404/Error";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
