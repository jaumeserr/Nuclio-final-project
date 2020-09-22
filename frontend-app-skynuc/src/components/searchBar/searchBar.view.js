import React from 'react';
import styles from './searchBar.module.css';
import moment from 'moment';

const SearchBar = ({dpt, arr, date}) => {
    return (
        <div className={styles.__container}>
            <div className={styles.__img}></div>
            <div className={styles.__routeBlock}>
                <span>Barcelona ({dpt})</span>
                <div className={styles.__separator}></div>
                <span>Alicante ({arr})</span>
            </div>
            <div className={styles.__spaceGrow}></div>
            <div>{moment(date).format('ddd, Do MMMM')}</div>
        </div>
    );
}

export default SearchBar;