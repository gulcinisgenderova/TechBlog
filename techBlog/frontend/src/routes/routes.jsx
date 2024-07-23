import Layout from "../components/Layout";
import AddBlog from "../pages/AddBlog";
import Detail from "../pages/Detail";
import EditBlog from "../pages/EditBlog";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyBlog from "../pages/MyBlog";
import Register from "../pages/Register";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addBlog",
        element: <AddBlog />,
      },
      {
        path: "/editBlog/:id",
        element: <EditBlog />,
      },
      {
        path: "/myBlog",
        element: <MyBlog />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
];

export default routes;