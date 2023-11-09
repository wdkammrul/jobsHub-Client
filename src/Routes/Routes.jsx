import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../AuthenticationPage/Login/Login";
import Register from "../AuthenticationPage/Register/Register";
import AllJobs from "../Pages/AllJobs/AllJobs/AllJobs";
import SingleJobDetails from "../Pages/AllJobs/SingleJobDetails/SingleJobDetails";
import AddAJob from "../Pages/AddAJob/AddAJob";
import MyJobs from "../Pages/MyJobs/MyJobs";
import SingleJobCategory from "../Pages/SingleJobCategory/SingleJobCategory";
import Update from "../Pages/Update/Update";
import PrivateRoute from "../AuthenticationPage/PrivateRoute/PrivateRoute";
import Applied from "../Pages/Applied/Applied";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allJobs',
                element: <AllJobs></AllJobs>
            },
            {
                path: '/singleJobDetails/:id',
                element: <PrivateRoute><SingleJobDetails></SingleJobDetails></PrivateRoute>
            },
            {
                path: '/addAJob',
                element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
            },
            {
                path: '/myJobs',
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>
            },
            {
                path: '/singleJobCategory',
                element: <PrivateRoute><SingleJobCategory></SingleJobCategory></PrivateRoute>
            },
            {
                path: '/applied',
                element: <PrivateRoute><Applied></Applied></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);


export default router; 