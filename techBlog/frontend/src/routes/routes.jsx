import Layout from "../components/Layout";
import AddBlog from "../pages/AddBlog";
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
                path: "/editBlog",
                element: <EditBlog />,
            }, {
                path: "/login",
                element: <Login />,
            }, {
                path: "/myBlog",
                element: <MyBlog/>,
            }, {
                path: "/register",
                element: <Register />,
            },
        ],
    },
];

export default routes;