import JobsGrid from 'components/generic/JobsGrid';
import Header from 'components/shared/header';
import { useFilter } from 'hooks/useFilter';
import { useRouter } from 'next/router';
import React from 'react';

const busqueda = () => {
    const router = useRouter()
    const keyword = router.query.keyword;
    console.log('page',keyword)

    const { jobs, isLoading } = useFilter(keyword);
    console.log(jobs)

    return (
        <>
            <Header></Header>
            <div className='container mx-auto my-4 px-4 md:px-10'>
                <div className='grid grip-rows-2 gap-y-2 my-6 md:my-10 justify-center md:justify-normal items-center'>
                    <div className='flex justify-center md:justify-normal'>
                        <span className='text-3xl font-bold text-white mb-4 '>
                            Cursos para: {keyword}
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
                                No se encontraron resultados asociados a tu búsqueda
                            </span>
                        </div>
                    )}
                    <JobsGrid jobs={jobs} rol={1}></JobsGrid>
                </div>  
            </div>
        </>  
    );
}

export default busqueda

