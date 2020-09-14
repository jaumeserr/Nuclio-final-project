import cx from 'classnames';
import React from 'react';
import styles from './button.module.css';

const Button = ({
    action,
    content,
    color,
    disabled = false
}) => {
    return (
        <button
            type = "button"
            disabled = {disabled}
            className = { cx(styles.button, styles.[color])}
            onClick = {action}
        >
        {content}
        </button>
    );
};

export default Button;

// USAGE (all props are optional):
// <Button content={'Login'} style={'blue__outline'} action={togglePopUp} disabled={true} />

//FIXME: styles.[style] - It works but "identifyer expected"
