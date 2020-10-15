import Button from 'components/button/button.view';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import flight from '../../assets/images/flightCard/flight.svg';
// import './flightCard.css';
import styles from './flightCard.module.css';

const FlightCard = ({
    dpt_datetime,
    arr_datetime,
    price_eur,
    dpt_airport_iata,
    arr_airport_iata,
    logo_url,
    airline_two_letter_code,
}) => {
    const mySwitchAirlineColor = (airline_two_letter_code) => {
        switch (airline_two_letter_code) {
            case 'KL':
                return '#01A3E4';
            case 'AF':
                return '#2C3E82';
            case 'IB':
                return '#D71F29';
            case 'VY':
                return '#ffcc00';
            case 'TP':
                return '#76AE01';
            default:
                return '#a9a9a9';
        }
    };

    const calculateDuration = () => {
        let timeString = moment
            .utc(
                moment(arr_datetime, 'YYYY/MM/DD HH:mm:ss').diff(
                    moment(dpt_datetime, 'YYYY/MM/DD HH:mm:ss'),
                ),
            )
            .format('H[h ]mm[min]');
        return timeString;
    };

    const myonclickaction = () => {
        alert('action test');
    };

    return (
        <div className={styles.__container}>
            <div 
                className={styles.__topCard}
                style={{backgroundColor: mySwitchAirlineColor(airline_two_letter_code)}}>
            </div>
            <div className={styles.__bottomCard}>
                <div>
                    <img className={styles.__logo} src={logo_url} alt="Logo" />
                </div>
                <div className={styles.__scheduleBlock}>
                    <div className={styles.__infoFlight}>
                        <span className={styles.__time}>{moment(dpt_datetime).format('HH:mm')}</span>
                        <span className={styles.__iata}>{dpt_airport_iata}</span>
                    </div>
                    <div className={styles.__flight}>
                        <span>{calculateDuration()}</span>
                        <img src={flight} alt="Flight" />
                        <span>DIRECT</span>
                    </div>
                    <div className={styles.__infoFlight}>
                        <span className={styles.__time}>{moment(arr_datetime).format('HH:mm')}</span>
                        <span className={styles.__iata}>{arr_airport_iata}</span>
                    </div>
                </div>
                <div className={styles.__priceBlock}>
                    <p className={styles.__price}>{price_eur}€</p>
                    <Button
                        content={'See flight'}
                        color={'blue__solid'}
                        action={myonclickaction}
                    />
                </div>
            </div>
        </div>
        
        
        
        
        
        
    );
};

FlightCard.propTypes = {
    dpt_datetime: PropTypes.string.isRequired,
    arr_datetime: PropTypes.string.isRequired,
    price_eur: PropTypes.number.isRequired,
    dpt_airport_iata: PropTypes.string.isRequired,
    arr_airport_iata: PropTypes.string.isRequired,
    logo_url: PropTypes.string.isRequired,
};

export default FlightCard;
