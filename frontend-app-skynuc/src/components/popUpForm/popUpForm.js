import React from 'react';
import './popUpForm.css';

const PopUpForm = (props) => {
    return (
        <div className="popup-box">
            <div className="box">
                <div className="top-bar">
                    <p>
                        <b>Add flight</b>
                    </p>
                </div>

                <div className="profile-card-form__container">
                    <div className="profile-card-form-dpt__container">
                        <label htmlFor="dpt-datetime">Departure date and time:</label>
                        <input
                            type="datetime-local"
                            id="dpt-datetime"
                            name="dpt-datetime"
                            min="2020-08-01T00:00"
                            max="2020-12-31T00:00"
                        />
                        <label htmlFor="dpt-city">Departure city:</label>
                        <select name="dpt-city" id="dpt-city">
                            <option value="BCN">Barcelona</option>
                            <option value="MAD">Madrid</option>
                        </select>
                    </div>

                    <div className="profile-card-form-arr__container">
                        <label htmlFor="arr-datetime">Arrival date and time:</label>
                        <input
                            type="datetime-local"
                            id="arr-datetime"
                            name="arr-datetime"
                            min="2020-08-01T00:00"
                            max="2020-12-31T00:00"
                        />
                        <label htmlFor="arr-city">Arrival city:</label>
                        <select name="arr-city" id="arr-city">
                            <option value="BCN">Barcelona</option>
                            <option value="MAD">Madrid</option>
                        </select>
                    </div>
                    <div className="profile-card-form-price__container">
                        <label htmlFor="price">Price (€):</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            min={1}
                            max={1500}
                            defaultValue={0}
                            step=".01"
                        />
                    </div>
                </div>
                <div className="profile-card-form__bottom">
                    <button className="profile-card__button form__button button--green js-message-close">
                        Send
                    </button>
                    <button className="profile-card__button form__button button--gray js-message-close" onClick={props.handleClose}>
                        Cancel
                    </button>
                </div>

                <span className="close-icon" onClick={props.handleClose}>
                    x
                </span>
            </div>
        </div>
    );
};

export default PopUpForm;
