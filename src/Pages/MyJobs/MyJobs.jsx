/* eslint-disable react-hooks/rules-of-hooks */

// import { Link } from "react-router-dom";
// import AllSingleJobs from "../AllSinglaJobs/AllSingleJobs";
import { useContext, useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthenticationPage/AuthProvider/AuthProvider";
import MySingleJob from "../MySingleJob/MySingleJob";


const myJobs = () => {


    const { user } = useContext(AuthContext)

    // const [allJobs, setAllJobs] = useState([])
    const [myUploadedJobs, setMyJobs] = useState([])


    // const [searchTerm, setSearchTerm] = useState("");

    // useEffect(() => {
    //     // fetch('https://b8a11-server-side-wdkammrul.vercel.app/allJobs')
    //     fetch('https://b8a11-server-side-wdkammrul.vercel.app/allJobs').then(res => res.json())
    //         .then(data => setAllJobs(data))
    // }, [])

    useEffect(() => {
        fetch(`https://b8a11-server-side-wdkammrul.vercel.app/allJobs/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyJobs(data))

    }, [user?.email])


    // const filteredJobs = allJobs.filter(job => job.job_title.toLowerCase().includes(searchTerm.toLowerCase()));

   

    return (
        <div className="w-[400px] md:w-[740px] lg:w-full mx-auto rounded-lg">
            <Helmet>
                <title>JobsHub | My Jobs</title>
            </Helmet>
            <div className="form-control ">
                <div className="input-group flex justify-center mx-auto mt-4">
                    {/* <input
                        type="text"
                        placeholder="Search here..."
                        className="input input-bordered"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    /> */}

                    <button className="btn btn-square btn-secondary w-20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="mt-5 overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>User Name</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary Range</th>
                            <th><button className="text-secondary">Details</button></th>

                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {myUploadedJobs?.map(jobs => <MySingleJob key={jobs._id} jobs={jobs} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default myJobs;