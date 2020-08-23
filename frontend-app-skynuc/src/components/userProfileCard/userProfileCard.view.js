import React, { useState } from 'react';
import userProfilePicture from '../../assets/images/user_profile_avatars/user_profile_avatar_1.png';
import PopUpForm from '../popUpForm/popUpForm.js';
import './userProfileCard.css';

const UserProfileCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const userAirline = 'Vueling';

    return (
        <>
            {isOpen && <PopUpForm handleClose={togglePopup} />}

            {/* <Navbar/> */}
            <div className="wrapper">
                <div className="profile-card js-profile-card">
                    <div className="profile-card__img">
                        <img src={userProfilePicture} alt="profile card" title="Business vector created by Freepik.com" />
                    </div>
                    <div className="profile-card__cnt js-profile-cnt">
                        <div className="profile-card__name">Karom Germain</div>
                        <div className="profile-card__txt">
                            Flight Administrator from <b>{userAirline}</b>
                        </div>
                        <div className="profile-card-ctr">
                            <div className="profile-card-ctr-box">
                                <div className="profile-card-inf">
                                    <div className="profile-card-inf__item">
                                        <div className="profile-card-inf__number">16</div>
                                        <div className="profile-card-inf__txt">Flights added</div>
                                    </div>
                                </div>
                                <button className="profile-card__button button--blue">
                                    List my flights
                                </button>
                            </div>
                            <div className="profile-card-ctr-box">
                                <button
                                    className="profile-card__button button--green js-message-btn"
                                    onClick={togglePopup}
                                >
                                    Add flight
                                </button>
                                <button className="profile-card__button button--yellow js-message-btn">
                                    Modify flight
                                </button>
                                <button className="profile-card__button button--red js-message-btn">
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
