import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Orders from "../Components/Home/Order/Orders";
import Main from "../Components/Main/Main";
import Login from "../Components/Shared/Login";
import Register from "../Components/Shared/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/about",
        element: <About></About>
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
