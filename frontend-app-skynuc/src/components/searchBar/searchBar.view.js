import { InfoFlightsContext } from 'contexts/infoFlights.context';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styles from './searchBar.module.css';

const SearchBar = () => {
    const { dpt, arr, date } = useParams();
    const { state, dispatch } = React.useContext(InfoFlightsContext);
    // const { state, dispatch, cities } = React.useContext(InfoFlightsContext);
    //console.log('cities: ',cities);

    /*useEffect(() => {if(cities.length > 0) {
        const cityDpt = cities.find(cityObject => cityObject.iata === dpt);
        //console.log('cityName: ', cityDpt.city_name);
    }}, [cities])*/

    useEffect(() => {
        if (state.arrAirportCityName === undefined) {
            dispatch({
                type: 'DEPARTURE_IATA',
                data: { iata: dpt, cityName: 'Departure' },
            });
            dispatch({
                type: 'ARRIVAL_IATA',
                data: { iata: arr, cityName: 'Arrival' },
            });
            dispatch({
                type: 'DEPARTURE_DATE',
                dptTime: date,
            });
        }
    }, []);
    // }, [arr, date, dispatch, dpt, state.arrAirportCityName]);

    return (
        <div className={styles.__container}>
            <div className={styles.__img}></div>
            <div className={styles.__routeBlock}>
                <span>
                    {state.dptAirportCityName} ({state.dptAirportIata})
                </span>
                <div className={styles.__separator}></div>
                <span>
                    {state.arrAirportCityName} ({state.arrAirportIata})
                </span>
            </div>
            <div className={styles.__spaceGrow}></div>
            <div>{moment(state.dptDatetime).format('ddd, Do MMMM')}</div>
        </div>
    );
};

export default SearchBar;
