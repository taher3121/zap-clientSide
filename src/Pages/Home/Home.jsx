import Banner from "../../Components/Banner/Banner";
import Marquee from "../../Components/Marquee/Marquee";
import Reviews from "../../Components/Reviews/Reviews";

const ReviewPromise = fetch('/Reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marquee></Marquee>
            <Reviews reviewsPromise = {ReviewPromise}></Reviews>
        </div>
    );
};

export default Home;