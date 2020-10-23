import { InfoFlightsContext } from 'contexts/infoFlights.context';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styles from './searchBar.module.css';

const SearchBar = () => {
    const { dpt, arr, date } = useParams();
    const { state, dispatch, cities } = React.useContext(InfoFlightsContext);
    // const { state, dispatch, cities } = React.useContext(InfoFlightsContext);
    //console.log('cities: ',cities);
    console.log(state);
    console.log(cities);

    //const cityDpt = cities.find(cityObject => cityObject.iata === dpt);
    //console.log('cityDPT: ', cityDpt.city_name);



    useEffect(() => {if(cities.length > 0) {
        const cityDpt = cities.find(cityObject => cityObject.iata === dpt);
        const cityArr = cities.find(cityObject => cityObject.iata === arr);

        if (state.arrAirportCityName === undefined) {
            dispatch({
                type: 'DEPARTURE_IATA',
                data: { iata: dpt, cityName: cityDpt.city_name },
            });
            dispatch({
                type: 'ARRIVAL_IATA',
                data: { iata: arr, cityName: cityArr.city_name },
            });
            dispatch({
                type: 'DEPARTURE_DATE',
                dptTime: date,
            });
        }
    }}, [cities, arr, date, dispatch, dpt, state.arrAirportCityName])

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
