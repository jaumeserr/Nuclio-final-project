import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Home from './pages/home/home.view';

function App() {
    return (
        <div>
            <SimpleReactLightbox>
            <Home/>
            </SimpleReactLightbox>
        </div>
    );
}

export default App;
