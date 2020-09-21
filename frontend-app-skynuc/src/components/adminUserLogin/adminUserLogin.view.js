import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import checkIfEmptyObject from 'utils/checkIfEmptyObject';
import './adminUserLogin.css';
// import styles from './adminUserLogin.module.css';

const AdminUserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitSuccessful, isSubmitSuccessful] = useState(false);

    function validateLoginForm() {
        return email.length > 0 && password.length > 0;
    }

    const { register, handleSubmit, errors } = useForm();

    function onSubmitLogin(data) {
        console.log('Login data submitted: ', data);
        isSubmitSuccessful(true);
    }

    const emailFromDB = 'admin@vueling.com';
    const passwordFromDB = '12345';

    return (
        <div class="my-wrapper">
            <div className="container">
                <div class="form-container">
                    <form action="#" onSubmit={handleSubmit(onSubmitLogin)} noValidate>
                        <h1>Admin User Login</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            name="loginPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            ref={register({
                                validate: (value) => {
                                    if (value === passwordFromDB) {
                                        return true;
                                    } else {
                                        return 'Password not registered';
                                    }
                                },
                            })}
                        />
                        {/* <Button
                            content={'TEST SIGN IN'}
                            color={'blue__outline'}
                            action={contactUs}
                        /> */}

                        <button disabled={!validateLoginForm()}>Submit</button>

                        {!checkIfEmptyObject(errors) && (
                            <div class="__message__box __error">
                                {errors.email && <p className="error">{errors.email.message}</p>}
                                {errors.loginPassword && (
                                    <p className="error">{errors.loginPassword.message}</p>
                                )}
                            </div>
                        )}
                        {submitSuccessful && (
                            <div class="__message__box __success">
                                <p>You have been successfully logged in!</p>
                            </div>
                        )}

                        <span>
                            In order to obtain your login credentials, please email us at
                            support@skyreader.com
                        </span>

                        {/* <button onClick={contactUs} class="ghost__outline">
                            Contact Us
                        </button> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminUserLogin;
