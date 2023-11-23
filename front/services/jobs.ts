import { Job } from 'types/types';

export const getCreatedJobs = () => {
    const url = 'http://localhost:5000/job/byOwner';
    const options = {
        method: 'POST',
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
    const url = 'http://localhost:5000/userjob/getJobs';
    const options = {
        method: 'POST',
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
    const url = 'http://localhost:5000/job/search';
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
    const url = 'http://localhost:5000/job/list';
    const options = {
        method: 'POST',
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
