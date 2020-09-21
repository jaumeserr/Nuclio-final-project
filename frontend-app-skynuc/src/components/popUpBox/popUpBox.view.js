import React from 'react';
import UseKeyPress from '../../utils/useKeyPress';
import PopUpContentAddFlight from '../popUpContentAddFlight/popUpContentAddFlight.view';
import './popUpBox.css';

const PopUpBox = ({ handleClose }) => {
    const keyPress = UseKeyPress('Escape');

    // const [isOpen, setIsOpen] = useState(false);

    // const togglePopUp = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <>
            {keyPress && handleClose()}

            <div className="popup-box">
                <div className="box">
                    {/* <PopUpContentAddFlight handleClose={togglePopUp} /> */}
                    {/* // FIXME: How to make Cancel button work in the following component? */}
                    <PopUpContentAddFlight />

                    <span className="close-icon" onClick={handleClose}>
                        x
                    </span>
                </div>
                <div class="profile-card__overlay" onClick={handleClose}></div>
            </div>
        </>
    );
};

export default PopUpBox;

// SOURCE (Esc key): https://medium.com/@pppped/build-a-simple-responsive-modal-with-react-and-jss-updated-with-hooks-8cf821b1e205
