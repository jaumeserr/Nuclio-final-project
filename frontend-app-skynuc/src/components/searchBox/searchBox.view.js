import React, { useEffect, useState } from 'react';
import styles from './searchBox.module.css';

const SearchBox = () => {
    const [origins, setOrigins] = useState('');
    const [originIata, setOriginIata] = useState('');
    const [destinations, setDestinations] = useState('');
    const [destinationIata, setDestinationIata] = useState('');
    const [dates, setDates] = useState('');
    const [selectDate, setSelectDate] = useState('');

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
                setOrigins(payload);
                setDestinations(payload);
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
                <div className={styles.__label}>
                    Where
                </div>
                <div className={styles.__inputBoxGroup}>
                    <select
                        className={styles.__select}
                        value={originIata}
                        onChange={(e) => {
                            setOriginIata(e.target.value);
                        }}
                    >
                        <option value="">From</option>
                        {origins &&
                        origins.map((origin) => {
                            const { city_name, iata } = origin;

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
                        value={destinationIata}
                        onChange={(e) => {
                            setDestinationIata(e.target.value);
                        }}
                    >
                        <option value="">To</option>
                        {destinations &&
                        destinations.map((destination) => {
                            const { city_name, iata } = destination;

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
                <div className={styles.__label}>
                    When
                </div>
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
                    <button className={styles.__button} onClick={() => alert('Clicked')}>See flights</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
