import { useState, useEffect } from 'react';
import { getJobSearch } from 'services/jobs';
import { Job } from 'types/types';



export const useFilter = (keyword : string): { jobs: Job[]; isLoading: boolean } => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getJobSearch(keyword)
            .then((data) => {
                setJobs(data.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    return { jobs, isLoading };
};
