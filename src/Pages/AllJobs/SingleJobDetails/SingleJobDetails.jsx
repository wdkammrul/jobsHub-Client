import { Link } from "react-router-dom";

const SingleJobDetails = () => {
    return (
        <div className="h-[600px]">
            <div className="mx-auto rounded-lg w-[400px] md:w-[740px] lg:w-full  bg-stone-400  text-black my-10 md:my-20 overflow-x-hidden">
                <figure className="relative   mx-auto lg:w-full">
                    <img
                        className=" w-full md:h-[300px] rounded-xl object-cover object-center"
                        src='https://i.ibb.co/ZHsJgtC/360-F-367594379-T59k-HSMhp-Ao-LVul87-RVSq-Et-V7-Rn5q-ZS9.jpg'
                    />
                </figure>
                <div className="grid md:grid-cols-3 mx-auto p-10">
                    <div className="col-span-1">
                        <img className="rounded-full w-48 h-48" src="https://i.ibb.co/zxLDc0T/images.png" alt="" />
                    </div>

                    <div className="col-span-1 space-y-3">
                        <h1>Job Title: </h1>
                        <h1>Description: </h1>
                        <h1>Salary Range: </h1>
                        <h1>Number of Applicants: </h1>

                        <div className="flex gap-4">
                            {/* <Link to='/applyButton'><button
                                className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-secondary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Apply Button
                                
                            </button></Link>  */}


                            {/* Open the modal using document.getElementById('ID').showModal() method */} 
                            <button className="btn btn-secondary" onClick={() => document.getElementById('my_modal_5').showModal()}> Apply </button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                     <form>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-xl font-extrabold"></span>
                                            </label>
                                            <input type="text" name="name" placeholder="User Name" className="input input-bordered"  />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-xl font-extrabold"></span>
                                            </label>
                                            <input type="email" name="email" placeholder="Email" className="input input-bordered"  />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-xl font-extrabold"></span>
                                            </label>
                                            <input type="text" name="link" placeholder="Submit Resume Link" className="input input-bordered"  />
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
        </div>
    );
};

export default SingleJobDetails;