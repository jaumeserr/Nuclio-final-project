import Button from 'components/button/button.view';
import useFetch from 'hooks/useFetch';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Fetch from 'utils/Fetch';
import UseKeyPress from 'utils/useKeyPress';
import styles from './popUpAddFlightInstance.module.css';

const PopUpAddFlightInstance = ({ handleClose }) => {
    const keyPress = UseKeyPress('Escape');

    const { data: dataGet, isLoading, hasEverLoadedData } = useFetch('flight_consts', 'GET');

    const [dptDatetime, setDptDatetime] = useState();
    const [arrDatetime, setArrDatetime] = useState();
    const [flightNum, setFlightNum] = useState();
    const [price, setPrice] = useState();
    const [body, setBody] = useState({});

    useEffect(() => {
        setBody({
            dpt_datetime: moment(dptDatetime).format('YYYY-MM-DD HH:mm:ss'),
            arr_datetime: moment(arrDatetime).format('YYYY-MM-DD HH:mm:ss'),
            flight_const_flight_num: flightNum,
            price_eur: price,
        });
    }, [arrDatetime, dptDatetime, flightNum, price]);

    console.log('Building up body before submitting:', body);

    return (
        <>
            {keyPress && handleClose()}

            <div className={styles.__wrapper}>
                <div className={styles.__popupAddFlightInstance}>
                    <div className={styles.__titleBar}>
                        <p>Add flight instance</p>
                    </div>
                    <div className={styles.__content}>
                        <form action="#">
                            <div className={styles.__formContainer}>
                                <div className={styles.__formRow}>
                                    <label htmlFor="dpt-datetime">Departure:</label>
                                    <input
                                        required
                                        type="datetime-local"
                                        name="dpt-datetime"
                                        id="dpt-datetime"
                                        min="2020-08-01T00:00"
                                        max="2020-12-31T23:59"
                                        value={dptDatetime}
                                        onChange={(e) => setDptDatetime(e.target.value)}
                                    />
                                    <label htmlFor="flight-num">Flight nr.:</label>
                                    <select
                                        required
                                        name="flight-num"
                                        id="flight-num"
                                        disabled={!hasEverLoadedData && isLoading}
                                        value={flightNum}
                                        onChange={(e) => setFlightNum(e.target.value)}
                                    >
                                        <option value="">
                                            {!hasEverLoadedData && isLoading
                                                ? 'Loading...'
                                                : 'Choose flight'}
                                        </option>
                                        {dataGet &&
                                            dataGet.map((flightConst) => {
                                                const { flight_num } = flightConst;
                                                return (
                                                    <option key={flight_num} value={flight_num}>
                                                        {flight_num}
                                                    </option>
                                                );
                                            })}{' '}
                                    </select>
                                </div>

                                <div className={styles.__formRow}>
                                    <label htmlFor="arr-datetime">Arrival:</label>
                                    <input
                                        required
                                        type="datetime-local"
                                        name="arr-datetime"
                                        id="arr-datetime"
                                        min="2020-08-01T00:00"
                                        max="2020-12-31T23:59"
                                        value={arrDatetime}
                                        onChange={(e) => setArrDatetime(e.target.value)}
                                    />

                                    <label htmlFor="price">Price (€):</label>
                                    <input
                                        required
                                        type="number"
                                        // FIXME: min i max només serveixen amb les arrows
                                        // min="1"
                                        min={1}
                                        step=".01"
                                        id="price"
                                        name="price"
                                        placeholder="Ex: 120,75"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.__formBottom}>
                                <Button
                                    content={'Send'}
                                    color={'blue__solid'}
                                    action={() =>
                                        Fetch({
                                            method: 'POST',
                                            path: 'flight_instances',
                                            body: body,
                                            successMessage: 'Flight instance successfully added!',
                                        })
                                    }
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

export default PopUpAddFlightInstance;

// SOURCE (Esc key): https://medium.com/@pppped/build-a-simple-responsive-modal-with-react-and-jss-updated-with-hooks-8cf821b1e205
