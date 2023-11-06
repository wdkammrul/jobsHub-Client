import { Link } from "react-router-dom";

const JobByCategory = () => {
    return (
        <div className="mt-16">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold text-center ">Job By Category</h1>
            </div>
            <div className="mx-auto">
                <div className="grid mt-16 md:grid-cols-4 justify-around mx-auto  gap-5">

                    <Link to='/singleJobCategory'>
                        <div className="card card-compact  bg-base-100  ">
                            <figure><img className=" w-[270px]  h-[180px]" src='https://i.ibb.co/zxLDc0T/images.png' alt="Shoes" /></figure>

                            <div className="text-center absolute  bottom-36 bg-secondary w-32 text-white text-sm m-4 p-4 rounded-lg">
                                <h1 className=""> Part Time </h1>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default JobByCategory;