
const AddAJob = () => {
    return (
        <div className="mt-24 rounded-lg w-11/12 md:w-11/12 lg:w-full mx-auto bg-slate-800 p-24">

            <h2 className="text-5xl font-extrabold text-center mb-6">Add A Job</h2>

            <form>
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="User Name" className="input input-bordered w-full rounded-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <select name="brand" className="select input-bordered w-full border" defaultValue="">
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
                            <input type="text" name="jobTitle" placeholder="Job Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salaryRange" placeholder="Salary Range" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="jobApplicatsNumber" placeholder="Job Applicaters Number" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="jobPostingDate" placeholder="Job Posting Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="applicationDeadline" placeholder="Application Deadline use Data Picker Package" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Job description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="mb-12">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="picture" placeholder="Picture URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block btn-secondary" type="submit" value="Add A Job" />


            </form>


        </div>
    );
};

export default AddAJob;