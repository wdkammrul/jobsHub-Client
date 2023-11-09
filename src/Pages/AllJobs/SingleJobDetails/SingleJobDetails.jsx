import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthenticationPage/AuthProvider/AuthProvider";
import { toast } from "react-toastify";


/* eslint-disable react/prop-types */
const SingleJobDetails = () => {
    const [theData, setData] = useState(null)
    const { id } = useParams()
    const { user } = useContext(AuthContext)

    console.log(user)

    console.log(theData)
    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => {
                const singledata = data?.find(data => data._id === id)
                setData(singledata)
            })
    }, [id]) 


    const handleApplySubmit = e =>{
        e.preventDefault()
        const form = e.target 
        const resume = form.resume.value
        const email = user?.email
        const userName = user?.displayName
        const data = theData
       
        const applicationData = {resume, email, data, userName}
        console.log(applicationData)

        fetch("http://localhost:5000/apply", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(applicationData),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    toast('Apply Added Successfully')
                    form.reset();
                }
            });
    }



    return (
        <div className=" mt-10  w-[400px] md:w-[740px] lg:w-full mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                    className="w-full h-48 md:h-96 object-cover object-center"
                    src={theData?.picture_url}
                    alt="Job Preview"
                />
                <div className="p-6">
                    <div className="flex items-center mb-4 mt-4">
                        <img className="rounded-full w-16 h-16 mr-4" src="https://i.ibb.co/zxLDc0T/images.png" alt="Company Logo" />
                        <div>
                            <h1 className="text-3xl font-bold">{theData?.username}</h1>
                        </div>
                    </div>
                    <p className="text-gray-700 my-6 text-xl font-bold">Description: {theData?.description}</p>
                    <div className="md:flex lg:justify-between md:max-w-4xl my-8">
                        <p className="text-gray-700 text-2xl font-bold">Salary Range:{theData?.salary_range}</p>
                        <p className="text-gray-700 text-2xl font-bold mt-3">Number of Applicants:{theData?.applicants_number}</p>
                    </div>

                    <div className="mt-10 mb-6">
                        <button className="btn btn-secondary w-full" onClick={() => document.getElementById('my_modal_5').showModal()}> Apply </button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box  w-[400px] md:w-[740px] lg:w-full mx-auto">
                                <form onSubmit={handleApplySubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-extrabold"></span>
                                        </label>
                                        <input type="text" readOnly defaultValue={user?.displayName} name="name" placeholder="User Name" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-extrabold"></span>
                                        </label>
                                        <input type="email" readOnly defaultValue={user?.email}  name="email" placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-extrabold"></span>
                                        </label>
                                        <input type="text" name="resume" placeholder="Submit Resume Link" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6 ">
                                        <button className="btn btn-secondary text-white" type="submit">Submit</button>
                                    </div>
                                </form>

                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleJobDetails;
