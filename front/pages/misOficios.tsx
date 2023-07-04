import React from 'react';
import Header from 'components/shared/header';
import Slides from 'components/generic/slides';
import Button from '../components/generic/button';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { SwiperSlide } from 'swiper/react';
import JobsSection from 'components/generic/JobsSection';
import Slide from 'components/generic/slide';
import { useGet } from 'hooks/useGet';

const Cursos: NextPage = () => {
    const { push } = useRouter();
    const handleClick = () => {
        push('/cursos');
    };

    const url = 'http://localhost:5000/userjob/getJobs';
    const { jobs, loading } = useGet({ url });
    // console.log(jobs, loading);

    // if (jobs.length === 0) {
    //     return (
    //         <>
    //             <Header></Header>
    //             <div className='container mx-auto px-6 md:px-10'>
    //                 <div className='container md:my-8 md:pt-8 my-8 pt-4 mx-auto'>
    //                     <span className='text-4xl font-bold text-white'>
    //                         Aun no tienes cursos comprados
    //                     </span>
    //                 </div>

    //                 <div>
    //                     <div className='my-6'>
    //                         <Button
    //                             appearance='amber'
    //                             size='medium'
    //                             onClick={handleClick}
    //                         >
    //                             ¡Explora cursos!
    //                         </Button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </>
    //     );
    // }

    return (
        <>
            <Header></Header>
            <div className='container mx-auto px-6 md:px-10'>
                <JobsSection tittle='Tus oficios'>
                    {loading && (
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
