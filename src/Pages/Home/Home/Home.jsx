import { Helmet } from "react-helmet-async";
import AllPost from "../AllPost/AllPost";
import Banner from "../Banner/Banner";
import AllTag from "../AllTag/AllTag";
import AllAnouncement from "../AllAnnouncement/AllAnouncement";

const Home = () => {
    return (
        <div>
            <Helmet><title>ConbvoHub | Home</title></Helmet>
            <Banner></Banner>
            <AllTag></AllTag>
            {/* <AllPost></AllPost> */}
            <AllAnouncement></AllAnouncement>
        </div>
    );
};

export default Home;