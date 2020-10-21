import FlightCard from 'components/flightcard/flightCard.view';
import Loader from 'components/loader/loader.view';
import useFetch from 'hooks/useFetch';
import React from 'react';
// import { useForm } from 'react-hook-form';
import UseKeyPress from 'utils/useKeyPress';
import styles from './popUpListMyFlights.module.css';

const PopUpListMyFlights = ({ handleClose }) => {
    const keyPress = UseKeyPress('Escape');

    // const [airlineTwoLetterCode, setairlineTwoLetterCode] = useState('VY');

    const { data: dataGet, isLoading, hasEverLoadedData } = useFetch(
        'flight_instances/flightcarddata',
        'GET',
    );

    return (
        <>
            {keyPress && handleClose()}

            <div className={styles.__wrapper}>
                <div className={styles.__popupBox}>
                    <div className={styles.__titleBar}>
                        <p>My flights</p>
                    </div>
                    <div className={styles.__mycontent}>
                        {!hasEverLoadedData && isLoading && <Loader />}
                        {hasEverLoadedData &&
                            !isLoading &&
                            dataGet.length !== 0 &&
                            dataGet.map((flight) => {
                                return (
                                    <FlightCard
                                        key={flight.id}
                                        dpt_datetime={flight.dpt_datetime}
                                        arr_datetime={flight.arr_datetime}
                                        price_eur={parseFloat(flight.price_eur)}
                                        dpt_airport_iata={flight.flight_const.dpt_airport_iata}
                                        arr_airport_iata={flight.flight_const.arr_airport_iata}
                                        logo_url={flight.flight_const.airline.logo_url}
                                        airline_two_letter_code={
                                            flight.flight_const.airline_two_letter_code
                                        }
                                    />
                                );
                            })}
                    </div>
                </div>
                <div className={styles.__overlay} onClick={handleClose}></div>
            </div>
        </>
    );
};

export default PopUpListMyFlights;
