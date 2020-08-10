import React, { useState } from 'react';



const ButtonFlightSearch = () => {

    const baseUrl = 'http://localhost/api';
    const [infoFlights, setInfoFlights] = useState({});
    
    const submitData = () => {

        const url = `${baseUrl}/countries/DEU`;
        const options = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
        };

        fetch(url, options)
            .then((response) => {
                if (response.status >= 200 || response.status < 300) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then((payload) => {
                console.log('Data from DB loaded');
                setInfoFlights(payload);
            })
            .catch((error) => console.log(error));

    };

    return (
        <div>
            {console.log(infoFlights)}
            <button type="submit"
            onClick={submitData}
            value="Vuelos" 
            className="button button-primary">
                Search Flights
            </button>
        </div>
    );
};

export default ButtonFlightSearch;
