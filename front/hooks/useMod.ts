import { useState, useEffect } from 'react';
import { getJobsMod } from 'services/mods';
import { Job, User } from 'types/types';


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

export const usersListMod = (url: string): { users: User[]; isLoading: boolean } => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getJobsMod(url)
            .then((data) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    return { users, isLoading };
}
