import React from 'react';
import { Spinner } from 'react-awesome-spinners';
import styles from './loader.module.css';

function Loader() {
    return (
        <div className={styles.__loader}>
            <Spinner color="#3182ce" />
        </div>
    );
}

export default Loader;
