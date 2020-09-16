import React, { useState } from 'react';
import './loginAndRegister.css';

const Login = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const toggleForm = () => {
        setIsRegistered(!isRegistered);
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const submitLoginData = () => {
        console.log('You have successfully logged in!');
    };

    const submitRegistrationData = () => {
        console.log('You have successfully registered!');
    };

    return (
        <div class="my-wrapper">
            <div
                id="container"
                className={`container ${isRegistered ? '' : 'right-panel-active'} `}
            >
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>SIGN UP (Reg)</h1>
                        {/* <h1>Create Account</h1> */}

                        <input
                            type="text"
                            placeholder="Name"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={submitRegistrationData} disabled={!validateForm()}>
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

                        <button onClick={submitLoginData} disabled={!validateForm()}>
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

export default Login;

// SOURCE: Sliding Sign In & Sign Up Form
// https://www.youtube.com/watch?v=mUdo6w87rh4
