import React from 'react';
import Navbar from '../navbar/navbar.view';
import styles from './register.module.css';

const Register = () => {
    return (
        <div className={styles.__wrapper}>
            <Navbar />
            <div>
            <h1 style={{marginTop: 200, textAlign: "center"}}>Register</h1>
            </div>
        </div>
    );
};

export default Register;
