import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import JobByCategory from "../JobByCategory/JobByCategory";
import Overview from "../Overview/Overview";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <JobByCategory></JobByCategory>
           <Overview></Overview>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;