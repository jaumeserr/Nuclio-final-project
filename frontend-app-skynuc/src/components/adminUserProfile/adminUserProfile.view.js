import userProfilePicture from 'assets/images/user_profile_avatars/user_profile_avatar_1.png';
import Button from 'components/button/button.view';
import PopUpBox from 'components/popUpBox/popUpBox.view.js';
import PopUpListMyFlights from 'components/popUpListMyFlights/popUpListMyFlights';
import React, { useState } from 'react';
import './adminUserProfile.css';

const AdminUserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [listMyFlights, setListMyFlights] = useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };
    const togglePopUpListMyFlights = () => {
        setListMyFlights(!listMyFlights);
    };

    // const sendFlightDataToDB = () => {
    //     alert ("Here goes POST fetch to DB - PARENT COMPONENT")
    // };

    const userName = 'Karom Germaine';
    const userAirline = 'Vueling';
    const flightCount = '16';

    return (
        <>
            {/* {isOpen && <PopUpForm handleClose={closePopUp} handleSendData={sendFlightDataToDB} />} */}
            {isOpen && <PopUpBox handleClose={togglePopUp} />}
            {listMyFlights && <PopUpListMyFlights handleClose={togglePopUpListMyFlights} />}

            <div className="__wrapper">
                <div className="__container">
                    <div className="__image">
                        <img
                            src={userProfilePicture}
                            alt="user profile"
                            // title="Business vector created by Freepik.com"
                        />
                    </div>
                    <div className="__content">
                        <div className="__userName">{userName}</div>
                        <div className="__userDescription">
                            Flight Administrator from <b>{userAirline}</b>
                        </div>
                        <div className="__actionPanel">
                            <div className="__actionPanelBox">
                                <div className="__FlightCountNumber">{flightCount}</div>
                                <div className="__FlightCountText">Flights added</div>
                                <Button
                                    content={'List my flights'}
                                    color={'blue__outline'}
                                    action={togglePopUpListMyFlights}
                                />
                            </div>
                            <div className="__actionPanelBox">
                                <Button
                                    content={'Add flight'}
                                    color={'blue__solid'}
                                    action={togglePopUp}
                                />
                                <Button
                                    content={'Add flight instance'}
                                    color={'blue__solid'}
                                    action={togglePopUp}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminUserProfile;

// SOURCE: https://codepen.io/JavaScriptJunkie/pen/jvRGZy
