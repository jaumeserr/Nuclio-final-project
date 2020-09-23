import React, { useEffect, useState } from 'react';
import styles from './searchBox.module.css';
import {useHistory} from "react-router";

const SearchBox = () => {
    const [airports, setAirports] = useState('');
    const [departureIata, setDepartureIata] = useState('');
    const [arrivalIata, setArrivalIata] = useState('');
    const [dates, setDates] = useState('');
    const [selectDate, setSelectDate] = useState('');

    const history = useHistory();

    useEffect(() => {
        const url = 'http://localhost/api/airports';
        const options = {
            method: 'GET',
            header: new Headers(),
            mode: 'cors',
        };

        fetch(url, options)
            .then((response) => {
                if (response.status >= 200 || response.status < 300) {
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then((payload) => {
                console.log(payload);
                setAirports(payload);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        const url = 'http://localhost/api/flight_instances';
        const options = {
            method: 'GET',
            header: new Headers(),
            mode: 'cors',
        };

        fetch(url, options)
            .then((response) => {
                if (response.status >= 200 || response.status < 300) {
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then((payload) => {
                console.log(payload);
                setDates(payload);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={styles.__container}>
            <div>
                <div className={styles.__label}>Where</div>
                <div className={styles.__inputBoxGroup}>
                    <select
                        className={styles.__select}
                        value={departureIata}
                        onChange={(e) => {
                            setDepartureIata(e.target.value);
                        }}
                    >
                        <option value="">From</option>
                        {airports &&
                            airports.map((airport) => {
                                const { city_name, iata } = airport;

                                return (
                                    <option key={iata} value={iata}>
                                        {city_name} ({iata})
                                    </option>
                                );
                            })}
                    </select>
                    <div className={styles.__separator}></div>
                    <select
                        className={styles.__select}
                        value={arrivalIata}
                        onChange={(e) => {
                            setArrivalIata(e.target.value);
                        }}
                    >
                        <option value="">To</option>
                        {airports &&
                        airports.map((airport) => {
                            const { city_name, iata } = airport;

                            return (
                                <option key={iata} value={iata}>
                                    {city_name} ({iata})
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div>
                <div className={styles.__label}>When</div>
                <div className={styles.__inputBoxGroup}>
                    <select
                        className={`${styles.__select} ${styles.__date}`}
                        value={selectDate}
                        onChange={(e) => {
                            setSelectDate(e.target.value);
                        }}
                    >
                        <option value="">Departure Date</option>
                        {dates &&
                            dates.map((date) => {
                                const { dpt_datetime, id } = date;

                                return (
                                    <option
                                        key={id}
                                        value={dpt_datetime.replace(/-/g, '').substring(0, 8)}
                                    >
                                        {dpt_datetime.replace(/-/g, '/').substring(0, 10)}
                                    </option>
                                );
                            })}
                    </select>
                    <button className={styles.__button} onClick={() => history.push(`/flights/${departureIata}/${arrivalIata}/${selectDate}`)}>
                        See flights
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
