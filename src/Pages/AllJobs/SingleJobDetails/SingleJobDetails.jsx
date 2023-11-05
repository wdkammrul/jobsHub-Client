const SingleJobDetails = () => {
    return (
        <div className=" mt-10  w-[400px] md:w-[740px] lg:w-full mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                    className="w-full h-48 md:h-96 object-cover object-center"
                    src='https://i.ibb.co/ZHsJgtC/360-F-367594379-T59k-HSMhp-Ao-LVul87-RVSq-Et-V7-Rn5q-ZS9.jpg'
                    alt="Job Preview"
                />
                <div className="p-6">
                    <div className="flex items-center mb-4 mt-4">
                        <img className="rounded-full w-16 h-16 mr-4" src="https://i.ibb.co/zxLDc0T/images.png" alt="Company Logo" />
                        <div>
                            <h1 className="text-3xl font-bold">Job Title</h1>
                        </div>
                    </div>
                    <p className="text-gray-700 my-6 text-xl font-bold">Description: Exciting opportunity to work on cutting-edge technologies  contribute to innovative projects.</p>
                    <div className="md:flex lg:justify-between md:max-w-4xl my-8">                    
                            <p className="text-gray-700 text-2xl font-bold">Salary Range:</p>
                        <p className="text-gray-700 text-2xl font-bold mt-3">Number of Applicants:</p>   
                    </div>

                    <div className="mt-10 mb-6">
                        <button className="btn btn-secondary w-full" onClick={() => document.getElementById('my_modal_5').showModal()}> Apply </button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box  w-[400px] md:w-[740px] lg:w-full mx-auto">
                                <form>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-extrabold"></span>
                                        </label>
                                        <input type="text" name="name" placeholder="User Name" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-extrabold"></span>
                                        </label>
                                        <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-extrabold"></span>
                                        </label>
                                        <input type="text" name="link" placeholder="Submit Resume Link" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6 ">
                                        <button className="btn btn-secondary text-white">Submit</button>
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
