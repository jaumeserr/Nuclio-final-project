
import PropTypes from 'prop-types';
import React from 'react';
import flight_arrow from '../../assets/images/flight_arrow.png';
import './flightCard.scss';

const FlightCard = ({flight_num}) => {

    return (
        <>

        <div id="flight_card_container">
            <div id="box_top_airline">
                <img src="https://www.pikpng.com/pngl/b/448-4484691_clients-about-ping-media-klm-transparent-logo-white.png" alt="KLM logo 1"/>
            </div>
            <div id="box_bottom">
                <div id="box_left_container">
                    <div id="box_left">
                        <div id="box_left_left">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/1024px-KLM_logo.svg.png" alt="KLM logo 2"/>
                        </div>
                        <div id="box_left_right">
                            <div id="box_left_right_inner">
                                <div id="box_left_right_inner_dpt">
                                    <p style = {{background: "darkgreen", color: "white", fontWeight: "bold", fontSize: "24px"}}>17:15</p>
                                    <p style = {{background: "darkgreen", color: "white", textAlign: "right", fontSize: "15px"}}>BCN</p>
                                </div>
                                <div id="box_left_right_inner_duration">
                                    <p style = {{background: "darkgreen", color: "white"}}>2h 20min</p>
                                    <img src={flight_arrow} alt="Flight arrow"/>
                                    <p style = {{background: "yellow", color: "green"}}>Direct</p>
                                </div>
                                <div id="box_left_right_inner_arr">
                                    <p style = {{background: "darkgreen", color: "white", fontWeight: "bold", fontSize: "24px"}}>19:35</p>
                                    <p style = {{background: "darkgreen", color: "white", textAlign: "left", fontSize: "15px"}}>AMS</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="box_right_container">
                    <div id="box_right">
                        <p style = {{background: "darkred", color: "white", fontSize: "20px"}}>Price: {flight_num}</p>
                        <p style = {{background: "darkgreen", color: "white"}}>Flight button</p>
                    </div>
                </div>
            </div>
        </div>

        <img id="image_model" src= {"https://user-images.githubusercontent.com/38922857/89059615-cc3c1700-d361-11ea-9c26-66466d4d0105.png"} alt="modelo"></img>

        </>
    );
};


FlightCard.propTypes = {
    flight_num: PropTypes.string.isRequired,
    airline_two_letter_code: PropTypes.string.isRequired,
    dpt_airport_iata: PropTypes.string.isRequired,
    arr_airport_iata: PropTypes.string.isRequired,
}

export default FlightCard;
