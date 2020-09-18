import { useEffect, useState } from 'react';

function UseKeyPress(targetKey) {
    const [keyPressed, isKeyPressed] = useState(false);

    function downHandler({ key }) {
        if (key === targetKey) {
            isKeyPressed(true);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
}

export default UseKeyPress;
