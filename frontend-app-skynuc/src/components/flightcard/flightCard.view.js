import PropTypes from 'prop-types';
import React from 'react';
import flight_arrow from '../../assets/images/flight_arrow.png';
import './flightCard.scss';

const FlightCard = ({ dpt_datetime, arr_datetime, price_eur, logo_url, dpt_airport_iata, arr_airport_iata }) => {
    return (
        <>
            <div id="flight_card_container">
                <div id="box_top_airline">
                    <img
                        src="https://www.pikpng.com/pngl/b/448-4484691_clients-about-ping-media-klm-transparent-logo-white.png"
                        alt="KLM logo 1"
                    />
                </div>
                <div id="box_bottom">
                    <div id="box_left_container">
                        <div id="box_left">
                            <div id="box_left_left">
                                <img
                                    src={logo_url}
                                    alt="KLM logo 2"
                                    // height={500}
                                />
                            </div>
                            <div id="box_left_right">
                                <div id="box_left_right_inner">
                                    <div id="box_left_right_inner_dpt">
                                        <p style={{ fontWeight: 'bold', fontSize: '34px' }}>
                                            17:15
                                        </p>
                                        <p style={{ textAlign: 'right', fontSize: '20px' }}>
                                            {dpt_airport_iata}
                                        </p>
                                    </div>
                                    <div id="box_left_right_inner_duration">
                                        <p>2h 20min</p>
                                        <img src={flight_arrow} alt="Flight arrow" />
                                        <p>Direct</p>
                                    </div>
                                    <div id="box_left_right_inner_arr">
                                        <p style={{ fontWeight: 'bold', fontSize: '34px' }}>
                                            19:35
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
                            <p style={{ fontSize: '20px' }}>Price: {price_eur}</p>
                            <p
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    backgroundColor: '#01a3e2',
                                    color: 'white',
                                    borderRadius: 25,
                                }}
                            >
                                Flight button
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <img id="image_model" src= {"https://user-images.githubusercontent.com/38922857/89059615-cc3c1700-d361-11ea-9c26-66466d4d0105.png"} alt="modelo"></img> */}
        </>
    );
};

FlightCard.propTypes = {
    flight_num: PropTypes.string.isRequired,
    airline_two_letter_code: PropTypes.string.isRequired,
    dpt_airport_iata: PropTypes.string.isRequired,
    arr_airport_iata: PropTypes.string.isRequired,

    dpt_datetime: PropTypes.string.isRequired,
    arr_datetime: PropTypes.string.isRequired,
    price_eur: PropTypes.number.isRequired,
};

export default FlightCard;
