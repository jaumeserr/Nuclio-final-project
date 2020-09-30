import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import styles from './searchBox.module.css';
import 'antd/dist/antd.css';
import { useHistory } from "react-router";
import { InfoFlightsContext } from 'contexts/infoFlights.context';

const SearchBox = () => {
    const [airports, setAirports] = useState('');
    const [dates, setDates] = useState('');

    const { state, dispatch } = React.useContext(InfoFlightsContext);

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

    return (
        <div className={styles.__container}>
            <div>
                <div className={styles.__label}>Where</div>
                <div className={styles.__inputBoxGroup}>
                    <select
                        className={styles.__select}
                        value={`${state.dptAirportIata}#${state.dptAirportCityName}`}
                        onChange={(e) => {
                            const parsedValue = e.target.value.split('#');
                            dispatch({type: 'DEPARTURE_IATA', data: {iata: parsedValue[0], cityName:parsedValue[1]}});
                        }}
                    >
                        <option value="">From</option>
                        {airports &&
                            airports.map((airport) => {
                                const { city_name, iata } = airport;

                                return (
                                    <option key={iata} value={`${iata}#${city_name}`}>
                                        {city_name} ({iata})
                                    </option>
                                );
                            })}
                    </select>
                    <div className={styles.__separator}></div>
                    <select
                        className={styles.__select}
                        value={`${state.arrAirportIata}#${state.arrAirportCityName}`}
                        onChange={(e) => {
                            const parsedValue = e.target.value.split('#');
                            dispatch({type: 'ARRIVAL_IATA', data: {iata: parsedValue[0], cityName:parsedValue[1]}});
                        }}
                    >
                        <option value="">To</option>
                        {airports &&
                        airports.map((airport) => {
                            const { city_name, iata } = airport;

                            return (
                                <option key={iata} value={`${iata}#${city_name}`}>
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
                    <DatePicker
                        onChange={(date, datestring) => {
                            dispatch({type: 'DEPARTURE_DATE', dptTime: datestring.replace(/-/g, '')});
                        }}
                        placeholder={'Departure Date'}
                        style={{borderRadius: 4, width: 174, height: 40, fontSize: 15, color: 'red'}}
                    />
                    <button
                        className={styles.__button}
                        onClick={
                            () => history.push(`/flights/${state.dptAirportIata}/${state.arrAirportIata}/${state.dptDatetime}`)
                        }
                    >
                        See flights
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;