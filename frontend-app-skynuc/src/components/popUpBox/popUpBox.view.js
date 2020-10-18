import { message } from 'antd';
import Button from 'components/button/button.view';
import useFetch from 'hooks/useFetch';
import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import UseKeyPress from 'utils/useKeyPress';
import styles from './popUpBox.module.css';
// import useFetch from 'hooks/useFetch';

const PopUpBox = ({ handleClose }) => {
    const keyPress = UseKeyPress('Escape');

    const { data: dataGet, isLoading, hasEverLoadedData } = useFetch('airports', 'GET');

    // FIXME: Passar auth a true quan tinguem JWT implementat:
    // const { data: dataPost, resetFetch} = useFetch({ path: 'flight_const', method: 'POST', body, auth: false });

    // const { register, handleSubmit, watch, errors } = useForm();
    // const watchFlightNum = watch('flightnum', false);

    // const [dataToSubmit, setDataToSubmit] = useState([]);
    const [flightNum, setFlightNum] = useState();
    const [arrCity, setArrCity] = useState({});
    const [dptCity, setDptCity] = useState({});
    const [airlineTwoLetterCode, setairlineTwoLetterCode] = useState('VY');

    const [body, setBody] = useState({});

    useEffect(() => {
        setBody({
            flight_num: flightNum,
            airline_two_letter_code: airlineTwoLetterCode,
            dpt_airport_iata: dptCity,
            arr_airport_iata: arrCity.iata,
        });
    }, [flightNum, airlineTwoLetterCode, arrCity, dptCity]);

    console.log(body);

    const onSubmitFlight = (body) => {
        console.log('Data submitted: ', body);
        setBody(body);
        message.success({
            content: 'Flight successfully added!',
            duration: 3,
            className: '__messageBox',
        });
    };

    function flightNumValidation() {
        return flightNum.length === 4 ? true : false;
    }

    // const validation = () => {
    //     console.log('Validating');
    //     message.error({
    //         content: 'Flight number must be a 4-digit number!',
    //         content: errors.flightnum,
    //         duration: 3,
    //         className: '__messageBox',
    //     });
    // };

    return (
        <>
            {keyPress && handleClose()}

            <div className={styles.__wrapper}>
                <div className={styles.__popupBox}>
                    <div className={styles.__titleBar}>
                        <p>Add flight</p>
                    </div>
                    <div className={styles.__mycontent}>
                        {/* <form action="#" onSubmit={handleSubmit(onSubmitFlight)} noValidate> */}
                        <form action="#">
                            <div className={styles.__formContainer}>
                                <div className={styles.__formItem}>
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
                                                    <option
                                                        key={iata}
                                                        value={iata}
                                                    >
                                                        {city_name} ({iata})
                                                    </option>
                                                );
                                            })}{' '}
                                    </select>
                                </div>
                                <div className={styles.__formItem}>
                                    <label htmlFor="arr-city">Arrival city:</label>
                                    <select
                                        name="arr-city"
                                        id="arr-city"
                                        disabled={!hasEverLoadedData && isLoading}
                                        value={arrCity}
                                        onChange={(e) => {setArrCity(e.target.value)}}
                                    >
                                        <option value="">
                                            {!hasEverLoadedData && isLoading ? 'Loading...' : 'To'}
                                        </option>
                                        {dataGet &&
                                            dataGet.map((airport) => {
                                                const { city_name, iata } = airport;

                                                return (
                                                    <option
                                                        key={iata}
                                                        value={iata}
                                                    >
                                                        {city_name} ({iata})
                                                    </option>
                                                );
                                            })}{' '}
                                    </select>
                                </div>
                                <div className={styles.__formItem}>
                                    <label htmlFor="flightnum">Flight number:</label>
                                    <input
                                        type="number"
                                        min="1000"
                                        max="9999"
                                        id="flightnum"
                                        name="flightnum"
                                        placeholder="Ex: 1111"
                                        value={flightNum}
                                        onChange={(e) => setFlightNum(e.target.value)}
                                        // ref={register({
                                        //     required: true,
                                        //     minLength: 4,
                                        //     pattern: {
                                        //         value: [0 - 9],
                                        //         message: 'Please enter a valid flight number',
                                        //     },
                                        // })}
                                    />
                                </div>
                                {/* {errors.flightnum && validation} */}
                            </div>
                            <div className={styles.__formBottom}>
                                <Button
                                    content={'Send'}
                                    color={'blue__solid'}
                                    // // disabled={!!!watchFlightNum}
                                    // disabled={flightNumValidation()}
                                    // disabled={!flightNumValidation()}
                                    action={onSubmitFlight}
                                />
                                <Button
                                    content={'Cancel'}
                                    color={'gray__solid'}
                                    action={handleClose}
                                />
                            </div>
                        </form>
                    </div>

                    {/* <span className={styles.__closeIcon} onClick={handleClose}>
                        x
                    </span> */}
                </div>
                <div className={styles.__overlay} onClick={handleClose}></div>
            </div>
        </>
    );
};

export default PopUpBox;

// SOURCE (Esc key): https://medium.com/@pppped/build-a-simple-responsive-modal-with-react-and-jss-updated-with-hooks-8cf821b1e205

// <label htmlFor="dpt-datetime">Departure date and time:</label>
// <input
//     type="datetime-local"
//     id="dpt-datetime"
//     name="dpt-datetime"
//     min="2020-08-01T00:00"
//     max="2020-12-31T00:00"
// />

//  <label htmlFor="arr-datetime">Arrival date and time:</label>
//                         <input
//                             type="datetime-local"
//                             id="arr-datetime"
//                             name="arr-datetime"
//                             min="2020-08-01T00:00"
//                             max="2020-12-31T00:00"
//                         />

//  <label htmlFor="price">Price (€):</label>
//                         <input
//                             type="number"
//                             id="price"
//                             name="price"
//                             min={1}
//                             max={1500}
//                             defaultValue={0}
//                             step=".01"
//                         />

//      <div className="profile-card-form-arr">
// </div>

//      <div className="profile-card-form-flightnum_price">
// </div>
