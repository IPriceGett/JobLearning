import { useState, useEffect } from 'react';
import { getCreatedJobs} from 'services/jobs';
import { Job } from 'types/types';


export const useOficiosCreados = (): { jobs: Job[]; isLoading: boolean } => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCreatedJobs()
            .then((data) => {
                setJobs(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    return { jobs, isLoading };
};
