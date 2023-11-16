import { useState, useEffect } from 'react';
import { getJobsList } from 'services/jobs';
import { Job } from 'types/types';


export const useGet = (): { jobs: Job[]; isLoading: boolean } => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getJobsList()
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
