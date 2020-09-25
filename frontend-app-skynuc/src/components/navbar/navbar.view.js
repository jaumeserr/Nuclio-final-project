import logoSkyreader from 'assets/images/logo_skyreader.svg';
import Button from 'components/button/button.view';
import React from 'react';
import { Link } from 'react-router-dom';
import { ADMIN_USER_LOGIN, ADMIN_USER_PROFILE, HOME } from '../../routes/routes';
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
            <Link to={ADMIN_USER_PROFILE}>
                <Button content={'ADMIN USER PROFILE'} color={'blue__solid'} />
            </Link>
            <div className={styles.__links__container}>
                {!isLoggedIn && (
                    <>
                        <Link to={ADMIN_USER_LOGIN}>
                            <Button content={'Admin User Login'} color={'blue__outline'} />
                        </Link>
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <Link to={HOME}>
                            <Button content={'Logout'} color={'blue__outline'} disabled={true} />
                        </Link>
                        <Link to={ADMIN_USER_PROFILE}>
                            <Button content={'Admin User Profile'} color={'blue__outline'} />
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
