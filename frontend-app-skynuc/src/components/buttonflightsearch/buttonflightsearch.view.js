import React from 'react';
import { Link } from 'react-router-dom';
import { FLIGHT_LIST } from '../../routes/routes';



const ButtonFlightSearch = () => {
    return (
        <div>
            <Link to={FLIGHT_LIST}>Search Flights</Link>

            {/* <button type="submit"
            value="Vuelos" 
            className="button button-primary">
            </button> */}
        </div>
    );
};

export default ButtonFlightSearch;


// onClick={submitData}
