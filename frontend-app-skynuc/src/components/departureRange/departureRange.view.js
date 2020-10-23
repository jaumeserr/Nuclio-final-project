import { Slider } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import styles from './departureRange.module.css';

const DepartureRange = ({ startTime, setStartTime, endTime, setEndTime }) => {
    const onChange = (value) => {
        setStartTime(value[0]);
        setEndTime(value[1]);
    };

    return (
        <div className={styles.__container}>
            <p className={styles.__title}>Departure time</p>
            <p className={styles.__subtitle}>Outbound</p>
            <p className={styles.__hours}>
                {`${startTime}:00`} - {`${endTime}:00`}
            </p>
            <Slider
                range
                step={1}
                min={1}
                max={24}
                tipFormatter={null}
                onChange={onChange}
                defaultValue={[7, 18]}
            />
        </div>
    );
};

export default DepartureRange;
