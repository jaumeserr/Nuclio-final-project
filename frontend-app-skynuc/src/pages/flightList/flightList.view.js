import axios from 'axios';
import NoResults from 'components/noResults/noResults.view';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FlightCard from 'components/flightcard/flightCard.view';
import Loader from 'components/loader/loader.view';
import styles from './flightList.module.css';
import SearchBar from "components/searchBar/searchBar.view";
import useFetch from 'hooks/useFetch';

const FlightList = () => {

    // const [infoFlights, setInfoFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { dpt, arr, date } = useParams();

    const { data: infoFlights } = useFetch(`search/${dpt}/${arr}/${date}`, 'GET');

    // useEffect(() => {
    //     const baseUrl = process.env.REACT_APP_API_URL;

    //     axios
    //         .get(`${baseUrl}/search/${dpt}/${arr}/${date}`)

    //         .then((res) => {
    //             console.log('Retrieve flights from DB');
    //             console.log(res.flight);
    //             setInfoFlights(res.flight);
    //             setIsLoading(false);
    //         })
    //         .catch((err) => console.log(err));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={styles.__container}>
            <div className={styles.__aside}>LEFT</div>
            <div className={styles.__center}>
                <SearchBar />
                <p className={styles.__foundText}>
                    We have found {infoFlights.length} flights for you
                </p>
                {isLoading && <Loader />}
                {!isLoading && infoFlights.length === 0 && <NoResults />}
                {!isLoading &&
                    infoFlights.length !== 0 &&
                    infoFlights.map((flight) => {
                        return (
                            <FlightCard
                                key={flight.id}
                                dpt_datetime={flight.dpt_datetime}
                                arr_datetime={flight.arr_datetime}
                                price_eur={parseFloat(flight.price_eur)}
                                dpt_airport_iata={flight.flight_const.dpt_airport_iata}
                                arr_airport_iata={flight.flight_const.arr_airport_iata}
                                logo_url={flight.flight_const.airline.logo_url}
                                airline_two_letter_code={
                                    flight.flight_const.airline_two_letter_code
                                }
                            />
                        )
                    })
                }
            </div>
            <div className={styles.__aside}>RIGHT</div>
        </div>
    );
};

export default FlightList;

