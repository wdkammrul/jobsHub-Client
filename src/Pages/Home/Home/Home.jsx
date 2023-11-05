import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Overview from "../Overview/Overview";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Overview></Overview>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;