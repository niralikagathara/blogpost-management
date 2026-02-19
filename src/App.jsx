import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import { ToastContainer } from "react-toastify";
import AuthGuard from "./auth/AuthGuard";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import Analytics from "./pages/Analytics";

const DefaultRouter = () => {
  const data = JSON.parse(localStorage.getItem("blog_rdata"));
  if (data) {
    return <Navigate to="/dashboard" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
};
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRouter />,
    },
    {
      path: "/register",
      element: (
        <AuthGuard required={false}>
          <Register />
        </AuthGuard>
      ),
    },
    {
      path: "/login",
      element: (
        <AuthGuard required={false}>
          <Login />
        </AuthGuard>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <AuthGuard required={true}>
          <Dashboard />
        </AuthGuard>
      ),
    },
    {
      path: "/create-post",
      element: (
        <AuthGuard required={true}>
          <CreatePost />
        </AuthGuard>
      ),
    },
    {
      path: "/edit-post/:id",
      element: (
        <AuthGuard required={true}>
          <CreatePost />
        </AuthGuard>
      ),
    },
    {
      path: "/post-details/:id",
      element: (
        <AuthGuard required={true}>
          <PostDetails />
        </AuthGuard>
      ),
    },
    {
      path: "/charts",
      element: (
        <AuthGuard required={true}>
          <Analytics />
        </AuthGuard>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
