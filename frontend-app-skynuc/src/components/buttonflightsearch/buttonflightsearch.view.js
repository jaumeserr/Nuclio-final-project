import React from 'react';
import { Link } from 'react-router-dom';
import { FLIGHT_LIST } from '../../routes/routes';



const ButtonFlightSearch = () => {
    return (
        <div>
            <button type="submit" className="button button-primary">Flight List</button>
        </div>
    );
};

export default ButtonFlightSearch;


// onClick={submitData}
