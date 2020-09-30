import React from 'react';
import styles from './departureRange.module.css';
import { Slider } from 'antd';
import 'antd/dist/antd.css';

const DepartureRange = () => {
    return (
        <div className={styles.__container}>
            <p className={styles.__title}>Depature times</p>
            <p className={styles.__subtitle}>Outbound</p>
            <p className={styles.__hours}>10:00AM-12:00AM</p>
            <Slider range defaultValue={[20, 50]} />
        </div>
    )
};

export default DepartureRange;