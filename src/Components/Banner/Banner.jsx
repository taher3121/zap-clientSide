import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../../assets/banner/banner1.png'
import Banner2 from '../../assets/banner/banner2.png'
import Banner3 from '../../assets/banner/banner3.png'

const Banner = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            showStatus={false}
            className="overflow-hidden rounded-xl sm:rounded-2xl"
        >

            <div>
                <img src={Banner1} alt="ZapShift delivery service" className="block h-auto w-full" />
            </div>
            <div>
                <img src={Banner2} alt="ZapShift delivery coverage" className="block h-auto w-full" />
            </div>
            <div>
                <img src={Banner3} alt="ZapShift parcel delivery" className="block h-auto w-full" />
            </div>

        </Carousel>
    );
};

export default Banner;