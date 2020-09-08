import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/skyreader_logo.png';
import { HOME, LOGIN, REGISTER } from '../../routes/routes';
import styles from './navbar.module.css';

const Navbar = () => {
    const [isDisabled, setIsDisabled] = useState(true);

    const toggleAbility = () => {
        setIsDisabled(!isDisabled);
    };

    return (
        <div className={styles.__container}>
            <Link to={HOME}>
                <div className={styles.__logo}>
                    <img src={logo} alt="logo" />
                    <p>skyreader</p>
                </div>
            </Link>
            <div className={styles.__navlinks}>
                <Link to={LOGIN}>
                    <button
                        // disabled
                        type="button" disabled className="button"
                        // className={`button ${isDisabled ? 'inactive' : 'button--blue-outline'}`}
                    >
                        Login
                    </button>
                </Link>
                <Link to={REGISTER}>
                    <button className="button button--blue-outline">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
