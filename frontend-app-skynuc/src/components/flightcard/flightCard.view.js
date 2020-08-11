
import PropTypes from 'prop-types';
import React from 'react';
import './flightCard.scss';

const FlightCard = ({id, country_a3_iso_code, name}) => {
    return (
        <>

        <div id="flight_card">
            <div id="airline">
                <p>Airline logo</p>
            </div>
            <div id="boxes_left_and_right">
                <div id="box_left">
                    <p style = {{background: "yellow"}}>Flight cities:</p>
                    <p style = {{background: "orange"}}><em>City id here:</em> {id}</p>
                    <p>City name here: {name}</p>
                    <p>Country a3 iso code here: {country_a3_iso_code}</p>
                </div>
                <div id="box_right">
                    <div id="box_right_price">
                        <p>Price</p>
                    </div>
                    <div id="box_right_see_flight">
                        <p>See flight button</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <img src= {"https://user-images.githubusercontent.com/38922857/89059615-cc3c1700-d361-11ea-9c26-66466d4d0105.png"} width={"200px"}></img> */}

        </>
    );
};


FlightCard.propTypes = {
    id: PropTypes.number.isRequired,
    country_a3_iso_code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}


export default FlightCard;