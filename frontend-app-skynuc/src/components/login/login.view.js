import React from 'react';
import Navbar from '../navbar/navbar.view';
import styles from './login.module.css';

const Login = () => {
    return (
        <div className={styles.__wrapper}>
            <Navbar />
            <div>
            <h1 style={{marginTop: 200, textAlign: "center"}}>Login</h1>
            </div>
        </div>
    );
};

export default Login;
