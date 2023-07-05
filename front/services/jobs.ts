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

export const getMyJobs = () => {};
