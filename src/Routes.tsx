import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import ProtectedLayout from "./layouts/ProtectedLayout";
import RootLayout from "./layouts/RootLayout";
// import { ErrorBoundry } from "./pages/errorBoundry/ErrorBoundry";
import { lazy } from "react";
import React from "react";

const ErrorBoundry = lazy(() => import('./pages/errorBoundry/ErrorBoundry'));


export const publicRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <React.Suspense> <ErrorBoundry/> </React.Suspense>,
    children: [{ path: "/", element:  <Login />}],
  
  },
  {
    path: "*",
    element: <React.Suspense> <NotFound /> </React.Suspense>
  },
];

export const authRoutes = [
  {
    path: "/",
    element: <ProtectedLayout />,
    errorElement: <React.Suspense> <ErrorBoundry/></React.Suspense>,
    loader: () => <>Loading...</>,
    children: [{ path: "/", element: <React.Suspense> <Home /> </React.Suspense>  }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
