import React from 'react';
import styles from './loader.module.css';
import { Spinner } from 'react-awesome-spinners'

function Loader() {
    return (
        <div className={styles.__loader__container}>
            <div className={styles.__loader}>
                <Spinner color='#2B71E4' />
            </div>
        </div>
    );
}

export default Loader;









