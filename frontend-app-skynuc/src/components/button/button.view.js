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
            disabled = {disabled}
            className = { cx(styles.button, styles[color])}
            onClick = {(event) => {
                event.preventDefault();
                action();
            }}
            style={style}
        >
        {content}
        </button>
    );
};

export default Button;

// USAGE EXAMPLE (not all props are mandatory!):
// <Button content={'Text'} color={'blue__outline'} action={submitData} disabled={true} style={{marginLeft: 50}} />

//FIXME: styles.[style] - It works but "identifyer expected"
