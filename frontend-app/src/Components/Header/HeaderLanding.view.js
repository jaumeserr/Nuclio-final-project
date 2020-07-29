import React from 'react';
import styles from './HeaderLanding.module.css';
import logo from '../../assets/logo.png';


    const Header = () => {
        return (
            <header className={styles.__navigation}>
                <div>
                    <img src ={logo} alt ="logo" className={styles.__logo}/>
                </div>
                <div className={styles.__container_butt}>
                    <button className= {styles.__container__nav}>Login</button>
                    <button className= {styles.__container__nav}>Register</button>
                </div>
            </header>
        );

    }
    export default Header;