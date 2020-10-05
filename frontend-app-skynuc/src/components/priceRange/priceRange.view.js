import React, {useState} from 'react';
import styles from './priceRange.module.css';
import { Slider } from 'antd';
import 'antd/dist/antd.css';

const PriceRange = () => {

    const [startPrice, setStartPrice] = useState('150');
    const [endPrice, setEndPrice] = useState('300');

    const onChange = (value) => {
        setStartPrice(value[0]);
        setEndPrice(value[1]);
    }

    return (
        <div className={styles.__container}>
            <p className={styles.__title}>Price</p>
            <p className={styles.__subtitle}>Range</p>
            <p className={styles.__hours}>{startPrice} - {endPrice}</p>
            <Slider
                range
                step={50}
                min={50}
                max={500}
                tipFormatter={null}
                onChange={onChange}
                defaultValue={[100, 300]}
            />
        </div>
    )
};

export default PriceRange;