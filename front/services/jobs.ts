export const getJobs = () => {
    const url = 'http://localhost:5000/userjob/getJobs';
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
    const url = 'http://localhost:5000/job/search';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({ key: keyword }),
    };
    return fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

export const getJobsList = () => {
    const url = 'http://localhost:5000/job/list';
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

export const getMyJobs = () => {};
