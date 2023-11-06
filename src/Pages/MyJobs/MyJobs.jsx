import { Link } from "react-router-dom";


const MyJobs = () => {
    return (
        <div>
            <div className="mt-10 relative flex lg:w-full md:w-full lg:max-w-[48rem] max-w-[390px] md:max-w-[580px] mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src='https://i.ibb.co/tQmd65J/kamrul-1.jpg'
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="p-10">
                    <h6 className="mb-2 block font-sans text-base font-semibold  leading-relaxed tracking-normal  w-32 rounded-lg  antialiased">
                        User Name:
                    </h6>
                    <h4 className="mb-2 block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Job Title:
                    </h4>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Job Category: 
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                       Salary Range
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                       Job Description:
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                       Job Posting Date:
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                       Application Deadline:
                    </p>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                       Job Applicants Number
                    </p>
                    

                    <div className="flex gap-6">
                        <Link to='/update'><button
                            className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-secondary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Update

                        </button></Link>

                        <Link to=''><button
                            className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-secondary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Delate

                        </button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyJobs;