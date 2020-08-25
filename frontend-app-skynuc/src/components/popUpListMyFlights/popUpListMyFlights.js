import React, { useCallback, useEffect } from 'react';
import './popUpListMyFlights.css';

const PopUpListMyFlights = ({ handleClose }) => {

    const handleKeyUp = useCallback(
        (e) => {
            const keys = {
                27: () => {
                    e.preventDefault();
                    handleClose();
                    window.removeEventListener('keyup', handleKeyUp, false);
                },
            };

            if (keys[e.keyCode]) {
                keys[e.keyCode]();
            }
        },
        [handleClose],
    );

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp, false);

        return () => {
            window.removeEventListener('keyup', handleKeyUp, false);
        };
    }, [handleKeyUp]);

    const sendFlightDataToDB_2 = () => {
        alert('Here goes POST fetch to DB - CHILDREN COMPONENT');
    };

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


                    <div classname="lorem-ipsum-DELETE">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, iaculis a arcu eu, aliquet scelerisque nunc. Nam convallis id sem vel ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eget dolor nec elit dapibus condimentum commodo non neque. Sed egestas facilisis tellus, eget tincidunt mi tempus non. Aenean quis erat vel felis pharetra sollicitudin feugiat vitae turpis. Aenean sit amet mattis dui. Ut quis ultrices diam. Praesent et arcu id ipsum accumsan lobortis vitae ac odio. Maecenas at urna at nibh faucibus pharetra. Proin aliquet augue maximus, pellentesque eros id, ullamcorper ligula. Aenean sapien ligula, scelerisque ut vehicula a, aliquet vitae odio. Cras mattis aliquet tempor. Nulla non felis eu neque tempus malesuada quis a elit. Maecenas suscipit, massa eu faucibus luctus, est massa dignissim dui, a vulputate ante velit vitae tellus. Quisque ut est blandit, auctor enim id, ultrices est. Mauris euismod semper commodo. Nunc interdum ut purus a vestibulum. Maecenas vehicula est vel est consequat, at tempor metus venenatis. Donec lorem massa, laoreet et semper vitae, auctor vitae libero. Morbi consequat lorem quis elementum interdum. Sed facilisis lacus in rhoncus convallis. Sed eu dui quis turpis scelerisque luctus sit amet et justo. Integer convallis nisi et porttitor dignissim. Nulla facilisi. Curabitur imperdiet ut diam id varius. Integer ultrices feugiat tellus, et ullamcorper lectus laoreet vitae. Ut congue ipsum venenatis, finibus tellus quis, dignissim tellus. Donec vulputate, eros sit amet venenatis ultricies, odio dui porta quam, sit amet egestas ipsum neque ut quam. Sed elementum enim eget orci consequat eleifend. Proin nec urna vel risus consectetur fringilla. Fusce neque felis, luctus quis ipsum nec, vulputate blandit neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris a leo nunc. Vivamus quis urna erat. Proin efficitur eleifend eros, non tristique nunc fringilla vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus tortor, varius quis ante ultrices, pretium elementum arcu. In hac habitasse platea dictumst. Maecenas lacinia orci mauris, tempor molestie sem viverra scelerisque. Maecenas pulvinar pretium ultrices. Morbi vitae diam quis nulla efficitur mattis. Curabitur dignissim dapibus dui sed eleifend. Fusce ac tincidunt ligula. Nulla elementum egestas erat in posuere. In sollicitudin enim et lacus eleifend lacinia. Nunc sed convallis leo, eget volutpat nisi. Curabitur in erat odio. Sed non ornare ante. Vestibulum hendrerit odio sed tincidunt porttitor. Integer erat sem, laoreet sed orci sed, sodales convallis ex. Nunc accumsan ligula sed ex ornare elementum. Proin sagittis magna quam, ac pharetra nisi varius et. Vestibulum iaculis, felis elementum molestie dictum, lorem mi pellentesque sem, non ultrices leo diam vel tortor.</p>
                </div>

                </div>
                <div className="profile-card-form__bottom">
                    {/* <button className="profile-card__button form__button button--green js-message-close" onClick={props.handleSendData}> */}
                    <button
                        className="profile-card__button form__button button--green js-message-close"
                        onClick={sendFlightDataToDB_2}
                    >
                        Send
                    </button>
                    <button
                        className="profile-card__button form__button button--gray js-message-close"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                </div>

                <span className="close-icon" onClick={handleClose}>
                    x
                </span>
            </div>
            <div class="profile-card__overlay" onClick={handleClose}></div>
        </div>
    );
};

export default PopUpListMyFlights;

// SOURCE (Esc key): https://medium.com/@pppped/build-a-simple-responsive-modal-with-react-and-jss-updated-with-hooks-8cf821b1e205
