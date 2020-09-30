import React from 'react';
import styles from './searchBar.module.css';
import moment from 'moment';
import { InfoFlightsContext } from 'contexts/infoFlights.context';

const SearchBar = () => {

    const { state } = React.useContext(InfoFlightsContext);

    return (
        <div className={styles.__container}>
            <div className={styles.__img}></div>
            <div className={styles.__routeBlock}>
                <span>{state.dptAirportCityName} ({state.dptAirportIata})</span>
                <div className={styles.__separator}></div>
                <span>{state.arrAirportCityName} ({state.arrAirportIata})</span>
            </div>
            <div className={styles.__spaceGrow}></div>
            <div>{moment(state.dptDatetime).format('ddd, Do MMMM')}</div>
        </div>
    );
}

export default SearchBar;