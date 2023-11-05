import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

    const { registerUser } = useContext(AuthContext);

    const isStrongPassword = (password) => {
        
        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

        return strongPassword.test(password);
    };

    const handleRegisterBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const values = { name, email, password }
        console.log(values);


        if (!isStrongPassword(password)) {
            toast('Password must be at least 6 characters long and contain at least one uppercase letter, one special character, and one number');
            return;
        }

        registerUser(email, password)
            .then(res => toast('Congratulations! For Being A Member', res))
            .catch(err => toast('Try Again Please', err))


        fetch('https://beverage-server-site.vercel.app/users', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(values),

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                }
                console.log(data)
            })
    }

    return (
        <div>
            <form onSubmit={handleRegisterBtn} className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-slate-800 rounded-lg p-10 mt-10">
                <div className="form-control">
                    <h2 className="text-4xl text-center my-6 uppercase font-extrabold">Register Here</h2>

                    <label className="label">
                        <span className="label-text text-xl font-extrabold">Name</span>
                    </label>
                    <input type="name" name="name" placeholder="Name" className="input input-bordered" required />

                    <label className="label mt-3">
                        <span className="label-text text-xl font-extrabold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label mt-3">
                        <span className="label-text text-xl font-extrabold">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6 ">
                    <button className="btn btn-secondary text-white">Register</button>

                    <div className="flex my-8 ">
                        <p className="text-center">Have an account ? <Link to='/login'> <span className="underline font-extrabold text-secondary text-2xl">Log In</span> here</Link></p>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;