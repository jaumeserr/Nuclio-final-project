import { useEffect, useState } from 'react';

const useFetch = (path, method, body = {}) => {
    const [hasEverLoadedData, setHasEverLoadedData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [reloadFetch, setReloadFetch] = useState(false);

    const resetFetch = () => {
        setReloadFetch(!reloadFetch);
    };

    useEffect(() => {
        if (!isLoading) {
            const domain = process.env.REACT_APP_API_DOMAIN;
            const url = `${domain}/${path}`;
            const options = {
                method,
                headers: new Headers({
                    'Content-type': 'application/json',
                }),
                mode: 'cors',
            };

            const methodsWithBody = ['POST', 'PUT', 'PATCH'];
            if (methodsWithBody.includes(method)) {
                // Line below to be deleted once we try one of the 3 methodsWithBody
                // if (method === ('POST' || method === 'PUT' || method === 'PATCH')) {
                options.body = JSON.stringify(body);
            }

            console.log('Fetch is being done:', '\n', 'url -->', url, '\n', 'options -->', options);

            setIsLoading(true);

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
                    setHasEverLoadedData(true);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setIsLoading(false);
                });
        }
    }, [reloadFetch]); // eslint-disable-line react-hooks/exhaustive-deps

    return { data, error, isLoading, hasEverLoadedData, resetFetch };
};

export default useFetch;

// USAGE EXAMPLE:
// --------------------------------------------

// --> GET
// const { data, error } = useFetch('airlines', 'GET');

// --> POST:
// const { data, error } = useFetch('users', 'POST', {
//     username: 'admin@vueling.com',
//     password: 'vueling',
// });
