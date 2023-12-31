/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AllSingleJobs = ({ jobs }) => {

    const {_id, username, category, deadline, jobApplicatsNumber, jobTitle, description, jobPostingDate, picture, logo, salaryRange, email } = jobs
    // console.log(jobs)

    return (
        <tr>
            <td>
                <h1>{jobTitle}</h1>
            </td>
            <td>
                <h1>{username}</h1>
            </td>
            <td>
                <h1>{jobPostingDate}</h1>
            </td>
            <td>
                <h1>{deadline}</h1>
            </td>
            <td>
                <h1>{salaryRange}</h1>
            </td>
            <th>
                <Link to={`/singleJobDetails/${_id}`}> <button className="btn btn-secondary ">Details</button></Link>
            </th>
            <th>
                <button className="btn btn-group btn-secondary btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};


export default AllSingleJobs;