import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import FlightCard from '../../components/flightcard/flightCard.view';
import Navbar from '../../components/navbar/navbar.view';
import styles from './flightlistpage.module.css';


const baseUrl = 'http://localhost/api';

const FlightListPage = () => {

    const [infoFlights, setInfoFlights] = useState([]);

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
        // }).catch(error => {
        //     console.log(error);
        // });



        // --> ONE SINGLE FETCH

        const url = `${baseUrl}/cities`;

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


            <div className={styles.__spinner}>
                <FontAwesomeIcon icon={faSpinner} size="2x" spin /> 
            </div>

            <Masonry
            breakpointCols={breakpointColumnsObj}
            className = {styles.__masonry__grid}
            columnClassName = {styles.__masonry__grid__column}
            >
                {infoFlights && infoFlights.map(data => {
                    return (
                        <FlightCard
                            name={data.name}
                            country_a3_iso_code={data.country_a3_iso_code}
                            // id={data[1][0].id}
                            id={data.id}
                            key={data.id}
                        />
                    );
                })}
            </Masonry>
            
        </>
    );
};

export default FlightListPage;

// ASK - Spinner - Com fer que aparegui només quan no han arribat els pins? MAYBE un ternari ? o un useSate isLoading, setIsLoading

