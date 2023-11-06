
const Subscribe = () => {
    return (
        <div className="mt-32 bg-slate-700 p-20 rounded-lg  w-[400px] md:w-[740px] lg:w-full mx-auto">
            <div className="flex justify-center items-center">
                <div className="w-1/2">
                    <h2 className="text-5xl font-bold text-secondary text">
                        Subscribe Our <br />
                        JobsHub
                    </h2>
                    <p className="text-2xl font-medium mt-9">
                        Unlock endless career opportunities with <span className="text-secondary font-bold text-2xl">JobsHub</span>! Your gateway to a world of professional growth and success
                    </p>
                </div>

                <div className="w-1/2 text-center">
                    <form action="" className="">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-6 bg-slate-50 rounded-l-lg"
                        />
                        <button className="bg-secondary rounded-r-lg p-6 text-white">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;