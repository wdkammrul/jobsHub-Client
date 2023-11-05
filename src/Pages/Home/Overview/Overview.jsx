

const Overview = () => {
    return (
        <div className="w-11/12 md:w-11/12 mt-32 lg:w-full mx-auto hero rounded-lg bg-base-200">
            <div className="hero-content flex-col lg:flex-row justify-around gap-8 mx-auto">
                <img src="https://i.ibb.co/5GCnV3G/images.jpg" className="w-[380px] md:w-[730px] lg:w-full rounded-lg shadow-2xl" />
                <div className="p-10">
                    <h1 className="text-3xl lg:text-5xl font-extrabold">Jov Overview</h1>
                    <p className="py-6 text-xl font-medium">Job insights for JobsHub: Explore opportunities, track trends.</p>
                    <button className="btn btn-secondary text-white">Quick Overview →</button>
                </div>
            </div>
        </div>
    );
};

export default Overview;