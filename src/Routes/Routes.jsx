import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/AddTask";
import Blogs from "../components/Blogs";
import CompletedTasks from "../components/CompletedTasks";
import Home from "../components/Home";
import MyTasks from "../components/MyTasks";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Root from "../layout/Root";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addTask",
        element: (
          <PrivateRoutes>
            <AddTask />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myTasks",
        element: (
          <PrivateRoutes>
            <MyTasks />
          </PrivateRoutes>
        ),
      },
      {
        path: "/completedTasks",
        element: (
          <PrivateRoutes>
            <CompletedTasks />
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
