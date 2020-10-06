import FlightCard from 'components/flightcard/flightCard.view';
import Loader from 'components/loader/loader.view';
import NoResults from 'components/noResults/noResults.view';
import SearchBar from 'components/searchBar/searchBar.view';
import useFetch from 'hooks/useFetch';
import React from 'react';
import { useParams } from 'react-router';
import styles from './flightList.module.css';

const FlightList = () => {
    const { dpt, arr, date } = useParams();

    const { data, isLoading, hasEverLoadedData } = useFetch(`search/${dpt}/${arr}/${date}`, 'GET');

    return (
        <div className={styles.__container}>
            <div className={styles.__aside}>LEFT</div>
            <div className={styles.__center}>
                <SearchBar />
                <p className={styles.__foundText}>We have found {data.length} flights for you</p>
                {isLoading && !hasEverLoadedData && <Loader />}
                {!isLoading && hasEverLoadedData && data.length === 0 && <NoResults />}
                {!isLoading &&
                    data.length !== 0 &&
                    data.map((flight) => {
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
                        );
                    })}
            </div>
            <div className={styles.__aside}>RIGHT</div>
        </div>
    );
};

export default FlightList;
