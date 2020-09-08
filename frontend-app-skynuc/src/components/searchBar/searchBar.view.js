import React from 'react';
import styles from './searchBar.module.css';
import magnifiyer from '../../assets/images/searchBar/magnifiyer.png';

const SearchBar = () => {
    return (
        <div className={styles.__container}>
            <div className={styles.__img}></div>
            <div className={styles.__routeBlock}>
                <span>Barcelona (BCN)</span>
                <div className={styles.__separator}></div>
                <span>Alicante (ALC)</span>
            </div>
            <div className={styles.__spaceGrow}></div>
            <div>mon, 9 september</div>
        </div>
    );
}

export default SearchBar;