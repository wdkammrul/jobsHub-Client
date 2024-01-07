

const NewJobs = () => {
    return (
        <div>
            <div className="card lg:card-side shadow-xl bg-slate-500 my-20">
                <img className='rounded-lg lg:w-1/2 md:p-20' src="https://i.ibb.co/v1nDkZ4/jobs-b-20190613164824.jpg" alt="Album" />
                <div className="card-body my-auto">
                    <p className='text-white text-4xl'>OUR NEW JOB</p>
                    {/* <h2 className="card-title text-3xl mb-4">Vegan food</h2> */}
                    <p className='space-y-5 text-white'>At OUR NEW JOB, we foster growth through collaboration, innovation, and professional development for an enhanced work environment.</p>
                    <div>
                        <button className='btn bg-secondary text-white mt-4'>Apply Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewJobs;