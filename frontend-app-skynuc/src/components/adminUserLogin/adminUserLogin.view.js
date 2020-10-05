import { message } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { HOME } from 'routes/routes';
import checkIfEmptyObject from 'utils/checkIfEmptyObject';
import styles from './adminUserLogin.module.css';
// import Button from 'components/button/button.view';

const AdminUserLogin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const watchShowEmail = watch('showEmail', false);
    const watchShowPassword = watch('showPassword', false);

    const history = useHistory();

    function onSubmitLogin(data) {
        console.log('Login data submitted: ', data);

        message.success({
            content: 'Successfully logged in!',
            duration: 3,
            className: styles.__success__box,
        });

        setTimeout(() => history.push(HOME), 3000);
    }

    const emailFromDB = 'admin@vueling.com';
    const passwordFromDB = 'vueling';

    // console.log(value);

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
                                    // FIXME: " 'Email not registered' when email value goes back to 0"
                                    if (value === emailFromDB && value.length !== 0) {
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
                        {/* FIXME: "Button component not working here" */}
                        {/* <Button
                            content={'Submit (component)'}
                            color={'blue__solid'}
                            disabled={!(!!watchShowEmail && !!watchShowPassword)}
                            action={onSubmitLogin}
                        /> */}
                        <button disabled={!(!!watchShowEmail && !!watchShowPassword)}>
                            Submit
                        </button>
                        {!checkIfEmptyObject(errors) && (
                            <div className={styles.__error__box}>
                                {errors.showEmail && <p>{errors.showEmail.message}</p>}
                                {errors.showPassword && <p>{errors.showPassword.message}</p>}
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
