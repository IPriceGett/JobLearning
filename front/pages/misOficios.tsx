import React, { useEffect, useState } from 'react';
import Header from 'components/shared/header';
import Circle from 'components/pages/index/circle';
import Section from 'components/pages/index/section';
import Slides from 'components/pages/index/slides';
import Button from '../components/generic/button';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useMyJobs } from 'hooks/useMyJobs';

const Cursos: NextPage = () => {
    const { push } = useRouter();
    const handleClick = () => {
        push('/cursos');
    };

    const { jobs, loading } = useMyJobs();
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
                <div className='container md:my-8 md:pt-8 my-8 pt-4 mx-auto'>
                    <span className='text-4xl font-bold text-white'>
                        Tus oficios
                    </span>
                </div>
                <div className='container mx-auto h-auto '>
                    {loading && (
                        <span className='text-xl font-bold text-white'>
                            Cargando...
                        </span>
                    )}
                    <Slides jobs={jobs}></Slides>
                </div>
                <div>
                    <div className='my-6'>
                        <Button
                            appearance='amber'
                            size='medium'
                            onClick={handleClick}
                        >
                            ¡Explora mas oficios!
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cursos;
