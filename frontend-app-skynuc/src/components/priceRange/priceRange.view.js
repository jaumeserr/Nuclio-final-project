import React, {useState, useEffect} from 'react';
import styles from './priceRange.module.css';
import { Slider } from 'antd';
import 'antd/dist/antd.css';

const PriceRange = ({startPrice, setStartPrice, endPrice, setEndPrice}) => {
    
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
                max={2000}
                tipFormatter={null}
                onChange={onChange}
                defaultValue={[100, 300]}
            />
        </div>
    )
};

export default PriceRange;