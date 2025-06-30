import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import JobCircular from "../pages/JobCircular";
import AppliedJobs from "../pages/AppliedJobs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/job-circular',
                element: <JobCircular />
            },
            {
                path: '/applied-jobs',
                element: <AppliedJobs />
            }
        ]
    },
]);