import React, { useState } from 'react';
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

    function validateLoginForm() {
        return email.length > 0 && password.length > 0;
    }

    function validateRegistrationForm() {
        return name.length > 0 && email.length > 0 && password.length > 0;
    }

    const submitLoginData = () => {
        console.log('Login data sent to DB - needs to be validated first!!!');
    };

    const submitRegistrationData = () => {
        console.log('Registration data sent to DB - needs to be validated first!!!');
    };

    return (
        <div class="my-wrapper">
            <div
                id="container"
                className={`container ${isRegistered ? '' : 'right-panel-active'} `}
            >
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Sign Up (Reg)</h1>
                        {/* <h1>Create Account</h1> */}

                        <input
                            type="text"
                            placeholder="Name"
                            // name="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus={true}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            // name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            // name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            onClick={submitRegistrationData}
                            disabled={!validateRegistrationForm()}
                        >
                            Submit
                        </button>

                        <span>Already registered?</span>

                        <button onClick={toggleForm} id="signUp" class="ghost__outline">
                            Log In
                        </button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
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

                        <button onClick={submitLoginData} disabled={!validateLoginForm()}>
                            Submit
                        </button>

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
