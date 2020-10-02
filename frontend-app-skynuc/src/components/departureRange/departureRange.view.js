import React, {useState} from 'react';
import styles from './departureRange.module.css';
import { Slider } from 'antd';
import 'antd/dist/antd.css';

const DepartureRange = () => {

    const [startTime, setStartTime] = useState('7');
    const [endTime, setEndTime] = useState('18');

    const onChange = (value) => {
        setStartTime(value[0]);
        setEndTime(value[1]);
    }

    return (
        <div className={styles.__container}>
            <p className={styles.__title}>Depature times</p>
            <p className={styles.__subtitle}>Outbound</p>
            <p className={styles.__hours}>{`${startTime}:00`} - {`${endTime}:00`}</p>
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
    )
};

export default DepartureRange;