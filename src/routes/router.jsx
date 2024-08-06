import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Dashboard from "../layouts/dashboard/Dashboard";
import Login from "../pages/root/signInUp/Login";
import Register from "../pages/root/signInUp/Register";
// import PrivateRoute from "./PrivateRoute";
import Home from "../pages/root/home/Home";
import Error from "../pages/404/Error";
import Request from "../pages/root/request/Request";
import NewRequest from "../pages/root/request/newRequest/NewRequest";
import Profile from "../pages/dashboard/user/Profile";

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
      {
        path: "request/new",
        element: <NewRequest></NewRequest>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
