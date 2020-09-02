import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import FlightCard from '../../components/flightcard/flightCard.view';
import Loader from '../../components/loader/loader.view';
import Navbar from '../../components/navbar/navbar.view';
import styles from './flightlistpage.module.css';

const baseUrl = 'http://localhost/api';

const FlightListPage = () => {
    const [infoFlights, setInfoFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `${baseUrl}/flight_instances/flightcarddata`;

        const options = {
            method: 'GET',
            headers: new Headers(),
        };

        fetch(url, options)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then((payload) => {
                console.log(payload);
                console.log('Data from DB loaded');
                setInfoFlights(payload);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    const breakpointColumnsObj = {
        default: 1,
        1200: 1,
        1000: 1,
        800: 1,
        600: 1,
    };

    return (
        <>
            <div className={styles.__wrapper}>
                <Navbar />

                {isLoading && <Loader />}

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={styles.__masonry__grid}
                    columnClassName={styles.__masonry__grid__column}
                >
                    {infoFlights &&
                        infoFlights.map((data) => {
                            return (
                                <FlightCard
                                    key={data.id}
                                    // FIXME: JAUME? - moment.js para dpt_datetime y arr_datetime?
                                    dpt_datetime={data.dpt_datetime}
                                    arr_datetime={data.arr_datetime}
                                    price_eur={parseFloat(data.price_eur)}
                                    dpt_airport_iata={data.flight_const.dpt_airport_iata}
                                    arr_airport_iata={data.flight_const.arr_airport_iata}
                                    logo_url={data.flight_const.airline.logo_url}

                                    airline_two_letter_code={data.flight_const.airline_two_letter_code}
                                />
                            );
                        })}
                </Masonry>
            </div>
        </>
    );
};

export default FlightListPage;
