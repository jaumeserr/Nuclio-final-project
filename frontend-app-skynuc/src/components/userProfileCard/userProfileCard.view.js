import userProfilePicture from 'assets/images/user_profile_avatars/user_profile_avatar_1.png';
import Navbar from 'components/navbar/navbar.view';
import PopUpBox from 'components/popUpBox/popUpBox.view.js';
import React, { useState } from 'react';
import './userProfileCard.css';

const UserProfileCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    // const sendFlightDataToDB = () => {
    //     alert ("Here goes POST fetch to DB - PARENT COMPONENT")
    // };

    const userName = 'Karom Germaine';
    const userAirline = 'Vueling';
    const flightsAdded = '16';

    return (
        <>
            {/* {isOpen && <PopUpForm handleClose={closePopUp} handleSendData={sendFlightDataToDB} />} */}
            {isOpen && <PopUpBox handleClose={togglePopUp} />}

            <Navbar />

            <div className="wrapper">
                {/* <div className="profile-card js-profile-card"> */}
                <div className={`profile-card ${isOpen ? 'active' : ''} js-profile-card`}>
                    <div className="profile-card__img">
                        <img
                            src={userProfilePicture}
                            alt="profile card"
                            title="Business vector created by Freepik.com"
                        />
                    </div>
                    <div className="profile-card__cnt js-profile-cnt">
                        <div className="profile-card__name">{userName}</div>
                        <div className="profile-card__txt">
                            Flight Administrator from <b>{userAirline}</b>
                        </div>
                        <div className="profile-card-ctr">
                            <div className="profile-card-ctr-box">
                                <div className="profile-card-inf">
                                    <div className="profile-card-inf__item">
                                        <div className="profile-card-inf__number">
                                            {flightsAdded}
                                        </div>
                                        <div className="profile-card-inf__txt">Flights added</div>
                                    </div>
                                </div>
                                <button className="button button--blue-solid">
                                    List my flights
                                </button>
                            </div>
                            <div className="profile-card-ctr-box">
                                <button
                                    className="button button--green form__button js-message-btn"
                                    onClick={togglePopUp}
                                >
                                    Add flight
                                </button>
                                <button className="button button--yellow js-message-btn">
                                    Modify flight
                                </button>
                                <button className="button button--red js-message-btn">
                                    Delete flight
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfileCard;

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
