import React from 'react';
import LandingPages from "./Components/LandingPage/LandingPages.view";
import SimpleReactLightbox from 'simple-react-lightbox';

function App() {
    return (
        <div>
            <SimpleReactLightbox>
            <LandingPages />
            </SimpleReactLightbox>
        </div>
    );
}

export default App;
