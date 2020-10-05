import axios from 'axios';
import NoResults from 'components/noResults/noResults.view';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FlightCard from 'components/flightcard/flightCard.view';
import Loader from 'components/loader/loader.view';
import styles from './flightList.module.css';
import SearchBar from "components/searchBar/searchBar.view";
import CheckBoxFilter from 'components/checkBoxFilter/checkBoxFilter.view';

const FlightList = () => {

    const [infoFlights, setInfoFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { dpt, arr, date } = useParams();

    useEffect(() => {
        const baseUrl = process.env.REACT_APP_API_URL;

        axios
            .get(`${baseUrl}/search/${dpt}/${arr}/${date}`)

            .then((res) => {
                console.log('Retrieve flights from DB');
                console.log(res.data);
                setInfoFlights(res.data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={styles.__container}>
            <div className={styles.__aside}>LEFT
            <CheckBoxFilter/>
            </div>
            <div className={styles.__center}>
                <SearchBar />
                <p className={styles.__foundText}>
                    We have found {infoFlights.length} flights for you
                </p>
                {isLoading && <Loader />}
                {!isLoading && infoFlights.length === 0 && <NoResults />}
                {!isLoading &&
                    infoFlights.length !== 0 &&
                    infoFlights.map((data) => {
                        return (
                            <FlightCard
                                key={data.id}
                                dpt_datetime={data.dpt_datetime}
                                arr_datetime={data.arr_datetime}
                                price_eur={parseFloat(data.price_eur)}
                                dpt_airport_iata={data.flight_const.dpt_airport_iata}
                                arr_airport_iata={data.flight_const.arr_airport_iata}
                                logo_url={data.flight_const.airline.logo_url}
                                airline_two_letter_code={
                                    data.flight_const.airline_two_letter_code
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

