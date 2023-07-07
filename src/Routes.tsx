import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";
import LogIn from "./pages/LogIn";

export const routes = [
  {
    path: "/",
    element: <RootLayout> <Home /> </RootLayout>,
    errorElement: <NotFound />,
    loader: () => <>Loading...</>,
    // children: [
    //   {
    //     path: "/protected",
    //     element: <Protected />,
    //   }
    // ],
  },
  {
    path: "login",
    element: <RootLayout> <LogIn /> </RootLayout>,

  }
]