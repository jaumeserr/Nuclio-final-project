import React, {useState, useEffect} from 'react';
import styles from './priceRange.module.css';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import { useLocation } from 'react-router-dom';

const PriceRange = ({startPrice, setStartPrice, endPrice, setEndPrice}) => {
    
    const [searchParams, setSearchParams] = useState();
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        const currentPath = location.pathname;
        const searchParams = new URLSearchParams(location.search);
        const startPriceQuery = searchParams.get('startPrice');
        if (startPriceQuery) {
            setStartPrice(startPriceQuery);
        }
        setSearchParams(searchParams);
    }, [location]);

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