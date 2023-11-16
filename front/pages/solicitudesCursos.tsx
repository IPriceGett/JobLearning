import JobsGrid from 'components/generic/JobsGrid';
import Header from 'components/shared/header';
import { useGet } from 'hooks/useGet';
import React from 'react';

const busqueda = () => {

    const { jobs, isLoading } = useGet();
    console.log(jobs)

    return (
        <>
            <Header></Header>
            <div className='container mx-auto my-4 px-4 md:px-10'>
                <div className='grid grip-rows-2 gap-y-2 my-6 md:my-10 justify-center md:justify-normal items-center'>
                    <div className='flex justify-center md:justify-normal'>
                        <span className='text-3xl font-bold text-white mb-4 '>
                            Solicitudes de cursos creados
                        </span>
                    </div>
                    {isLoading && (
                        <span className='text-xl font-bold text-white'>
                            Cargando...
                        </span>
                    )}
                    {jobs.length === 0 && (
                        <div className='container md:my-8 md:pt-8 my-8 pt-4 mx-auto'>
                            <span className='text-2xl font-bold text-white'>
                                "Por el momento no hay solicitudes de cursos creados
                            </span>
                        </div>
                    )}
                    <JobsGrid jobs={jobs}></JobsGrid>
                </div>  
            </div>
        </>  
    );
}

export default busqueda