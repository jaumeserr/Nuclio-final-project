import React, { useState } from 'react';



const ButtonFlightSearch = () => {

    const baseUrl = 'http://localhost/api';
    const [infoFlights, setInfoFlights] = useState('hola');
    
    const SubmitData = () => {

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
                console.log(setInfoFlights)
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <button type="submit" 
            onClick={SubmitData} 
            value="Vuelos" 
            className="button button-primary">
                Flights
            </button>
        </div>
    );
};

export default ButtonFlightSearch;
