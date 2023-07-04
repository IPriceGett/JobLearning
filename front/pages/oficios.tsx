import React, { useEffect, useState } from 'react';
import Header from 'components/shared/header';
import Section from 'components/pages/index/section';
import Slides from 'components/generic/slides';
import { NextPage } from 'next';
import JobsSection from 'components/generic/JobsSection';
import { SwiperSlide } from 'swiper/react';
import Slide from 'components/generic/slide';
import { useGet } from 'hooks/useGet';

const Cursos: NextPage = () => {
    // const [jobs, setJobs] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetch('http://localhost:5000/job/list', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 authorization: localStorage.getItem('token'),
    //             },
    //         });
    //         const jsonResult = await result.json();

    //         // setJobs(jsonResult.sort((a, b) => b.id - a.id));
    //         setJobs(jsonResult);
    //         // console.log(jsonResult);
    //         // console.log(cursos);
    //     };

    //     fetchData();
    // }, []);
    const url = 'http://localhost:5000/job/list';
    const { jobs, loading } = useGet({ url });
    const url2 = 'http://localhost:5000/userjob/getJobs';
    const { jobs: jobs2, loading: loading2 } = useGet({ url: url2 });

    return (
        <>
            <Header></Header>
            <div className='container mx-auto my-4 px-4 md:px-10'>
                <JobsSection tittle='Oficios más populares'>
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
