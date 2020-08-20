import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { LOGIN, REGISTER, USER_INFO, HOME } from '../../routes/routes';

const Navbar = () => {
    return (
        <div className={styles._container}>
            <Link to={HOME}><img src ={logo} alt ="logo" className={styles._logo}/></Link>
            <Link to={LOGIN}><button className= 'button button-primary'>Login</button></Link>
            <Link to={REGISTER}><button className= 'button button-primary'>Register</button></Link>
            <Link to={USER_INFO}><FontAwesomeIcon icon={faUserCircle} size="3x" /></Link>
        </div>
    );
};

export default Navbar;