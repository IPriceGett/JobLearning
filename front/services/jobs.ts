import { Job } from 'types/types';

export const getCreatedJobs = () => {
    const url = 'https://49c6-201-223-197-118.ngrok-free.app/job/byOwner';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('token'),
        },
    };
    return fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

export const getMyJobs = () => {
    const url = 'https://49c6-201-223-197-118.ngrok-free.app/userjob/getJobs';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('token'),
        },
    };
    return fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

export const getJobSearch = async (keyword: string) => {
    console.log('servicios', keyword);
    const url = 'https://49c6-201-223-197-118.ngrok-free.app/job/search';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({ key: keyword }),
    };
    // try {
    //     const response = await fetch(url, options);
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     const data: Job[] = await response.json();
    //     // console.log(data)
    //     return data;
    // } catch (error: any) {
    //     throw new Error(error);
    //     // console.log('error');
    // }
    return fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};

export const getJobsList = () => {
    const url = 'https://49c6-201-223-197-118.ngrok-free.app/job/list';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('token'),
        },
    };

    return fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};
