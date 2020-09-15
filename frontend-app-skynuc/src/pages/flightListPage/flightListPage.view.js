import axios from 'axios';
import Navbar from 'components/navbar/navbar.view';
import FilterAirlines from 'components/filterAirlines/filterAirlines.view';
import React, { useEffect, useState } from 'react';
import FlightCard from '../../components/flightcard/flightCard.view';
import Loader from '../../components/loader/loader.view';
import styles from './flightListPage.module.css';

const FlightListPage = () => {
    const [infoFlights, setInfoFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://localhost/api/flight_instances/flightcarddata')
            .then((res) => {
                console.log('Retrieve flights from DB');
                console.log(res.data);
                setInfoFlights(res.data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Navbar />


            <div className={styles.__container}>
            
                <div className={styles.__aside}>LEFT</div>
                <FilterAirlines/>
                <div className={styles.__center}>
                    SEARCHBAR
                    <p className={styles.__foundText}>
                        We have found {infoFlights.length} flights for you
                    </p>
                    {isLoading && <Loader />}
                    {infoFlights &&
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
                            );
                        })}
                </div>
                <div className={styles.__aside}>RIGHT</div>
            </div>
        </>
    );
};

export default FlightListPage;
