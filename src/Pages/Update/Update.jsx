/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
const { id } = useParams()
const [jobData, setJobData] = useState(null)
// const [expiresOn, setExpiresOn] = useState(new Date()); 

console.log(jobData);

useEffect(() => {
    axios.get(`https://b8a11-server-side-wdkammrul.vercel.app/allJobs`)
        .then(data => {
            const specificJobData = data.data?.find(data => data._id === id)
            console.log(specificJobData);
            setJobData(specificJobData);
        })
}, [id])


const handleUpdate = (e) => {
    e.preventDefault()
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const name = form.name.value;
    const salaryRange = parseInt(form.salaryRange.value);
    const category = form.category.value;
    const deadline = form.deadline.value;
    const jobApplicatsNumber = form.jobApplicatsNumber.value;
    const jobPostingDate = form.jobPostingDate.value;
    const picture = form.picture.value;
    const logo = form.logo.value;
    const description = form.description.value;

    const updateData = { name, category, deadline, jobApplicatsNumber, jobTitle, description, jobPostingDate, picture, logo, salaryRange }

    fetch(`https://b8a11-server-side-wdkammrul.vercel.app/allJobs/${id}`, {
        method: 'PATCH',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(updateData)
    })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            if (data.data.modifiedCount) {
                toast('update Successfully')
                // form.reset()
            }
        })

    // console.log(addData);
    // expiresOn
}


    return (
        <div className="mt-24 rounded-lg w-11/12 md:w-11/12 lg:w-full mx-auto bg-slate-700 p-24">

            <h2 className="text-5xl font-extrabold text-center mb-6">Update</h2>

            <form onSubmit={handleUpdate}>
                <div className="md:flex mb-6">
                    <Helmet>
                        <title>JobsHub | Update</title>
                    </Helmet>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={jobData?.username} name="name" placeholder="User Name" className="input checkbox-secondary input-bordered w-full rounded-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <select name="category" defaultValue={jobData?.category} className="select checkbox-secondary input-bordered w-full border" >
                                <option value="" disabled>Select Category</option>
                                <option value="remote">Remote</option>
                                <option value="fullTime">Full Time</option>
                                <option value="partTime">Part Time</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </label>
                    </div>
                </div>



                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="jobTitle" defaultValue={jobData?.jobTitle} placeholder="Job Title" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> </span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={jobData?.salaryRange} name="salaryRange" placeholder="Salary Range" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={jobData?.jobApplicatsNumber} name="jobApplicatsNumber" placeholder="Job Applicaters Number" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={jobData?.jobPostingDate} name="jobPostingDate" placeholder="Job Posting Date" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> </span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={jobData?.deadline} name="deadline"  placeholder="Application Deadline use Data Picker Package" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        {/* <label className="input-group">
                            <input type="text" name="description" placeholder="Job description" className="input checkbox-secondary input-bordered w-full" />
                        </label> */}

                        <label className="input-group">
                            <textarea className="input checkbox-secondary input-bordered w-full" type='text' defaultValue={jobData?.description} name="description" placeholder="Job description" cols="30" rows="10"></textarea>
                        </label>
                    </div>
                </div>


                <div className="mb-12">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={jobData?.picture} name="picture" placeholder="Picture URL" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block btn-secondary" type="submit" value="Update" />


            </form>


        </div>
    );
};

export default Update;