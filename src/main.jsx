import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import ErrorPage from "./Root/ErrorPage.jsx";
import Home from "./Home/Home.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import JobDetailsPage from "./JobDetailsPage/JobDetailsPage.jsx";
import MyBids from "./MyBids/MyBids.jsx";
import { ToastContainer } from "react-toastify";
import AddJob from "./AddJob/AddJob.jsx";
import PostedJobs from "./PostedJobs/PostedJobs.jsx";
import UpdateJobForm from "./PostedJobs/UpdateJobForm.jsx";
import BidRequests from "./BidRequests/BidRequests.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <PostedJobs></PostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateJob/:jobId",
        element: <UpdateJobForm></UpdateJobForm>,
      },
      {
        path: "/myBids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
      },
      {
        path: "/bidRequests",
        element: (
          <PrivateRoute>
            <BidRequests></BidRequests>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/job/details/:id",
        element: (
          <PrivateRoute>
            <JobDetailsPage></JobDetailsPage>,
          </PrivateRoute>
        ),
      },
      {
        path: "/myBids",
        element: <MyBids></MyBids>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer></ToastContainer>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
