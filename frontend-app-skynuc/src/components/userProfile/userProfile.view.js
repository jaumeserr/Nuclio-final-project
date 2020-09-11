import React from 'react';
import Navbar from '../navbar/navbar.view';
import styles from './userProfile.module.css';

const UserProfile = () => {
    return (
        <div className={styles.__wrapper}>
            <Navbar />
            <div>
                <h1 style={{ marginTop: 200, textAlign: 'center' }}>Profile</h1>
            </div>
        </div>
    );
};

export default UserProfile;
