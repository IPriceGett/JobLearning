import { useState, useEffect } from 'react';
import { getJobsMod } from 'services/mods';
import { Job } from 'types/types';


export const useJobsMod = (url: string): { jobs: Job[]; isLoading: boolean } => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getJobsMod(url)
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
