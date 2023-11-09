import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="overflow-x-hidden">
            <footer className="footer mb-10 mt-32 p-20 bg-slate-900 text-base-content rounded-lg w-[400px] md:w-[740px] lg:w-full mx-auto">
                <nav className="space-y-4 ">

                    <div className="lg:flex justify-center items-center gap-3">
                        <img className="w-12 h-12 mr-2 rounded-full mb-4 md:mb-0" src="https://i.ibb.co/93n28NM/1517027541750.jpg" alt="" />

                        <Link to="/" className="text-white normal-case text-3xl font-bold">JobsHub</Link>
                   </div>

                   
                    <div className="flex flex-col text-xl font-bold"> 
                        <a className="link link-hover">82, Segunbagicha, Dhaka 1000</a>
                        <a className="link link-hover mt-4">Email: jobs@hub.com</a>
                        <a className="link link-hover mt-4">Phone: 01710510464 </a>
                    </div>

                </nav>

                <nav className="space-y-3 text-2xl font-bold ">
                    {/* <header></header> */}
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/allJobs'>All Jobs</NavLink> 
                    <NavLink to='/addAJob'>Add A Job</NavLink> 
                    <NavLink to='/myJobs'>My Jobs</NavLink>
                </nav>



                <nav className="md:mx-auto">
                    <header className="footer-title"> Social Links</header>
                    <div className="grid grid-cols-3 md:grid-row-3 gap-5 mt-3">
                        <a href="https://twitter.com/wdkammrul">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a className="" href="https://www.youtube.com/channel/UCvVRgrx74ZekdmseqkbiXvg"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a href="https://www.facebook.com/wdkammrul"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>

                </nav>
            </footer>
        
            <Link to="/" className="flex justify-center gap-3 text-white normal-case text-xl md:text-2xl mb-10">Copyright © 2023 - All right reserved by <span className="text-2xl md:text-3xl font-extrabold">JobsHub</span></Link>

        </div>

    );
};

export default Footer;