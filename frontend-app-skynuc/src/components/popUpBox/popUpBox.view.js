import { message } from 'antd';
import Button from 'components/button/button.view';
import useFetch from 'hooks/useFetch';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UseKeyPress from 'utils/useKeyPress';
import './popUpBox.css';

const PopUpBox = ({ handleClose }) => {
    const keyPress = UseKeyPress('Escape');

    const { data: dataFetch, isLoading, hasEverLoadedData } = useFetch('airports', 'GET');

    const { register, handleSubmit, watch, errors } = useForm();

    const [dataToSubmit, setDataToSubmit] = useState([]);
    const watchFlightNum = watch('flightnum', false);

    const onSubmitFlight = (dataToSubmit) => {
        console.log('Login data submitted: ', dataToSubmit);
        setDataToSubmit(dataToSubmit);
        message.success({
            content: 'Flight successfully created!',
            duration: 3,
            className: '__messageBox',
        });
    };

    const validation = () => {
        console.log('Incorrect flight number');
        message.error({
            // content: 'Flight number must be a 4-digit number!',
            content: errors.flightnum,
            duration: 3,
            className: '__messageBox',
        });
    };

    return (
        <>
            {keyPress && handleClose()}

            <div className="__popupBox">
                <div className="__box">
                    <div className="__titleBar">
                        <p>Add flight</p>
                    </div>
                    <div className="__mycontent">
                        <form action="#" onSubmit={handleSubmit(onSubmitFlight)} noValidate>
                            <div className="__formContainer">
                                <div className="__formItem">
                                    <label htmlFor="dpt-city">Departure city:</label>
                                    <select
                                        name="dpt-city"
                                        id="dpt-city"
                                        disabled={!hasEverLoadedData && isLoading}
                                    >
                                        <option value="">
                                            {!hasEverLoadedData && isLoading
                                                ? 'Loading...'
                                                : 'From'}
                                        </option>
                                        {dataFetch &&
                                            dataFetch.map((airport) => {
                                                const { city_name, iata } = airport;

                                                return (
                                                    <option
                                                        key={iata}
                                                        value={`${iata}#${city_name}`}
                                                    >
                                                        {city_name} ({iata})
                                                    </option>
                                                );
                                            })}{' '}
                                    </select>
                                </div>
                                <div className="__formItem">
                                    <label htmlFor="arr-city">Arrival city:</label>
                                    <select name="arr-city" id="arr-city">
                                        <option value="BCN">Barcelona</option>
                                        <option value="MAD">Madrid</option>
                                    </select>
                                </div>
                                <div className="__formItem">
                                    <label htmlFor="flightnum">Flight number:</label>
                                    <input
                                        type="text"
                                        id="flightnum"
                                        name="flightnum"
                                        placeholder="Ex: 1111"
                                        minlength="4"
                                        maxlength="4"
                                        ref={register({
                                            required: true,
                                            minLength: 4,
                                            pattern: {
                                                value: [0 - 9],
                                                message: 'Please enter a valid flight number',
                                            },
                                        })}
                                    />
                                </div>
                                {errors.flightnum && validation}
                            </div>
                            <div className="__formBottom">
                                <Button
                                    content={'Send'}
                                    color={'blue__solid'}
                                    disabled={!!!watchFlightNum}
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

                    <span className="__closeIcon" onClick={handleClose}>
                        x
                    </span>
                </div>
                <div class="__overlay" onClick={handleClose}></div>
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
