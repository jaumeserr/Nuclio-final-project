import cx from 'classnames';
import React from 'react';
import styles from './button.module.css';

const Button = ({ content, style, action, disabled }) => {
    return (
        <button
            type="button"
            disabled = {disabled}
            className={cx(styles.button, styles.[style])}
            onClick={action}
        >
            {content}
        </button>
    );
};

export default Button;

//FIXME: [style] - It works but "identifyer expected"
