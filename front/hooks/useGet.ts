import { useState, useEffect } from 'react';
import { getJobs } from 'services/jobs';

type Props = {
    url: string;
};

export const useGet = ({ url }: Props): { jobs: any; isLoading: boolean } => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        // const fetchData = async () => {
        //     const result = await fetch(url, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             authorization: localStorage.getItem('token'),
        //         },
        //     });
        //     const jsonResult = await result.json();

        //     setJobs(jsonResult);
        //     setIsLoading(false);
        // };

        // fetchData();
    }, []);

    return { jobs, isLoading };
};
