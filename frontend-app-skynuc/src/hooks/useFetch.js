import { useEffect, useState } from 'react';

// const useFetch = ({ path, method, body = {}, auth = false }) => {
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
            // const myToken = getToken(); // ASK COMMENTED?
            const options = {
                method,
                headers: new Headers({
                    'Content-type': 'application/json',
                    // 'authorization': auth ? `Bearer ${myToken.access_token}` : undefined, // ASK COMMENTED?
                }),
                mode: 'cors',
            };

            const methodsWithBody = ['POST', 'PUT', 'PATCH'];
            if (methodsWithBody.includes(method)) {
                // Line below to be deleted once we try one of the 3 methodsWithBody
                // if (method === ('POST' || method === 'PUT' || method === 'PATCH')) {
                options.body = JSON.stringify(body);
                console.log('Entered methodsWithBody');
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
                    // setJWT(payload.access_token) // ASK fetch me - solo para hacer login - no va aquí
                    console.log(`Payload: ${payload}`);
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
// -----------------------------
// const { data, error, isLoading } = useFetch('airlines', 'GET');

// --> POST:
// -----------------------------
// const { data, error } = useFetch('users', 'POST', {
//     username: 'admin@vueling.com',
//     password: 'vueling',
// });

// --> POST onClick + auth:
// -----------------------------
// const { data, resetFetch } = useFetch({ path: 'login', method: 'GET', body, auth: true });

// // kind of...: // ASK fetch me - solo para hacer login - instead of line in fetch
// const setJwt = (token) => {
//     localStorage.setItem('JWT', token);
// };

// // kind of...:
// useEffect(() => {
//     setJwt(data.access_token);
// }, data);

// FIXME: Passar auth a true quan tinguem JWT implementat:
// const { data: dataPost, resetFetch} = useFetch({ path: 'flight_const', method: 'POST', body, auth: false });
