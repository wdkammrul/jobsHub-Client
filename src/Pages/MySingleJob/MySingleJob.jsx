/* eslint-disable react/prop-types */
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySingleJob = ({ jobs }) => {

    const { _id, username, deadline,  jobTitle,  jobPostingDate, salaryRange } = jobs
    // console.log(jobs)

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                axios.delete(`https://b8a11-server-side-wdkammrul.vercel.app/allJobs/${id}`)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.error("Error deleting job:", error);
                    });

            }
        });
    }


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
                <Link to={`/update/${_id}`}> <button className="btn btn-secondary ">Update</button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-group btn-secondary btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};


export default MySingleJob;