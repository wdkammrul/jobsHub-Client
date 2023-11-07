import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import JobCategory from "../JobCategory/JobCategory";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <JobCategory></JobCategory>
           <Subscribe></Subscribe>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;