import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import JobByCategory from "../JobByCategory/JobByCategory";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <JobByCategory></JobByCategory>
           <Subscribe></Subscribe>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;