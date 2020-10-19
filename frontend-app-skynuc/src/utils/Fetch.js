import { message } from 'antd';
import 'styles/styles.css';

function Fetch({ method: method, path: path, body: body, successMessage: successMessage }) {
    const domain = process.env.REACT_APP_API_DOMAIN;
    const url = `${domain}/${path}`;
    const options = {
        method: method,
        headers: new Headers({
            'Content-type': 'application/json',
        }),
        mode: 'cors',
    };
    const methodsWithBody = ['POST', 'PUT', 'PATCH'];
    if (methodsWithBody.includes(method)) {
        options.body = JSON.stringify(body);
    }

    console.log(
        '-----------------------',
        '\n',
        'Fetch is being done:',
        '\n',
        'URL:',
        '\n',
        url,
        '\n',
        'OPTIONS:',
        options,
        '\n',
        '-----------------------',
    );

    fetch(url, options)
        .then((response) => {
            if (response.status >= 200 || response.status < 300) {
                // console.log(`Status: ${response.status}`);
                // console.log('-----------------------');
                return response.json();
            }
            return Promise.reject(response.status);
        })
        .then((payload) => {
            // console.log('Data added to DB =>', payload);
            message.success({
                content: successMessage,
                duration: 6,
                className: '__messageBox',
            });
        })
        .catch((error) => {
            console.log(error);
            message.error({
                content: 'Something went wrong. Please try again.',
                duration: 6,
                className: '__messageBox',
            });
        });
    debugger;
}

export default Fetch;
