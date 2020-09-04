import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { HOME, LOGIN, REGISTER, USER_PROFILE } from '../../routes/routes';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <>
        <div className={styles.__container}>
            <Link to={HOME}>
                <img src={logo} alt="logo" className={styles.__logo} />
            </Link>
            
            <div className={styles.__navlinks}>
                <Link to={LOGIN}>
                    <button className="button button--blue">Login</button>
                </Link>
                <Link to={REGISTER}>
                    <button className="button button--blue">Register</button>
                </Link>
                
            </div>
        </div>
        </>
    );
};

export default Navbar;
