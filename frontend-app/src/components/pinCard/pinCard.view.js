import React, { useState } from 'react';
import styles from './pinCard.module.css';
import PropTypes from 'prop-types';
import PinCardActionsView from "./pinCardActions/pinCardActions.view";

const PinCard = ({description, image_url, name }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.__container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.__image__container}>
                <img src={image_url} className={styles.__image} alt="pinImage"/>
                {isHovered && <PinCardActionsView />}
            </div>
            <span className={styles.__pinName}>{name}</span>
            <span className={styles.__pinDescription}>{description}</span>


        </div>
    )
}

PinCard.propTypes = {
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    name: PropTypes.array.isRequired,
}

export default PinCard;