import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import FlightCard from '../../components/flightcard/flightCard.view';
import Loader from '../../components/loader/loader.view';
import Navbar from '../../components/navbar/navbar.view';
import styles from './flightlistpage.module.css';


const baseUrl = 'http://localhost/api';

const FlightListPage = () => {

    const [infoFlights, setInfoFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: new Headers(),
        };


        // --> MORE THAN ONE FETCH
        // var urls = ['http://localhost/api/airlines', 'http://localhost/api/cities'];

        // SOURCE (Promise): https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/

        // Promise.all([
        //     fetch('http://localhost/api/airlines', options),
        //     fetch('http://localhost/api/cities', options)
        // ]).then(response => {
        //     return Promise.all(response.map(response => {
        //         return response.json();
        //     }));
        // }).then(payload => {
        //     console.log(payload);
        //     console.log("Data from DB loaded");
        //     setInfoFlights(payload);
        //     setIsLoading(false);
        // }).catch(error => {
        //     console.log(error);
        // });



        // --> ONE SINGLE FETCH

        const url = `${baseUrl}/flight_consts`;

        fetch(url, options)
            .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                })
            .then(payload => {
                    console.log(payload);
                    console.log("Data from DB loaded");
                    setInfoFlights(payload);
                    setIsLoading(false);
                })
            .catch(error => console.log(error));


    }, []);



    const breakpointColumnsObj = {
        default: 1,
        1200: 1,
        1000: 1,
        800: 1,
        600: 1
    };

    // console.log (infoFlights);

    return (
        <>
            <Navbar/>

            {isLoading && <Loader />}

            <Masonry
            breakpointCols={breakpointColumnsObj}
            className = {styles.__masonry__grid}
            columnClassName = {styles.__masonry__grid__column}
            >
                {infoFlights && infoFlights.map(data => {
                    return (
                        <FlightCard
                            flight_num={data.flight_num}
                            airline_two_letter_code={data.airline_two_letter_code}
                            dpt_airport_iata={data.dpt_airport_iata}
                            arr_airport_iata={data.arr_airport_iata}
                            key={data.flight_num}
                        />
                    );
                })}
            </Masonry>

        </>
    );
};

export default FlightListPage;


