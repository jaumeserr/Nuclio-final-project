import userProfilePicture from 'assets/images/user_profile_avatars/user_profile_avatar_1.png';
import Button from 'components/button/button.view';
import PopUpAddFlightInstance from 'components/popUpAddFlightInstance/popUpAddFlightInstance.view';
import PopUpBox from 'components/popUpBox/popUpBox.view.js';
import PopUpListMyFlights from 'components/popUpListMyFlights/popUpListMyFlights';
import React, { useState } from 'react';
import './adminUserProfile.css';

const AdminUserProfile = () => {
    const [listMyFlights, setListMyFlights] = useState(false);
    const [addFlight, setAddFlight] = useState(false);
    const [addFlightInstance, setAddFlightInstance] = useState(false);

    const togglePopUpListMyFlights = () => {
        setListMyFlights(!listMyFlights);
    };
    const togglePopUpAddFlight = () => {
        setAddFlight(!addFlight);
    };
    const togglePopUpAddFlightInstance = () => {
        setAddFlightInstance(!addFlightInstance);
    };

    const userName = 'Karom Germaine';
    const userAirline = 'Vueling';
    const flightCount = '16';

    return (
        <>
            {listMyFlights && <PopUpListMyFlights handleClose={togglePopUpListMyFlights} />}
            {addFlight && <PopUpBox handleClose={togglePopUpAddFlight} />}
            {addFlightInstance && <PopUpAddFlightInstance handleClose={togglePopUpAddFlightInstance} />}

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
                                <div className="__flightCountNumber">{flightCount}</div>
                                <div className="__flightCountText">Flights added</div>
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
                                    action={togglePopUpAddFlight}
                                />
                                <Button
                                    content={'Add flight instance'}
                                    color={'blue__solid'}
                                    action={togglePopUpAddFlightInstance}
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
