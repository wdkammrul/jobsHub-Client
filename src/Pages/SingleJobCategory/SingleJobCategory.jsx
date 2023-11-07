/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const SingleJobCategory = ({jobData}) => {

    const { picture_URL, username, job_title, salary_range, deadline, posting_date, applicants_number, job_type } = jobData

    return (
        <div className="">
            <div className="mt-10 relative flex lg:w-full md:w-full lg:max-w-[48rem] max-w-[390px] md:max-w-[580px] bg-slate-500 text-white mx-auto md:flex-row flex-col rounded-xl md:h-[350px] bg-clip-border  shadow-md">
                <div className="relative m-0 h-[160px] md:h-0 md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border ">
                    <img
                        src={picture_URL || ''}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="p-10">
                    <h6 className="mb-2 block font-sans text-base font-normal  leading-relaxed tracking-normal rounded-lg  antialiased">
                       User Name: {username}
                    </h6>
                    <h4 className="mb-2 block font-sans text-base font-normal leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Job Title: {job_title}
                    </h4>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed  antialiased">
                       Posting Date: {posting_date}
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed  antialiased">
                       Job Type: {job_type}
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed  antialiased">
                         Deadline: {deadline}
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed  antialiased">
                       Salary Range: {salary_range}
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed  antialiased">
                        Job Applicants Number: {applicants_number}
                    </p>

                    <div className="flex gap-6">
                        <Link to=''><button
                            className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-secondary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            View Details 

                        </button></Link>
                    </div>

                </div>
            </div>                        
        </div>
    );
};

export default SingleJobCategory;