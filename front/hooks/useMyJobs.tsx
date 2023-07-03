import { useState, useEffect } from 'react';

type HookReturnValue = {
    jobs: any;
    loading: boolean;
    // error: Error | null;
};

// type HookArgs = {
//     // define your arguments here
// };

export const useMyJobs = (): HookReturnValue => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const result = await fetch(
                'http://localhost:5000/userjob/getJobs',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: localStorage.getItem('token'),
                    },
                }
            );
            const jsonResult = await result.json();

            setJobs(jsonResult);
            setLoading(false);

            // console.log(jsonResult);
            // console.log(cursos);
        };

        fetchData();
    }, []);

    return { jobs, loading };
};
