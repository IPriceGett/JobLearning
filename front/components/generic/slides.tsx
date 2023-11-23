import React from 'react';
import { useRouter } from 'next/router';

// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

interface SlideProps {
    children: React.ReactNode;
}

const Slides: React.FC<SlideProps> = ({ children }): JSX.Element => {
    return (
        <div className='w-full'>
            <Swiper
                className='mySwiper'
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={10}
                // loop={true}
                // centeredSlides={true}
                // scrollbar={{ hide: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },

                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                    1536: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
            >
                {children}
            </Swiper>
        </div>
    );
};

export default Slides;
