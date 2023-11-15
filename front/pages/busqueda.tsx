import JobsGrid from 'components/generic/JobsGrid';
import JobsSection from 'components/generic/JobsSection';
import Header from 'components/shared/header';
import { useFilter } from 'hooks/useFilter';
import { useGet } from 'hooks/useGet';
import { useRouter } from 'next/router';
import React from 'react';

const busqueda = () => {
    const router = useRouter();
    const termino = router.query.termino;
    const keyword = Array.isArray(termino) ? termino[0] : termino;

    const { jobs, isLoading } = useGet();

    return (
        <>
            <Header></Header>
            <div className='container mx-auto my-4 px-4 md:px-10'>
                <div className='grid grip-rows-2 gap-y-2 my-6 md:my-10 justify-center md:justify-normal items-center'>
                    <div className='flex justify-center md:justify-normal'>
                        <span className='text-3xl font-bold text-white mb-4 '>
                            Oficios para: {keyword}
                        </span>
                    </div>
                    {isLoading && (
                        <span className='text-xl font-bold text-white'>
                            Cargando...
                        </span>
                    )}
                    {jobs.length === 0 && (
                        <div className='container md:my-8 md:pt-8 my-8 pt-4 mx-auto'>
                            <span className='text-4xl font-bold text-white'>
                                No encontramos oficios coincentes con tu búsqueda, intenta nuevamente!
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