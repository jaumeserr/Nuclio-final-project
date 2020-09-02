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

    // console.log (infoFlights);

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
                                    key={data.dpt_datetime}
                                    // FIXME: which key?
                                    // dpt_datetime={data.dpt_datetime}
                                    arr_datetime={data.arr_datetime}
                                    // price_eur={data.price_eur}
                                    // price_eur={data.flight_const.airline.two_letter_code}
                                    price_eur={data.dpt_datetime}

                                    // {data.flight_const.map(innerdata => {
                                    //     <FlightCard
                                    //         dpt_airport_iata={innerdata.dpt_airport_iata}
                                    //         arr_airport_iata={innerdata.arr_airport_iata}
                                    //     />
                                    // )};

                                    // Aún un paso más adentro:
                                    // logo_url={data.logo_url}
                                />
                            );
                        })}
                </Masonry>
            </div>
        </>
    );
};

export default FlightListPage;
