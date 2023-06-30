import React, { useEffect } from "react";
import Header from "components/shared/header";
import Card from "components/pages/index/card";
import Circle from "components/pages/index/circle";
import Section from "components/pages/index/section";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

function Cursos() {
    return (
        <>
            <Header></Header>
            {/* <Section color="[#222222]" altura="56">
                <span className="text-3xl font-bold text-white">
                    ¡Mira los cursos más populares!
                </span>
            </Section>
            <Section color="black" altura="64">
                <span className="text-white">Cursos mas visitados</span>
            </Section>
            <Section color="[#50d71e]" altura="2">
                <span>hola</span>
            </Section> */}

            <div className="container mx-auto px-4 md:px-10">
                <div className="container mx-auto flex items-center justify-start h-36">
                    <span className="text-3xl font-bold text-white">
                        ¡Mira los cursos más populares!
                    </span>
                </div>
                <div className="container mx-auto bg-black flex items-center justify-center h-64 text-white">
                    <span className="text-3xl font-bold text-white">
                        slide cursos
                    </span>
                </div>
                <div className="container mx-auto flex items-center justify-start h-36">
                    <span className="text-3xl font-bold text-white">
                        Tus cursos
                    </span>
                </div>
                <div className="container mx-auto bg-black flex items-center justify-center h-64">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Card
                                title="hola"
                                desc="weko"
                                photo="https://www.mndelgolfo.com/blog/wp-content/uploads/2018/03/Todo-lo-que-necesitas-saber-para-armar-tu-taller-de-carpinteri%CC%81a1.jpg"
                            ></Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                title="hola"
                                desc="weko"
                                photo="https://www.mndelgolfo.com/blog/wp-content/uploads/2018/03/Todo-lo-que-necesitas-saber-para-armar-tu-taller-de-carpinteri%CC%81a1.jpg"
                            ></Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                title="hola"
                                desc="weko"
                                photo="https://www.mndelgolfo.com/blog/wp-content/uploads/2018/03/Todo-lo-que-necesitas-saber-para-armar-tu-taller-de-carpinteri%CC%81a1.jpg"
                            ></Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                title="hola"
                                desc="weko"
                                photo="https://www.mndelgolfo.com/blog/wp-content/uploads/2018/03/Todo-lo-que-necesitas-saber-para-armar-tu-taller-de-carpinteri%CC%81a1.jpg"
                            ></Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                title="hola"
                                desc="weko"
                                photo="https://www.mndelgolfo.com/blog/wp-content/uploads/2018/03/Todo-lo-que-necesitas-saber-para-armar-tu-taller-de-carpinteri%CC%81a1.jpg"
                            ></Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Cursos;
