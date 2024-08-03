import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/root/signInUp/Login";
import Register from "../pages/root/signInUp/Register";
// import PrivateRoute from "./PrivateRoute";
import Home from "../pages/root/home/Home";
import Error from "../pages/root/404/Error";
import Request from "../pages/root/request/Request";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "request",
        element: <Request></Request>,
      },
    ],
  },
]);

export default router;
