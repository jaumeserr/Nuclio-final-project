
import React from 'react';
import flight_arrow from '../../assets/images/flight_arrow.png';
import './flightCard.scss';

const FlightCard = ({id, country_a3_iso_code, name}) => {
    return (
        <>

        <div id="flight_card_container">
            <div id="box_top_airline">
                <img src="https://www.topbots.com/wp-content/uploads/2016/10/klm_800x350_web.jpg" alt="KLM logo 1"/>
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
                                    <p style = {{background: "darkgreen", color: "white"}}>17:15</p>
                                    <p style = {{background: "darkgreen", color: "white"}}>BCN</p>
                                </div>
                                <div id="box_left_right_inner_duration">
                                    <p style = {{background: "darkgreen", color: "white"}}>2h 20min</p>
                                    <img src={flight_arrow} alt="Flight arrow"/>
                                    <p style = {{background: "darkgreen", color: "white"}}>Directo</p>
                                </div>
                                <div id="box_left_right_inner_arr">
                                    <p style = {{background: "darkgreen", color: "white"}}>19:35</p>
                                    <p style = {{background: "darkgreen", color: "white"}}>AMS</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="box_right_container">
                    <div id="box_right">
                        <p style = {{background: "darkred", color: "white"}}>Price: {id}</p>
                        <p style = {{background: "darkgreen", color: "white"}}>Flight button</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <img src= {"https://user-images.githubusercontent.com/38922857/89059615-cc3c1700-d361-11ea-9c26-66466d4d0105.png"} ></img> */}

        </>
    );
};


// FlightCard.propTypes = {
//     id: PropTypes.number.isRequired,
//     country_a3_iso_code: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
// }


export default FlightCard;