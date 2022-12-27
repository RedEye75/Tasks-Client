import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/AddTask";
import CompletedTasks from "../components/CompletedTasks";
import Home from "../components/Home";
import MyTasks from "../components/MyTasks";
import Root from "../layout/Root";

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
        element: <AddTask />,
      },
      {
        path: "/myTasks",
        element: <MyTasks />,
      },
      {
        path: "/completedTasks",
        element: <CompletedTasks />,
      },
    ],
  },
]);
export default router;
