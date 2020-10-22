import { message } from 'antd';
import Button from 'components/button/button.view';
// import useFetch from 'hooks/useFetch';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { HOME } from 'routes/routes';
import checkIfEmptyObject from 'utils/checkIfEmptyObject';
import styles from './adminUserLogin.module.css';

const AdminUserLogin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const watchEmail = watch('email', false);
    const watchPassword = watch('password', false);

    // const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const history = useHistory();

    function onSubmitLogin(data) {
        console.log('Login data submitted: ', data);

        // const { data, error: errorLogin } = useFetch('login', 'GET');

        // setData(data);
        // setError(errorLogin);
        setError(error);

        message.success({
            content: 'Successfully logged in!',
            duration: 3,
            className: styles.__success__box,
        });

        setTimeout(() => history.push(HOME), 4000);
    }

    // const emailFromDB = 'admin@vueling.com';
    const passwordFromDB = 'vueling';

    return (
        <div className={styles.__wrapper}>
            <div className={styles.__container}>
                <div className={styles.__form__container}>
                    <form action="#" onSubmit={handleSubmit(onSubmitLogin)} noValidate>
                        <h1>Admin User Login</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            ref={register({
                                validate: (value) => {
                                    // FIXME: " 'Email not registered' when email value goes back to 0"
                                    if (value.length === 0) {
                                        return 'Email is required';
                                    } else {
                                        return true;
                                    }
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Please enter a valid e-mail address',
                                },
                            })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            ref={register({
                                validate: (value) => {
                                    if (value === passwordFromDB) {
                                        return true;
                                    } else if (value.length === 0) {
                                        return 'Password is required';
                                    } else {
                                        return 'Incorrect password';
                                    }
                                },
                            })}
                        />
                        <Button
                            content={'Submit'}
                            color={'blue__solid'}
                            disabled={!(!!watchEmail && !!watchPassword)}
                            onClick={onSubmitLogin}
                        />

                        {!checkIfEmptyObject(errors) && (
                            <div className={styles.__error__box}>
                                {errors.email && <p>{errors.email.message}</p>}
                                {errors.password && <p>{errors.password.message}</p>}
                                {/* {errorLogin && <p> error message de BE</p>} */}
                            </div>
                        )}
                        <span>
                            In order to obtain your login credentials, please email us at
                            <strong> support@skyreader.com</strong>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminUserLogin;
