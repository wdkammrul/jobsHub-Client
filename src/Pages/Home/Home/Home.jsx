import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import JobCategory from "../JobCategory/JobCategory";
import Subscribe from "../Subscribe/Subscribe";
import NewJobs from "../NewJobs/NewJobs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>JobsHub | Home</title>
            </Helmet>
           <Banner></Banner>
           <JobCategory></JobCategory>
           <NewJobs></NewJobs>
           <Subscribe></Subscribe>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;