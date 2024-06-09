import { Helmet } from "react-helmet-async";
import AllPost from "../AllPost/AllPost";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet><title>ConbvoHub | Home</title></Helmet>
            <Banner></Banner>
            <AllPost></AllPost>
        </div>
    );
};

export default Home;