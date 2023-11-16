import { Job } from "types/types";

export const getJobsMod = (url: string) => {
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