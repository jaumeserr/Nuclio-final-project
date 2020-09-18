import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import checkIfEmptyObject from 'utils/checkIfEmptyObject';
import './loginAndRegister.css';

// import styles from './loginAndRegister.module.css';

// className={styles.__container}

const LoginAndRegister = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const toggleForm = () => {
        setIsRegistered(!isRegistered);
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitSuccessful, isSubmitSuccessful] = useState(false);

    function validateForm() {
        const basicValidation = email.length > 0 && password.length > 0;
        return !basicValidation ? false : isRegistered ? true : basicValidation && name.length > 0;
    }

    const { register, handleSubmit, getValues, errors } = useForm();

    function onSubmit(data) {
        console.log('Data submitted: ', data);
        isSubmitSuccessful(true);
    }

    console.log(errors);

    return (
        <div class="my-wrapper">
            <div
                id="container"
                className={`container ${isRegistered ? '' : 'right-panel-active'} `}
            >
                <div class="form-container sign-up-container">
                    <form action="#" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <h1>Sign Up (Reg)</h1>

                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus={true}
                            ref={register}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            ref={register({
                                required: 'Enter your e-mail',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Enter a valid e-mail address',
                                },
                            })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            ref={register}
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            name="confirm_password"
                            ref={register({
                                required: 'Please confirm your password',
                                validate: (value) => {
                                    if (value === getValues()['password']) {
                                        return true;
                                    } else {
                                        return 'Passwords do not match';
                                    }
                                },
                            })}
                        />

                        <button disabled={!validateForm()}>Submit</button>

                        {!checkIfEmptyObject(errors) && (
                            <div class="__error__message__box">
                                {errors.email && <p className="error">{errors.email.message}</p>}
                                {errors.confirm_password && (
                                    <p className="error">{errors.confirm_password.message}</p>
                                )}
                            </div>
                        )}
                        {submitSuccessful && (
                            <div class="__success__message__box">
                                <p>You have been successfully registered!</p>
                            </div>
                        )}

                        <span>Already registered?</span>

                        <button onClick={toggleForm} id="signUp" class="ghost__outline">
                            Log In
                        </button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <h1>Log in</h1>

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus={true}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <Button
                            content={'TEST SIGN IN'}
                            color={'blue__outline'}
                            action={toggleForm}
                        /> */}

                        <button disabled={!validateForm()}>Submit</button>

                        <span>Need to register?</span>

                        <button onClick={toggleForm} id="signIn" class="ghost__outline">
                            Sign Up
                        </button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Already registered?</h1>
                            <p>
                                If it is not your first time here, please log in by clicking the
                                button below
                            </p>
                            <button class="ghost" id="signIn" onClick={toggleForm}>
                                Log In
                            </button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Need to register?</h1>
                            <p>
                                If it is your first time here, please register by clicking the
                                button below
                            </p>

                            {/* <Button
                                content={'TEST SIGN UP'}
                                color={'blue__outline'}
                                action={toggleForm}
                            /> */}

                            <button onClick={toggleForm} id="signUp" class="ghost">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAndRegister;

// SOURCE: Sliding Sign In & Sign Up Form
// https://www.youtube.com/watch?v=mUdo6w87rh4
