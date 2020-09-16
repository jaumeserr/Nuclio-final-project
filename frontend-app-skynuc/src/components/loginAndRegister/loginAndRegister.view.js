import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
    const [confirmPassword, setConfirmPassword] = useState('');

    function validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input['name']) {
            isValid = false;
            errors['name'] = 'Please enter your name.';
        }

        if (!input['email']) {
            isValid = false;
            errors['email'] = 'Please enter your email Address.';
        }

        if (typeof input['email'] !== 'undefined') {
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
            );
            if (!pattern.test(input['email'])) {
                isValid = false;
                errors['email'] = 'Please enter a valid email address.';
            }
        }

        if (!input['password']) {
            isValid = false;
            errors['password'] = 'Please enter your password.';
        }

        if (!input['confirm_password']) {
            isValid = false;
            errors['confirm_password'] = 'Please enter your confirm password.';
        }

        if (
            typeof input['password'] !== 'undefined' &&
            typeof input['confirm_password'] !== 'undefined'
        ) {
            if (input['password'] !== input['confirm_password']) {
                isValid = false;
                errors['password'] = "Passwords don't match.";
            }
        }

        this.setState({
            errors: errors,
        });

        return isValid;
    }

    const { register, watch, errors, handleSubmit } = useForm(); // initialize the hook

    function validateLoginForm() {
        return email.length > 0 && password.length > 0;
    }

    const submitLoginData = () => {
        console.log('You have successfully logged in!');
    };

    const submitRegistrationData = () => {
        console.log('You have successfully registered!');
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    let passVal = watch('password');

    return (
        <div class="my-wrapper">
            <div
                id="container"
                className={`container ${isRegistered ? '' : 'right-panel-active'} `}
            >
                <div class="form-container sign-up-container">
                    <form action="#" onSubmit={handleSubmit(onSubmit)}>
                        <h1>SIGN UP (Reg)</h1>
                        {/* <h1>Create Account</h1> */}

                        <input
                            type="text"
                            placeholder="Name"
                            // required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus={true}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            name="confirm_password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            // ref={register({
                            //     validate: (value) => {
                            //         return value === watch('password1');
                            //     },
                            // })}
                            ref={register({
                                validate: (value) => {
                                    return value === passVal || "Passwords don't match.";
                                },
                            })}
                        />
                        {/* <div style={{ color: 'red' }}>
                            {errors.confirm_password && "Passwords don't match. Please try again"}
                        </div> */}

                        <button
                            // onClick={submitRegistrationData}
                            disabled={!validateLoginForm()}
                        >
                            Sign Up active
                        </button>

                        <span>Already registered?</span>

                        <button onClick={toggleForm} id="signUp" class="ghostblackinner">
                            Sign Up Switch INNER
                        </button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>

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

                        <button onClick={submitLoginData} disabled={!validateLoginForm()}>
                            Sign In Active
                        </button>

                        <span>Need to register?</span>

                        <button onClick={toggleForm} id="signIn" class="ghostblackinner">
                            Sign In Switch INNER
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
                                Sign In Switch
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
                                Sign Up Switch
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
