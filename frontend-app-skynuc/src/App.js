import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Home from './pages/home/home.view';
import './App.css';
import './assets/fonts.css';
import FlightCard from './components/flightcardcolors/flightcard.view'

function App() {
    return (
        <div>
            <SimpleReactLightbox>
            <Home/>
            </SimpleReactLightbox>
            {/* <FlightCard /> */}
        </div>
    );
}

export default App;
