import noResultsMonkey from 'assets/images/noresults_monkey.svg';
import React from 'react';
import styles from './noResults.module.css';

const NoResults = () => {
    return (
        <div className={styles.__container}>
            <img src={noResultsMonkey} alt="Logo Skyreader" />
            <h1>Whoops! We didn’t find any flight for your search</h1>
            <p>You can try with different filters or with a different search</p>
        </div>
    );
};

export default NoResults;
