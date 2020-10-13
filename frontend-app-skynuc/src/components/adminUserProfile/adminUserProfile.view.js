import userProfilePicture from 'assets/images/user_profile_avatars/user_profile_avatar_1.png';
import Button from 'components/button/button.view';
import PopUpBox from 'components/popUpBox/popUpBox.view.js';
import React, { useState } from 'react';
import './adminUserProfile.css';

const AdminUserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
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

            <div className="__wrapper">
                <div className={`__container ${isOpen ? 'active' : ''}`}>
                    <div className="__image">
                        <img
                            src={userProfilePicture}
                            alt="user profile picture"
                            title="Business vector created by Freepik.com"
                        />
                    </div>
                    <div className="__content">
                        <div className="__userName">{userName}</div>
                        <div className="__userDescription">
                            Flight Administrator from <b>{userAirline}</b>
                        </div>
                        <div className="profile-card-ctr">
                            <div className="profile-card-ctr-box">
                                {/* <div className="profile-card-inf"> */}
                                    {/* <div className="profile-card-inf__item"> */}
                                        <div className="profile-card-inf__number">
                                            {flightCount}
                                        </div>
                                        <div className="profile-card-inf__txt">Flights added</div>
                                        <Button content={'List my flights'} color={'blue__outline'} />
                                    {/* </div> */}
                                {/* </div> */}
                                {/* <Button content={'List my flights'} color={'blue__outline'} /> */}
                            </div>
                            <div className="profile-card-ctr-box">
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

// var messageBox = document.querySelector('.js-message');
// var btn = document.querySelector('.js-message-btn');
// var card = document.querySelector('.js-profile-card');
// var closeBtn = document.querySelectorAll('.js-message-close');

// btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     card.classList.add('active');
// });

// closeBtn.forEach(function (element, index) {
//     console.log(element);
//     element.addEventListener('click', function (e) {
//         e.preventDefault();
//         card.classList.remove('active');
//     });
// });
