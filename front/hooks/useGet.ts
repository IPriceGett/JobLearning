import { useState, useEffect } from 'react';

type Props = {
    url: string;
};

export const useGet = ({ url }: Props): { jobs: any; loading: boolean } => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const result = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token'),
                },
            });
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
