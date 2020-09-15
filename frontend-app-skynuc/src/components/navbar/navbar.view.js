import Button from 'components/button/button.view';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSkyreader from '../../assets/images/logo_skyreader.svg';
import {
    ADMIN_USER_PROFILE,
    FLIGHT_LIST,
    HOME,
    LOGIN,
    REGISTER,
    USER_PROFILE,
} from '../../routes/routes';
import styles from './navbar.module.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // // DO NOT DELETE!
    // // TO BE USED IN A NEAR FUTURE, once we implement authentication:
    //
    // const toggleLoggedIn = () => {
    //     setIsLoggedIn(!isLoggedIn);
    // };

    return (
        <div className={styles.__container}>
            <Link to={HOME}>
                <img src={logoSkyreader} alt="Logo Skyreader" />
            </Link>
            <Link to={FLIGHT_LIST}>
                <Button content={'FLIGHT LIST'} color={'blue__solid'} />
            </Link>
            <Link to={ADMIN_USER_PROFILE}>
                <Button content={'ADMIN USER PROFILE'} color={'blue__solid'} />
            </Link>
            <div className={styles.__navlinks}>
                {!isLoggedIn && (
                    <>
                        <Link to={LOGIN}>
                            <Button content={'Login'} color={'blue__outline'} disabled={true} />
                        </Link>
                        <Link to={REGISTER}>
                            <Button content={'Register'} color={'blue__outline'} />
                        </Link>
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <Link to={HOME}>
                            <Button content={'Logout'} color={'blue__outline'} />
                        </Link>
                        <Link to={USER_PROFILE}>
                            <Button content={'Profile'} color={'blue__outline'} />
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
