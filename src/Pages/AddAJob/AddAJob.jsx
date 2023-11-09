import { toast } from "react-toastify";

const AddAJob = () => {

    const handleADD = e => {
        e.preventDefault()
        const form = e.target
        const username = form.name.value;
        const category = form.category.value;
        const jobTitle = form.jobTitle.value;
        const salaryRange = form.salaryRange.value;
        const jobApplicatsNumber = form.jobApplicatsNumber.value;
        const jobPostingDate = form.jobPostingDate.value;
        const description = form.description.value;
        const picture = form.picture.value;
        const logo = form.logo.value;
        

        const addJob = {username, category, jobApplicatsNumber, jobTitle, description, jobPostingDate, picture, logo, salaryRange} 


        fetch("http://localhost:5000/allJobs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addJob),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    toast('Job Added Successfully')
                    form.reset();
                }
            });

        console.log(addJob)

    }

    return (
        <div className="mt-24 rounded-lg w-11/12 md:w-11/12 lg:w-full mx-auto bg-slate-700 p-24">

            <h2 className="text-5xl font-extrabold text-center mb-6">Add A Job</h2>

            <form onSubmit={handleADD}>
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="User Name" className="input checkbox-secondary input-bordered w-full rounded-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <select name="category" className="select checkbox-secondary input-bordered w-full border" defaultValue="">
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
                            <input type="text" name="jobTitle" placeholder="Job Title" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salaryRange" placeholder="Salary Range" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="jobApplicatsNumber" placeholder="Job Applicaters Number" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="jobPostingDate" placeholder="Job Posting Date" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> </span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="applicationDeadline" placeholder="Application Deadline use Data Picker Package" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" name="description" placeholder="Job description" className="input checkbox-secondary input-bordered w-full" /> */}
                            <textarea className="input checkbox-secondary input-bordered w-full" name="description" placeholder="Job description" id="" cols="30" rows="10"></textarea>
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-12">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="logo" placeholder="logo URL" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="picture" placeholder="Picture URL" className="input checkbox-secondary input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* <button className="btn btn-block btn-secondary" type="submit" value="Add A Job" /> */}
                <button className="btn btn-block btn-secondary"  type="submit">Add A Job</button>


            </form>


        </div>
    );
};

export default AddAJob;