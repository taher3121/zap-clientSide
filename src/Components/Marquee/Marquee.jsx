
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../assets/brands/amazon.png';
import amazon_vector from '../../assets/brands/amazon_vector.png'
import casio from '../../assets/brands/casio.png';
import moonstar from '../../assets/brands/moonstar.png';
import randstad from '../../assets/brands/randstad.png';
import star from '../../assets/brands/star.png';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Brands = [amazon, amazon_vector, casio, moonstar, randstad, star]

const Marquee = () => {
    return (
        <div className="my-6 w-full py-3 sm:my-8 sm:py-4">
            <Swiper
                slidesPerView={2}
                centeredSlides
                spaceBetween={16}
                grabCursor
                loop
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                }}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mx-auto w-full max-w-5xl"
            >
                {Brands.map((logo, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                        <img src={logo} alt="" className="h-5 w-full object-contain sm:h-5" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Marquee;