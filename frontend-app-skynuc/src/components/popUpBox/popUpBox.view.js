import Button from 'components/button/button.view';
import useFetch from 'hooks/useFetch';
import React, { useEffect, useState } from 'react';
import Fetch from 'utils/Fetch';
import UseKeyPress from 'utils/useKeyPress';
import styles from './popUpBox.module.css';

const PopUpBox = ({ handleClose }) => {
    const keyPress = UseKeyPress('Escape');

    const { data: dataGet, isLoading, hasEverLoadedData } = useFetch('airports', 'GET');

    const [flightNum, setFlightNum] = useState();
    const airlineTwoLetterCode = 'VY';
    const [dptCity, setDptCity] = useState({});
    const [arrCity, setArrCity] = useState({});
    const [body, setBody] = useState({});

    useEffect(() => {
        setBody({
            flight_num: flightNum,
            airline_two_letter_code: airlineTwoLetterCode,
            dpt_airport_iata: dptCity,
            arr_airport_iata: arrCity,
        });
    }, [flightNum, airlineTwoLetterCode, arrCity, dptCity]);

    console.log('Body building up before submit:', body);

    // const onSubmitFlight = (body) => {
    //     setBody(body);
    //     console.log('Data submitted: ', body);

    //     // NO FUNCIONA HOOK ...
    //     // const { data: dataPost} = useFetch('flight_const', 'POST', body);

    //     message.success({
    //         content: 'Flight successfully added!',
    //         duration: 3,
    //         className: '__messageBox',
    //     });
    // };

    // function flightNumValidation() {
    //     return flightNum.length === 4 ? true : false;
    // }

    return (
        <>
            {keyPress && handleClose()}

            <div className={styles.__wrapper}>
                <div className={styles.__popupAddFlight}>
                    <div className={styles.__titleBar}>
                        <p>Add flight</p>
                    </div>
                    <div className={styles.__content}>
                        <form action="#">
                            <div className={styles.__formContainer}>
                                <div className={styles.__formRow}>
                                    <label htmlFor="dpt-city">Departure city:</label>
                                    <select
                                        name="dpt-city"
                                        id="dpt-city"
                                        disabled={!hasEverLoadedData && isLoading}
                                        value={dptCity}
                                        onChange={(e) => setDptCity(e.target.value)}
                                    >
                                        <option value="">
                                            {!hasEverLoadedData && isLoading
                                                ? 'Loading...'
                                                : 'From'}
                                        </option>
                                        {dataGet &&
                                            dataGet.map((airport) => {
                                                const { city_name, iata } = airport;
                                                return (
                                                    <option key={iata} value={iata}>
                                                        {city_name} ({iata})
                                                    </option>
                                                );
                                            })}{' '}
                                    </select>
                                </div>
                                <div className={styles.__formRow}>
                                    <label htmlFor="arr-city">Arrival city:</label>
                                    <select
                                        // name="arr-city"
                                        id="arr-city"
                                        disabled={!hasEverLoadedData && isLoading}
                                        value={arrCity}
                                        onChange={(e) => {
                                            setArrCity(e.target.value);
                                        }}
                                    >
                                        <option value="">
                                            {!hasEverLoadedData && isLoading ? 'Loading...' : 'To'}
                                        </option>
                                        {dataGet &&
                                            dataGet.map((airport) => {
                                                const { city_name, iata } = airport;
                                                return (
                                                    <option key={iata} value={iata}>
                                                        {city_name} ({iata})
                                                    </option>
                                                );
                                            })}{' '}
                                    </select>
                                </div>
                                <div className={styles.__formRow}>
                                    <label htmlFor="flightnum">Flight number:</label>
                                    <input
                                        type="number"
                                        // FIXME: min i max només serveixen amb les arrows
                                        max="9999"
                                        id="flightnum"
                                        name="flightnum"
                                        placeholder="Ex: 1111"
                                        value={flightNum}
                                        onChange={(e) => setFlightNum(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.__formBottom}>
                                <Button
                                    content={'Send'}
                                    color={'blue__solid'}
                                    // FIXME: how to disable button??
                                    // disabled={flightNumValidation()}
                                    // disabled={!flightNumValidation()}

                                    action={() =>
                                        Fetch({
                                            method: 'POST',
                                            path: 'flight_consts',
                                            body: body,
                                            successMessage: 'Flight successfully added!',
                                        })
                                    }

                                    // action={useFetch('flight_consts', 'POST', body)}
                                />
                                <Button
                                    content={'Cancel'}
                                    color={'gray__solid'}
                                    action={handleClose}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.__overlay} onClick={handleClose}></div>
            </div>
        </>
    );
};

export default PopUpBox;

// SOURCE (Esc key): https://medium.com/@pppped/build-a-simple-responsive-modal-with-react-and-jss-updated-with-hooks-8cf821b1e205
