import { useEffect, useState } from 'react';

// Ejemplo de uso:

// GET
// const { data, error } = useFetch('airlines', 'GET');

// // POST:
// const { data, error } = useFetch('users', 'POST', {
//     username: 'admin@vueling.com',
//     password: 'vueling',
// });

const useFetch = (resource, method, body = {}) => {
    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const baseUrl = process.env.REACT_APP_API_URL;

        const url = { baseUrl } / { resource };
        const options = {
            method: { method },
            headers: new Headers({
                'Content-type': 'application/json',
            }),
            mode: 'cors',
        };

        if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
            options.body = JSON.stringify(body);
        }

        fetch(url, options)
            .then((response) => {
                if (response.status >= 200 || response.status < 300) {
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then((payload) => {
                console.log(payload);
                setData(payload);
                setIsLoading(false);

            })
            .catch((error) => {
                setError(error);
            });
    }, [resource, method, body]);

    return { data, error };
};

export default useFetch;
