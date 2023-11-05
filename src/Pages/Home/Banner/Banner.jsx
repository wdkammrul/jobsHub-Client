
const Banner = () => {
    return (
        <div className="hero w-[400px] md:w-[740px] lg:w-full mx-auto bg-teal-200 rounded-lg mt-10">

            <div className="hero h-[230px] md:h-[430px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/bPNHMGm/banner-xpert2-9d28b4eb.png)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-7xl">
                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-extrabold text-secondary">JobsHub Elevate Your Career Path</h1>
                        <p className="mb-5 text-xl md:text-4xl my-6 font-medium">Future success with jobsHub project</p>
                        <div className="form-control ">
                            <div className="input-group flex justify-center mx-auto mt-4">
                                <input type="text" placeholder="Search here..." className="input input-bordered" />
                                <button className="btn btn-square btn-secondary w-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;