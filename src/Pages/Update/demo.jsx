import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const EditJob = () => {

    const { id } = useParams()
    const [jobData, setJobData] = useState(null)
    const [expiresOn, setExpiresOn] = useState(new Date());
    const [postedOn, setPostedOn] = useState(new Date());

    console.log(jobData);

    useEffect(() => {
        axios.get(`https://jobs-hq-server.vercel.app/jobs/`)
            .then(data => {
                const specificJobData = data.data?.find(data => data._id === id)
                console.log(specificJobData);
                setJobData(specificJobData);
            })
    }, [id])

    // const { jobTitle, jobType, postedBy, postingDate, salaryRange, applicantsNumber, applicationDeadline } = jobDat

    // const { jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, photoUrl, applicant, description, postedOn, expiresOn } = jobData
    // console.log(jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, photoUrl, applicant, description, postedOn, expiresOn);
    const handleEditItem = (e) => {
        e.preventDefault()
        const form = e.target;
        const jobTitle = form.jobtitle.value;
        const postedBy = form.postedby.value;
        const salaryFrom = parseInt(form.from.value);
        const salaryTo = parseInt(form.to.value);
        const jobCategory = form.jobCategory.value;
        const photoUrl = form.photoUrl.value;
        const logo = form.logo.value;
        const description = form.description.value;

        const addData = { jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, photoUrl, logo, description, postedOn, expiresOn }

        axios.patch(`https://jobs-hq-server.vercel.app/jobs/${id}`, addData)
            .then((data) => {
                console.log(data);
                if (data.data.modifiedCount) {
                    toast('Item Edited Successfully')
                    // form.reset()
                }
            })

        // console.log(addData);
        // expiresOn
    }


    return (
        <section className="text-gray-600 bg-white dark:text-slate-300 dark:bg-slate-900 body-font relative">
            <Helmet>
                <title>JOBsHQ | Edit A Job</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <div className="container px-5 py-24 mx-auto">
                <div className="card bg-slate-200 drop-shadow-xl px-4 md:px-0 dark:bg-slate-800 py-9">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-slate-100">-- : Edit Job : --</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-slate-300">Jobs you want to be done</p> */}
                    </div>
                    <form onSubmit={handleEditItem} className="dark:text-slate-300">
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">

                                {/* Job Title */}
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="jobtitle" className="leading-7 text-sm text-gray-600">Job Title</label>
                                        <input type="text" id="jobtitle" defaultValue={jobData?.jobTitle} name="jobtitle" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                {/* Posted By */}
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="postedby" className="leading-7 text-sm text-gray-600">Posted By</label>
                                        <input type="text" id="postedby" defaultValue={jobData?.postedBy} name="postedby" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                {/* Salary range */}
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="salaryrange" className="leading-7 text-sm text-gray-600">Salary Range</label>
                                        <div className="flex flex-row gap-2">
                                            <input type="text" id="salaryrange" defaultValue={jobData?.salaryFrom} name="from" placeholder="from" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            <input type="text" id="salaryrange" name="to" defaultValue={jobData?.salaryTo} placeholder="to" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                </div>
                                {/* Posting Date */}
                                <div className="p-2 w-1/2">
                                    <div className="relative flex flex-col">
                                        <label htmlFor="postedon" className="leading-7 text-sm text-gray-600">Posted On</label>
                                        <DatePicker selected={postedOn} defaultValue={jobData?.postedOn} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(date) => setPostedOn(date)} />
                                    </div>
                                </div>
                                {/* Expire Date */}
                                <div className="p-2 w-1/2">
                                    <div className="relative flex flex-col">
                                        <label htmlFor="postedby" className="leading-7 text-sm text-gray-600">Expires On</label>
                                        <DatePicker selected={expiresOn} defaultValue={jobData?.expiresOn} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(date) => setExpiresOn(date)} />
                                    </div>
                                </div>
                                {/* Job Category*/}
                                <div className="p-2 w-1/2">
                                    <div className="relative flex flex-col">
                                        <label htmlFor="jobCategory" className="leading-7 text-sm text-gray-600">Job Category</label>
                                        <select id="jobCategory" name="jobCategory" defaultValue={jobData?.jobCategory} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 h-[42px] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                            <option value="On Site">On Site</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Hybrid">Hybrid</option>
                                            <option value="Part Time">Part Time</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Photo URL */}
                                <div className="p-2 w-1/2">
                                    <div className="relative flex flex-col">
                                        <label htmlFor="photoUrl" className="leading-7 text-sm text-gray-600">Photo Url</label>
                                        <input type="text" id="photoUrl" name="photoUrl" defaultValue={jobData?.photoUrl} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                {/* Applicant Count */}
                                <div className="p-2 w-1/2">
                                    <div className="relative flex flex-col">
                                        <label htmlFor="logo" className="leading-7 text-sm text-gray-600">Logo URL</label>
                                        <input type="text" id="logo" name="logo" defaultValue={jobData?.logo} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                {/* Descriptions */}
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="description" className="leading-7 text-sm text-gray-600">Job Description</label>
                                        <textarea id="description" name="description" defaultValue={jobData?.description} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                {/* submit button */}
                                <div className="p-2 w-full">
                                    <button type="submit" className="flex mx-auto text-white bg-slate-600 border-0 py-2 px-8 focus:outline-none hover:bg-slate-900 rounded text-lg">Update Job</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EditJob;