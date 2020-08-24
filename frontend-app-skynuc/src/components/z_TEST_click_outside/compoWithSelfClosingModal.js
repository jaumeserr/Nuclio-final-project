import React, { useEffect, useState, useRef } from 'react';
import UseOnClickOutside from './useOnClickOutside'

function CompoWithSelfClosingModal() {
    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();
    // State for our modal
    const [isModalOpen, setModalOpen] = useState(false);
    // Call hook passing in the ref and a function to call on outside click
    UseOnClickOutside(ref, () => setModalOpen(false));

    return (
        <div>
            {isModalOpen ? (
                <div ref={ref}>👋 Hey, I'm a modal. Click anywhere outside of me to close.</div>
            ) : (
                <button onClick={() => setModalOpen(true)}>Open Modal</button>
            )}
        </div>
    );
}

export default CompoWithSelfClosingModal;
