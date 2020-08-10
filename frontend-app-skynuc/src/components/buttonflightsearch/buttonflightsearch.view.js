import React from 'react';
import styles from './buttonflighsearch.module.css';

const submit = () => {
    alert('Hi, I am the button to looking flight');
};

const ButtonFlightSearch = () => {
    return (
        <div>
            <button type="submit" 
            onClick={submit} 
            value="Vuelos" 
            className="button button-primary">
                Flights
            </button>
        </div>
    );
};

export default ButtonFlightSearch;
