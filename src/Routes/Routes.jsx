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
                path: '//singleJobDetails/:id',
                element: <SingleJobDetails></SingleJobDetails>
            },
            {
                path: '/addAJob',
                element: <AddAJob></AddAJob>
            },
            {
                path: '/myJobs',
                element: <MyJobs></MyJobs>
            },
            {
                path: '/update',
                element: <Update></Update>
            },
            {
                path: '/singleJobCategory',
                element: <SingleJobCategory></SingleJobCategory>
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