
const ContactUs = () => {
    return (
        <div className="hero ">
            <div className="hero-content mt-32 flex-col md:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm ">
                    <form className="card-body">
                        <h1 className="text-5xl mb-4 text-secondary font-bold">Contact Us</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="text" placeholder="Message" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary text-white">Contact Us</button>
                        </div>
                    </form>


                </div>

                <img className="w-[260px] h-[260px] rounded-tr-3xl rounded-bl-3xl" src="https://i.ibb.co/BPH7b83/michal-biernat-h0x-EUQXz-U38-unsplash.jpg" alt="" />

            </div>
        </div>
    );
};

export default ContactUs;