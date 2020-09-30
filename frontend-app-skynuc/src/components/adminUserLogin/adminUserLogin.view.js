import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { HOME } from 'routes/routes';
import checkIfEmptyObject from 'utils/checkIfEmptyObject';
import styles from './adminUserLogin.module.css';

const AdminUserLogin = () => {
    const [submitSuccessful, isSubmitSuccessful] = useState(false);

    const { register, handleSubmit, watch, errors } = useForm();

    const watchShowEmail = watch('showEmail', false);
    const watchShowPassword = watch('showPassword', false);

    const history = useHistory();

    function onSubmitLogin(data) {
        console.log('Login data submitted: ', data);
        isSubmitSuccessful(true);
        setTimeout(() => history.push(HOME), 3000);
    }

    const emailFromDB = 'admin@vueling.com';
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
                            name="showEmail"
                            ref={register({
                                validate: (value) => {
                                    if (value === emailFromDB) {
                                        return true;
                                    } else {
                                        return 'Email not registered';
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
                            name="showPassword"
                            ref={register({
                                validate: (value) => {
                                    if (value === passwordFromDB) {
                                        return true;
                                    } else {
                                        return 'Incorrect password';
                                    }
                                },
                            })}
                        />
                        {/* <Button
                            content={'TEST SIGN IN'}
                            color={'blue__outline'}
                            action={contactUs}
                        /> */}

                        <button disabled={!(!!watchShowEmail && !!watchShowPassword)}>
                            Submit
                        </button>

                        {!checkIfEmptyObject(errors) && (
                            <div className={`${styles.__message__box} ${styles.__error}`}>
                                {/* <div className={cx(styles.__message__box, styles.__error)}> */}
                                {errors.email && (
                                    <p className={styles.__error}>{errors.email.message}</p>
                                )}
                                {errors.loginPassword && (
                                    <p className={styles.__error}>{errors.loginPassword.message}</p>
                                )}
                            </div>
                        )}
                        {submitSuccessful && (
                            <div className={`${styles.__message__box} ${styles.__success}`}>
                                <p>You have been successfully logged in!</p>
                            </div>
                        )}

                        <span>
                            In order to obtain your login credentials, please email us at
                            <strong> support@skyreader.com</strong>
                        </span>

                        {/* <button onClick={contactUs} className="ghost__outline">
                            Contact Us
                        </button> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminUserLogin;
