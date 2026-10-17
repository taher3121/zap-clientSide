
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
        <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}>
            {
                Brands.map((logo, index) => <SwiperSlide key={index}><img src={logo} alt="" /></SwiperSlide>)
            }
        </Swiper>
    );
};

export default Marquee;