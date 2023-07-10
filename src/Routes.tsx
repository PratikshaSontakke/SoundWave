import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import ProtectedLayout from "./layouts/ProtectedLayout";
import RootLayout from "./layouts/RootLayout";

export const publicRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [{ path: "/", element: <Login /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const authRoutes = [
  {
    path: "/",
    element: <ProtectedLayout />,
    // errorElement: <NotFound />,
    loader: () => <>Loading...</>,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
