import React, {useEffect, useState} from 'react';
import styles from './searchBox.module.css';
import axios from 'axios';

const SearchBox = () => {

    const [origins, setOrigins] =  useState('');
    const [originIata, setOriginIata] = useState('');
    const [destinations, setDestinations] =  useState('');
    const [destinationIata, setDestinationIata] = useState('');
    const [dates, setDates] = useState('')
    const [selectDate, setSelectDate] = useState('')
    const [numPassengers, setNumPassengers] = useState(0);
    const [airlines, setAirlines] = useState('');
    const [airlinesCode, setAirlinesCode] = useState('');

    useEffect(() => {
        axios.get('http://localhost/api/airports')
            .then(res => {
                setOrigins(res.data);
                setDestinations(res.data);
            })
            .catch(err => console.log(err));

        axios.get('http://localhost/api/flight_instances')
            .then(res => {
                setDates(res.data);
            })
            .catch(err => console.log(err));

        axios.get('http://localhost/api/airlines')
            .then(res => {
                setAirlines(res.data);
            })
            .catch(err => console.log(err));
    }, []);


        /*const url = 'http://localhost/api/airports';
        const options = {
            method: 'GET',
            header: new Headers(),
            mode: 'cors',
        };

        fetch(url, options)
            .then(response => {
                if (response.status >= 200 || response.status < 300) {
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                console.log(payload);
                setOrigins(payload);
                setDestinations(payload)
            })
            .catch(error => console.log(error));
    }, []);*/

    /*useEffect(() => {
        const url = 'http://localhost/api/flight_instances';
        const options = {
            method: 'GET',
            header: new Headers(),
            mode: 'cors',
        };

        fetch(url, options)
            .then(response => {
                if (response.status >= 200 || response.status < 300) {
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                console.log(payload);
                setDates(payload);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        const url = 'http://localhost/api/airlines';
        const options = {
            method: 'GET',
            header: new Headers(),
            mode: 'cors',
        };

        fetch(url, options)
            .then(response => {
                if (response.status >= 200 || response.status < 300) {
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                console.log(payload);
                setAirlines(payload);
            })
            .catch(error => console.log(error));
    }, []);*/

    //Falla consistencia en las fechas, por ejemplo TAP 23.08.2020 que en el resto es 20200823
    const mySwitchAirline = (airlinesCode) => {
        switch(airlinesCode) {
            case 'KL':
                return `https://www.klm.es/search/offers?pax=${numPassengers}:0:0:0:0:0:0:0&cabinClass=ECONOMY&activeConnection=0&connections=${originIata}:A:${selectDate}%3E${destinationIata}:A&bookingFlow=LEISURE`;
            case 'AF':
                return `https://wwws.airfrance.es/search/offers?pax=${numPassengers}:0:0:0:0:0:0:0&cabinClass=ECONOMY&activeConnection=0&connections=${originIata}:A:${selectDate}%3E${destinationIata}:A&bookingFlow=LEISURE`;
            case 'IB':
                return `https://www.iberia.com/flights/?market=ES&language=es&appliesOMB=false&splitEndCity=false&initializedOMB=true&flexible=true&TRIP_TYPE=1&BEGIN_CITY_01=${originIata}&END_CITY_01=${destinationIata}&BEGIN_DAY_01=${selectDate.substring(6,8)}&BEGIN_MONTH_01=${selectDate.substring(0,6)}&BEGIN_YEAR_01=${selectDate.substring(0,4)}&END_DAY_01=&END_MONTH_01=&END_YEAR_01=&FARE_TYPE=R&quadrigam=IBHMPA&ADT=${numPassengers}&CHD=0&INF=0&BNN=0&YTH=0&YCD=0&residentCode=&familianumerosa=&BV_UseBVCookie=no&boton=Buscar&bookingMarket=ES#!/availability`;
        }
    }

    return (
        <div className={styles.__wrapper}>
            <h1 className={styles.__title}>Welcome to SkyScanner</h1>
            <div className={styles.__container}>
                <div className={styles.__inputBox}>
                    <label className={styles.__label}>Desde</label><br />
                    <select
                        className={`${styles.__select} ${styles.__origin}`}
                        value={originIata}
                        onChange={(e) => {setOriginIata(e.target.value)}}
                    >
                        <option value="">Seleccione Origen</option>
                        {origins && origins.map(origin => {
                            const {city_name, iata} = origin

                            return (
                                <option key={iata} value={iata}>{city_name} ({iata})</option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.__inputBox}>
                    <label className={styles.__label}>A</label><br />
                    <select
                        className={`${styles.__select} ${styles.__destination}`}
                        value={destinationIata}
                        onChange={(e) => {setDestinationIata(e.target.value)}}
                    >
                        <option value="">Seleccione Destino</option>
                        {destinations && destinations.map(destination => {
                            const {city_name, iata} = destination

                            return (
                                <option key={iata} value={iata}>{city_name} ({iata})</option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.__inputBox}>
                    <label className={styles.__label}>Compañía</label><br />
                    <select
                        className={`${styles.__select} ${styles.__airline}`}
                        value={airlinesCode}
                        onChange={(e) => {setAirlinesCode(e.target.value)}}
                    >
                        <option value="">Seleccione Compañía</option>
                        {airlines && airlines.map(airline => {
                            const {id, name, two_letter_code} = airline

                            return (
                                <option key={id} value={two_letter_code}>{name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.__inputBox}>
                    <label className={styles.__label}>Salida</label><br />
                    <select
                        className={`${styles.__select} ${styles.__date}`}
                        value={selectDate}
                        onChange={(e) => {setSelectDate(e.target.value)}}
                    >
                        <option value="">Seleccione Fechas</option>
                        {dates && dates.map(date => {
                            const {dpt_datetime, id} = date

                            return (
                                <option key={id} value={dpt_datetime.replace(/-/g,"").substring(0,8)}>{dpt_datetime.replace(/-/g,"/").substring(0,10)}</option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.__inputPassengers}>
                    <button
                        className={styles.__buttonPassenger}
                        onClick={() => setNumPassengers(numPassengers - 1)}
                    >-</button>
                    <p>{numPassengers}</p>
                    <button
                        className={styles.__buttonPassenger}
                        onClick={() => setNumPassengers(numPassengers + 1)}
                    >+</button>
                </div>
                <a className={styles.__button} target="_blank" href={mySwitchAirline(airlinesCode)}>Ver Vuelos &rarr;</a>
            </div>
        </div>
    );
};

export default SearchBox;


