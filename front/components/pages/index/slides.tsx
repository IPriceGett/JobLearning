import React from 'react';
import Card from 'components/pages/index/card';
import { useRouter } from 'next/router';

// Import Swiper React components
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slides = ({ jobs }) => {
    const { push } = useRouter();

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                slidesPerView={1}
                spaceBetween={10}
                // loop={true}
                // navigation
                //centeredSlides={true}
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
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
                        spaceBetween: 20,
                    },
                }}
            >
                {jobs.map(
                    (
                        job: {
                            id: string;
                            name: string;
                            description: string;
                            price: number;
                        },
                        index: React.Key
                    ) => (
                        <SwiperSlide
                            key={index}
                            className='cursor-pointer mx-auto'
                        >
                            <div
                                onClick={() => {
                                    push('/previewCurso?id=' + job.id);
                                }}
                            >
                                <Card
                                    title={job.name}
                                    desc={job.description}
                                    precio={job.price}
                                    photo='https://www.mndelgolfo.com/blog/wp-content/uploads/2018/03/Todo-lo-que-necesitas-saber-para-armar-tu-taller-de-carpinteri%CC%81a1.jpg'
                                ></Card>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </>
    );
};

export default Slides;
