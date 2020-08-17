import React from 'react';
import styles from './header.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.__navigation}>
            <div>
                <img src ={logo} alt ="logo" className={styles.__logo}/>
            </div>
        </header>
    );
}

export default Header;