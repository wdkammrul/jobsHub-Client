import { Link, NavLink } from "react-router-dom";


const Navbar = () => {



    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allJobs'>All Jobs</NavLink></li>
        <li><NavLink to='/addAJob'>Add A Job</NavLink></li>
        <li><NavLink to='/myJobs'>My Jobs</NavLink></li>
        <li><NavLink to='/blogs'>Blogs </NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-secondary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-16 h-16 mr-4 rounded-full" src="https://i.ibb.co/93n28NM/1517027541750.jpg" alt="" />

                <Link to="/" className="btn btn-secondary text-white normal-case text-xl">JOBSHUB</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn btn-secondary text-white">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;