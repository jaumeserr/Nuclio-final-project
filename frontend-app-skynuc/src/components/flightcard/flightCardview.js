import React from 'react';
import './flightCard.scss';

const FlightCard = () => {
    return (
        <>
        <div id="flight_card">
            <div id="airline">
                <p>Airline logo</p>
            </div>
            <div id="boxes_left_and_right">
                <div id="box_left"><p>Flight cities</p></div>
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

        <img src= {"https://user-images.githubusercontent.com/38922857/89059615-cc3c1700-d361-11ea-9c26-66466d4d0105.png"} width={"200px"}></img>

        </>
    );
};

export default FlightCard;