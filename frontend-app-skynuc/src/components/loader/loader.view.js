import React from 'react';
import { Spinner } from 'react-awesome-spinners';
import styles from './loader.module.css';

function Loader () {
    return (
        <div className={styles.__loader__container}>
            <div className={styles.__loader}>
                <Spinner color='#2B71E4' size={12} />
                {/* FIXME: Size does not work. Issue to corresponding github repo posted  */}
            </div>
        </div>
    );
}

export default Loader;









