import React, {useEffect, useState} from 'react';
import styles from './searchBar.module.css';
import moment from 'moment';
import { InfoFlightsContext } from 'contexts/infoFlights.context';
import {useParams} from "react-router";

const SearchBar = () => {

    const { dpt, arr, date } = useParams();

    const { state, dispatch } = React.useContext(InfoFlightsContext);
    console.log(state);

    useEffect(()=> {
        if(state.arrAirportCityName === undefined) {
            dispatch({
                type: 'DEPARTURE_IATA',
                data: { iata: dpt, cityName: 'fsd' },
            });
            dispatch({
                type: 'ARRIVAL_IATA',
                data: { iata: arr, cityName: 'asd' },
            });
            dispatch({
                type: 'DEPARTURE_DATE',
                dptTime: date,
            });
        }
    },[])

    /*const cityDpt = cities.find(cityObject => cityObject.iata === dpt);
    console.log('Find: ',cityDpt.city_name);*/

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