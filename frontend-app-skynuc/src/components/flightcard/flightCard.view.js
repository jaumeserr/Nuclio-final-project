import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import flight_arrow from '../../assets/images/flight_arrow.png';
import './flightCard.scss';

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

    const calculateTime = () => {
        var arr = arr_datetime;
        var dpt = dpt_datetime;
        let timeString = moment
            .utc(moment(arr, 'YYYY/MM/DD HH:mm:ss').diff(moment(dpt, 'YYYY/MM/DD HH:mm:ss')))
            .format('H[h ]mm[min]');
        return timeString;
    };

    return (
        <>
            <div
                id="flight_card_container"
                style={{
                    borderColor: mySwitchAirlineColor(airline_two_letter_code),
                }}
            >
                <div
                    id="box_top_airline"
                    style={{
                        backgroundColor: mySwitchAirlineColor(airline_two_letter_code),
                    }}
                >
                    <img src={logo_url} alt="airline logo 1" />
                </div>
                <div id="box_bottom">
                    <div id="box_left_container">
                        <div id="box_left">
                            <div id="box_left_left">
                                <img src={logo_url} alt="airline logo 2" />
                            </div>
                            <div id="box_left_right">
                                <div id="box_left_right_inner">
                                    <div id="box_left_right_inner_dpt">
                                        <p style={{ fontWeight: 'bold', fontSize: '34px' }}>
                                            {dpt_datetime.substring(11, 16)}
                                        </p>
                                        <p style={{ textAlign: 'right', fontSize: '20px' }}>
                                            {dpt_airport_iata}
                                        </p>
                                    </div>
                                    <div id="box_left_right_inner_duration">
                                        <p>{calculateTime()}</p>
                                        <img src={flight_arrow} alt="Flight arrow" />
                                        <p>Direct</p>
                                    </div>
                                    <div id="box_left_right_inner_arr">
                                        <p style={{ fontWeight: 'bold', fontSize: '34px' }}>
                                            {arr_datetime.substring(11, 16)}
                                        </p>
                                        <p style={{ textAlign: 'left', fontSize: '20px' }}>
                                            {arr_airport_iata}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="box_right_container">
                        <div id="box_right">
                            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{price_eur} €</p>
                            <p
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    backgroundColor: '#d4d4d4',
                                    color: 'black',
                                    borderRadius: 25,
                                }}
                            >
                                See flight &rarr;
                            </p>
                            {/* <a
                                className="button button--gray-soft-shadow"
                                target="_blank"
                                href={'http://www.google.es'}
                                style={{
                                    border: '5 px solid',
                                }}
                            >
                                See flight &rarr;
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
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
