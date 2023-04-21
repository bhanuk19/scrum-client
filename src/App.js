import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import ErrorPage from "./components/error";
import Home from "./components/home";
import Assign from "./components/team";
import Login from "./components/login";
import Calendar from "./components/history";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Assign />,
      },
      {
        path: "/history",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <></>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
