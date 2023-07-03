import React, { useEffect, useState } from 'react';
import Header from 'components/shared/header';
import Circle from 'components/pages/index/circle';
import Section from 'components/pages/index/section';
import Slides from 'components/pages/index/slides';
import { NextPage } from 'next';

const Cursos: NextPage = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:5000/job/list', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token'),
                },
            });
            const jsonResult = await result.json();

            setJobs(jsonResult.sort((a, b) => b.id - a.id));
            // console.log(jsonResult);
            // console.log(cursos);
        };

        fetchData();
    }, []);

    return (
        <>
            <Header></Header>
            <div className='container mx-auto my-4 px-4 md:px-10'>
                <div className='grid grip-rows-2 gap-y-2 my-4 md:my-8 justify-center md:justify-normal'>
                    <div className=''>
                        <span className='text-3xl font-bold text-white '>
                            Oficios más populares
                        </span>
                    </div>
                    <div className=''>
                        <div className=''>
                            <Slides jobs={jobs}></Slides>
                        </div>
                    </div>
                </div>
                {/* <div className=''>
                    <div className='mx-auto flex flex-row items-center justify-start'>
                        <span className='text-3xl font-bold text-white '>
                            Oficios más populares
                        </span>
                    </div>
                    <div className='flex flex-row items-center justify-center h-64 my-2 md:my-8'>
                        <Slides jobs={jobs}></Slides>
                    </div>
                </div>
                <div className=''>
                    <div className='container mx-auto flex items-center justify-start h-36'>
                        <span className='text-3xl font-bold text-white '>
                            Oficios más populares
                        </span>
                    </div>
                    <div className='container mx-auto  flex items-center justify-center h-64 my-2 md:my-8'>
                        <Slides jobs={jobs}></Slides>
                    </div>
                </div> */}

                {/* <div className='container mx-auto flex items-center justify-start h-36'>
                    <span className='text-3xl font-bold text-white'>
                        Oficios en tendencia
                    </span>
                </div>
                <div className='container mx-auto  flex items-center justify-center h-64'>
                    <Slides jobs={jobs}></Slides>
                </div> */}
            </div>
        </>
    );
};

export default Cursos;
