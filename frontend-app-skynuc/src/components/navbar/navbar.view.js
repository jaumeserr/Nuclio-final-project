import Button from 'components/button/button.view';
import React from 'react';
import { Link } from 'react-router-dom';
import logoSkyreader from 'assets/images/logo_skyreader.svg';
import {
    ADMIN_USER_PROFILE,
    FLIGHT_LIST,
    HOME,
    LOGIN_AND_REGISTER,
    USER_PROFILE,
} from 'routes/routes';
import styles from './navbar.module.css';

const Navbar = () => {
    //
    // // DO NOT DELETE!
    // // TO BE USED IN A NEAR FUTURE, once we implement authentication:
    //
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    //
    // const toggleLoggedIn = () => {
    //     setIsLoggedIn(!isLoggedIn);
    // };

    const isLoggedIn = false;

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
            <div className={styles.__links__container}>
                {!isLoggedIn && (
                    <>
                        <Link to={LOGIN_AND_REGISTER}>
                            <Button content={'Login / Register'} color={'blue__outline'} />
                        </Link>
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <Link to={HOME}>
                            <Button content={'Logout'} color={'blue__outline'} disabled={true} />
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
