import Header from 'components/shared/header';
import Slides from 'components/generic/slides';
import { NextPage } from 'next';
import JobsSection from 'components/generic/JobsSection';
import { SwiperSlide } from 'swiper/react';
import Slide from 'components/generic/slide';
import { useGet } from 'hooks/useGet';

const Cursos: NextPage = () => {
    const { jobs, isLoading } = useGet();
    const { jobs: jobs2, isLoading: loading2 } = useGet();

    return (
        <>
            <Header></Header>
            <div className='container mx-auto my-4 px-4 md:px-10'>
                <JobsSection tittle='Oficios más populares'>
                    {isLoading && (
                        <span className='text-xl font-bold text-white'>
                            Cargando...
                        </span>
                    )}
                    <Slides>
                        {jobs.map((job, index: number) => (
                            <SwiperSlide key={index}>
                                <Slide job={job}></Slide>
                            </SwiperSlide>
                        ))}
                        <div className='h-10'></div>
                    </Slides>
                </JobsSection>
                <JobsSection tittle='Oficios en tendencia'>
                    {loading2 && (
                        <span className='text-xl font-bold text-white'>
                            Cargando...
                        </span>
                    )}
                    <Slides>
                        {jobs2.map((job, index: number) => (
                            <SwiperSlide key={index}>
                                <Slide job={job}></Slide>
                            </SwiperSlide>
                        ))}
                        <div className='h-10'></div>
                    </Slides>
                </JobsSection>
            </div>
        </>
    );
};

export default Cursos;
