import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Home from './pages/home/home.view';
import './App.css';
import './assets/fonts.css';

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
