import Banner from "../../Components/Banner/Banner";
import Marquee from "../../Components/Marquee/Marquee";
import Reviews from "../../Components/Reviews/Reviews";

const ReviewPromise = fetch('/Reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div className="space-y-8 py-4 sm:space-y-12 sm:py-8">
            <Banner></Banner>
            <Marquee></Marquee>
            <Reviews reviewsPromise = {ReviewPromise}></Reviews>
        </div>
    );
};

export default Home;