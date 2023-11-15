import React from 'react';
import Header from 'components/shared/header';
import Slides from 'components/generic/slides';
import Button from '../components/generic/button';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { SwiperSlide } from 'swiper/react';
import JobsSection from 'components/generic/JobsSection';
import Slide from 'components/generic/slide';
import { useMisOficios } from 'hooks/useMisOficios';

const Cursos: NextPage = () => {
    const { push } = useRouter();
    const handleClick = () => {
        push('/cursos');
    };

    const url = 'http://localhost:5000/userjob/getJobs';
    const { jobs, isLoading } = useMisOficios();


    return (
        <>
            <Header></Header>
            <div className='container mx-auto px-6 md:px-10'>
                <JobsSection tittle='Tus oficios'>
                    {isLoading && (
                        <span className='text-xl font-bold text-white'>
                            Cargando...
                        </span>
                    )}
                    {jobs.length === 0 && (
                        <div className='container md:my-8 md:pt-8 my-8 pt-4 mx-auto'>
                            <span className='text-4xl font-bold text-white'>
                                Aun no tienes cursos comprados
                            </span>
                        </div>
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
                <div className='flex items-center justify-center md:justify-normal'>
                    <Button
                        appearance='amber'
                        size='medium'
                        onClick={handleClick}
                    >
                        ¡Explora mas oficios!
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Cursos;
