import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Dashboard from "../layouts/dashboard/Dashboard";
import Login from "../pages/root/signInUp/Login";
import Register from "../pages/root/signInUp/Register";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Home from "../pages/root/home/Home";
import Error from "../pages/404/Error";
import Request from "../pages/root/request/Request";
import NewRequest from "../pages/dashboard/user/NewRequest";
import Profile from "../pages/dashboard/user/Profile";
import DonationProfile from "../pages/dashboard/user/DonationProfile";
import Donar from "../pages/root/donar/Donar";
import MyRequest from "../pages/dashboard/user/MyRequest";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";

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
        path: "requests",
        element: <Request></Request>,
      },
      {
        path: "donars",
        element: <Donar></Donar>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      // admin routes
      {
        path: "admin",
        element: (
          <AdminRoute>
            <Outlet />
          </AdminRoute>
        ),
        children: [
          {
            path: "users",
            element: <ManageUsers></ManageUsers>,
          },
        ],
      },
      // user routes
      {
        index: true,
        element: <Navigate to="profile"></Navigate>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "donation-profile",
        element: <DonationProfile></DonationProfile>,
      },
      {
        path: "blood-request",
        element: <NewRequest></NewRequest>,
      },
      {
        path: "my-request",
        element: <MyRequest></MyRequest>,
      },
    ],
  },
]);

export default router;
