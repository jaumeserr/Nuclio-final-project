import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import FlightCard from '../../components/flightcard/flightCard.view';
import Navbar from '../../components/navbar/navbar.view';
import styles from './flightlistpage.module.css';

const FlightListPage = () => {

    const [pins, setPins] = useState([]);

    useEffect(() => {
        const url = 'http://localhost/api/cities';
        const options = {
            method: 'GET',
            headers: new Headers(),
        };

        fetch(url, options)
            .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                })
            .then(payload => {
                    console.log("Data from DB loaded");
                    setPins(payload);
                })
            .catch(error => console.log(error));
    }, []);

    const breakpointColumnsObj = {
        default: 1,
        1200: 1,
        1000: 1,
        800: 1,
        600: 1
    };

    return (
        <>
            <Navbar/>

            <div className={styles.__spinner}>
                <FontAwesomeIcon icon={faSpinner} size="2x" spin /> 
            </div>

            <Masonry
            breakpointCols={breakpointColumnsObj}
            className = {styles.__masonry__grid}
            columnClassName = {styles.__masonry__grid__column}
            >
                {pins && pins.map(pin => {
                    return (
                        <FlightCard
                            name={pin.name}
                            country_a3_iso_code={pin.country_a3_iso_code}
                            id={pin.id}
                        />
                    );
                })}
            </Masonry>
        </>
    );
};

export default FlightListPage;

// ASK - Spinner - Com fer que aparegui només quan no han arribat els pins? MAYBE un ternari ? o un useSate isLoading, setIsLoading


{/*
    import React from 'react';
import Navbar from './components/navbar/navbar.view';
import styles from './flightlistpage.module.css';

function FlightListPage() {
    return (
        <div>
            <Navbar/>
        </div>
    );
}

export default FlightListPage;
*/}

