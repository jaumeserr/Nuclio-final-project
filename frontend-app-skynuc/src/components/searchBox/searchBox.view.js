import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { InfoFlightsContext } from 'contexts/infoFlights.context';
import useFetch from 'hooks/useFetch';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './searchBox.module.css';

const SearchBox = () => {
    const [dates, setDates] = useState('');

    const { state, dispatch } = React.useContext(InfoFlightsContext);

    const history = useHistory();

    const { data, isLoading, hasEverLoadedData } = useFetch('airports', 'GET');

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
                            dispatch({
                                type: 'DEPARTURE_IATA',
                                data: { iata: parsedValue[0], cityName: parsedValue[1] },
                            });
                        }}
                        disabled={!hasEverLoadedData && isLoading}
                    >
                        <option value="">
                            {!hasEverLoadedData && isLoading ? 'Loading...' : 'From'}
                        </option>
                        {data &&
                            data.map((airport) => {
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
                            dispatch({
                                type: 'ARRIVAL_IATA',
                                data: { iata: parsedValue[0], cityName: parsedValue[1] },
                            });
                        }}
                        disabled={!hasEverLoadedData && isLoading}
                    >
                        <option value="">
                            {!hasEverLoadedData && isLoading ? 'Loading...' : 'To'}
                        </option>
                        {data &&
                            data.map((airport) => {
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
                            dispatch({
                                type: 'DEPARTURE_DATE',
                                dptTime: datestring.replace(/-/g, ''),
                            });
                        }}
                        placeholder={'Departure Date'}
                        style={{
                            borderRadius: 4,
                            width: 174,
                            height: 40,
                            fontSize: 15,
                            color: 'red',
                        }}
                    />
                    <button
                        className={styles.__button}
                        onClick={() =>
                            history.push(
                                `/flights/${state.dptAirportIata}/${state.arrAirportIata}/${state.dptDatetime}`,
                            )
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
