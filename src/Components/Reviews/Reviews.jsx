import { use } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";



const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    return (
        <div>

            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                >


                    {
                        reviews.map((review, index) => <SwiperSlide key={index} >
                            <ReviewCard review={review} ></ReviewCard>
                        </SwiperSlide>)
                    }

                </Swiper>
            </>



        </div>
    );
};

export default Reviews;