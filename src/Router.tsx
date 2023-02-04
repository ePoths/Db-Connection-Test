import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserPage from "./pages/UserPage";
import Followers from "./pages/users/Followers";
import User from "./pages/users/User";

import Root from "./Root";
import NotFound from "./screens/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/mainpage",
    element: <UserPage />,
  },
  {
    path: "/users/:userId",
    element: <User />,
    children: [
      {
        path: "followers",
        element: <Followers />,
      },
    ],
  },
]);
export default router;
