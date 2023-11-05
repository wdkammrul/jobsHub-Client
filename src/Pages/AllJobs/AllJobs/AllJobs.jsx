import { Link } from "react-router-dom";


const AllJobs = () => {
    return (
        <div className="w-[400px] md:w-[740px] lg:w-full mx-auto rounded-lg">
            <h2 className="text-4xl text-center my-10">All Jobs Page</h2>
            <div className="form-control ">
                <div className="input-group flex justify-center mx-auto mt-4">
                    <input type="text" placeholder="Search here..." className="input input-bordered" />
                    <button className="btn btn-square btn-secondary w-20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="mt-5 overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Job Title</th>
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
                        <tr>
                            <td>
                                <h1>User Name</h1>
                            </td>
                            <td>
                                <h1>Job Title</h1>
                            </td>
                            <td>
                                <h1>Job Posting Date</h1>
                            </td>
                            <td>
                                <h1>Application Deadline</h1>
                            </td>
                            <td>
                                <h1>Salary Range</h1>
                            </td>
                            <th>
                                <Link to='/singleJobDetails'> <button className="btn btn-secondary ">Details</button></Link>
                            </th>
                            <th>
                                <button className="btn btn-group btn-secondary btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;