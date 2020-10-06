import cx from 'classnames';
import React from 'react';
import styles from './button.module.css';

const Button = ({
    action,
    content,
    color,
    style,
    disabled = false
}) => {
    return (
        <button
            type = "button"
            disabled = {disabled}
            className = { cx(styles.button, styles.[color])}
            onClick = {action}
            style={style}
        >
        {content}
        </button>
    );
};

export default Button;

// USAGE:
// <Button content={'Text'} color={'blue__outline'} action={submitData} disabled={true} />

//FIXME: styles.[style] - It works but "identifyer expected"
