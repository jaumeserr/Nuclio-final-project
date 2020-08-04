import React from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <div className={styles._container}>
            <h1>Skyscanner</h1>
            <FontAwesomeIcon icon={faUserCircle} size="3x" />
        </div>
    );
}

export default Navbar; 