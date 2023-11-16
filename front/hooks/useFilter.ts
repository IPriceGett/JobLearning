import { useState, useEffect } from 'react';
import { getJobSearch } from 'services/jobs';
import { Job } from 'types/types';


export const useFilter = (keyword : string): { jobs: Job[]; isLoading: boolean } => {
    console.log('use', keyword)
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        getJobSearch(keyword)
            .then((data) => {
                setJobs(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, [keyword]);

    return { jobs, isLoading };
};
