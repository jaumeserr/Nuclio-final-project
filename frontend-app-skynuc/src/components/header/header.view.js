import React from 'react';
import styles from './header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className={styles.__navigation}>
            <div>
                <img src ={logo} alt ="logo" className={styles.__logo}/>
            </div>
            <div className={styles.__container_butt}>
                <button className= 'button button-primary'>Login</button>
                <button className= 'button button-primary'>Register</button>
            </div>
        </header>
    );
}

export default Header;