import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles._container}>
            <h1>Skyscanner</h1>
            <Link to="/login"><button className= 'button button-primary'>Login</button></Link>
            <Link to="/register"><button className= 'button button-primary'>Register</button></Link>
            <FontAwesomeIcon icon={faUserCircle} size="3x" />
        </div>
    );
};

export default Navbar;
